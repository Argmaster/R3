# -*- encoding: utf-8 -*-
from __future__ import annotations
from src.py.pyR3.bpy_type_ import *



class BpyTranslatable:

    def __init__(self, bpy_obj: BpyObject) -> None:
        self.bpy_obj = bpy_obj

    @property
    def location(self) -> Tuple[float, float, float]:
        return self.bpy_obj.location.xyz

    @location.setter
    def location(self, value: Tuple[float, float, float]) -> None:
        self.bpy_obj.location.xyz = value

    @property
    def x(self):
        return self.bpy_obj.location.x

    @x.setter
    def x(self, value: float):
        self.bpy_obj.location.x = value

    @property
    def y(self) -> float:
        return self.bpy_obj.location.y

    @y.setter
    def y(self, value: float) -> None:
        self.bpy_obj.location.y = value

    @property
    def z(self) -> float:
        return self.bpy_obj.location.z

    @z.setter
    def z(self, value: float) -> None:
        "xd"
        self.bpy_obj.location.z = value

    def moveBy(self, vector: Tuple[float, float, float]) -> None:
        """Transform controlled bpy object by given vector.
        
        Args:
            vector (Tuple[float, float, float]): transformation vector
        """
        self.bpy_obj.location.x += vector[0]
        self.bpy_obj.location.y += vector[1]
        self.bpy_obj.location.z += vector[2]



