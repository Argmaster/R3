# -*- encoding: utf-8 -*-
import os
import re
import json
import pickle
import time

from src.py.bpyx import *


SAFETY_HEADER = """
def print(*args, **kwargs):         raise RuntimeError("No IO operation allowed in __gen__ file.")
def input(*args, **kwargs):         raise RuntimeError("No IO operation allowed in __gen__ file.")
def open(*args, **kwargs):          raise RuntimeError("No IO operation allowed in __gen__ file.")
def exec(*args, **kwargs):          raise RuntimeError("No code execution allowed in __gen__ file.")
def eval(*args, **kwargs):          raise RuntimeError("No code evaluation allowed in __gen__ file.")
def __import__(*args, **kwargs):    raise RuntimeError("No import operation allowed in __gen__ file.")
"""

TType.PathExpression.magic_symbols.update(
    {
        "$fontdir": f"{os.getcwd()}/data/assets/fonts",
        "$cwd": f"{os.getcwd()}",
        "$default": f"{os.getcwd()}/data/assets/fonts/JetBrainsMono/JetBrainsMono.ttf",
    }
)


class TemplatePackage:
    class NotPythonGtypeError:
        pass

    def __init__(self, package_path: str) -> None:
        self.package_path = package_path
        self.pkg_path = f"{package_path}/__pkg__"
        self.gen_path = f"{package_path}/__gen__"
        with open(self.pkg_path, "r", encoding="utf-8") as file:
            self.pkg_dict = json.load(file)
        self._class = str(self.pkg_dict.get("class"))
        self._gtype = str(self.pkg_dict.get("gtype"))
        self._author = str(self.pkg_dict.get("author"))
        self._dscp = str(self.pkg_dict.get("dscp"))
        self.tem_dict = self.pkg_dict.get("tem_dict")
        with open(self.gen_path, "r", encoding="utf-8") as file:
            self.gen_source = file.read()

    @staticmethod
    def make_safe(source: str) -> str:
        source = re.sub(
            r"from .*? import .*?\n|import .*?\n|import .*? as .*?\n|from .*? import .*? as .*?\n",
            "",
            source,
        )
        # test if no import statements are present in code
        if re.search(r"\s+import\s+", source) is not None:
            raise RuntimeError("Import keyword forbidden in .pyg/.pyt file.")
        # prepend source code with header code overwriting all forbidden functions
        source = SAFETY_HEADER + source
        return source

    def params_json(self):
        return json.dumps(self.tem_dict)

    def execute(
        self, template_params: dict, log_func: callable = lambda *x, **y: None
    ) -> BpyObject:
        # clear workspace
        Global.deleteAll()
        exec(
            compile(self.make_safe(self.gen_source), "<__gen__.source>", "exec"),
            {
                "time": time,
                "bpy": bpy,
                "bmesh": bmesh,
                "numpy": numpy,
                "math": math,
                "re": re,
                "json": json,
                "pickle": pickle,
                "Object": Object,
                "TType": TType,
                "Template": Template(self.tem_dict, template_params),
                "Mesh": Mesh,
                "Modifier": Modifier,
                "Material": Material,
                "Transform": Transform,
                "Global": Global,
                "Edit": Edit,
                "LowLevel": LowLevel,
                "log": log_func,
                'CONST': CONST,
            },
        )
        Object.join(Global.getActive(), *Global.getAll())
        Object.MoveTo(Global.getActive(), 0, 0, 0)
        return Global.getActive()

