# -*- encoding: utf-8 -*-
from __future__ import annotations
from types import *
from typing import *

class ImagePreview:
    def __class__(*args, **kwargs) -> Any: pass
    def __contains__(self, key, /): pass
    def __delattr__(self, name, /): pass
    def __delitem__(self, key, /): pass
    def __dir__(*args, **kwargs) -> Any: pass
    __doc__: None
    def __eq__(self, value, /): pass
    def __format__(self, format_spec, /): pass
    def __ge__(self, value, /): pass
    def __getattribute__(self, name, /): pass
    def __getitem__(self, key, /): pass
    def __gt__(self, value, /): pass
    def __hash__(self, /): pass
    def __init__(self, /, *args, **kwargs): pass
    def __init_subclass__(self, /, *args, **kwargs): pass
    def __le__(self, value, /): pass
    def __lt__(self, value, /): pass
    __module__: str
    def __ne__(self, value, /): pass
    def __new__(self, value, /): pass
    def __reduce__(self, /): pass
    def __reduce_ex__(self, protocol, /): pass
    def __repr__(self, /): pass
    def __setattr__(self, name, value, /): pass
    def __setitem__(self, key, value, /): pass
    def __sizeof__(self, /): pass
    __slots__: Tuple
    def __str__(self, /): pass
    def __subclasshook__(self, /): pass
    def as_pointer(*args, **kwargs) -> Any: pass
    bl_rna: ImagePreview
    def bl_rna_get_subclass(*args, **kwargs) -> Any: pass
    def bl_rna_get_subclass_py(*args, **kwargs) -> Any: pass
    def driver_add(*args, **kwargs) -> Any: pass
    def driver_remove(*args, **kwargs) -> Any: pass
    def get(*args, **kwargs) -> Any: pass
    id_data: GetSetDescriptorType
    def is_property_hidden(*args, **kwargs) -> Any: pass
    def is_property_overridable_library(*args, **kwargs) -> Any: pass
    def is_property_readonly(*args, **kwargs) -> Any: pass
    def is_property_set(*args, **kwargs) -> Any: pass
    def items(*args, **kwargs) -> Any: pass
    def keyframe_delete(*args, **kwargs) -> Any: pass
    def keyframe_insert(*args, **kwargs) -> Any: pass
    def keys(*args, **kwargs) -> Any: pass
    def path_from_id(*args, **kwargs) -> Any: pass
    def path_resolve(*args, **kwargs) -> Any: pass
    def pop(*args, **kwargs) -> Any: pass
    def property_overridable_library_set(*args, **kwargs) -> Any: pass
    def property_unset(*args, **kwargs) -> Any: pass
    def type_recast(*args, **kwargs) -> Any: pass
    def values(*args, **kwargs) -> Any: pass



class Matrix:
    Diagonal: Any
    Identity: Any
    OrthoProjection: Any
    Rotation: Any
    Scale: Any
    Shear: Any
    Translation: Any
    def __add__(self, value, /): pass
    def __class__(*args, **kwargs) -> Any: pass
    def __copy__(*args, **kwargs) -> Any: pass
    def __deepcopy__(*args, **kwargs) -> Any: pass
    def __delattr__(self, name, /): pass
    def __delitem__(self, key, /): pass
    def __dir__(self, /): pass
    __doc__: str
    def __eq__(self, value, /): pass
    def __format__(self, format_spec, /): pass
    def __ge__(self, value, /): pass
    def __getattribute__(self, name, /): pass
    def __getitem__(self, key, /): pass
    def __gt__(self, value, /): pass
    def __hash__(self, /): pass
    def __imatmul__(self, value, /): pass
    def __imul__(self, value, /): pass
    def __init__(self, /, *args, **kwargs): pass
    def __init_subclass__(self, /, *args, **kwargs): pass
    def __invert__(self, /): pass
    def __le__(self, value, /): pass
    def __len__(self, /): pass
    def __lt__(self, value, /): pass
    def __matmul__(self, value, /): pass
    def __mul__(self, value, /): pass
    def __ne__(self, value, /): pass
    def __new__(self, value, /): pass
    def __radd__(self, value, /): pass
    def __reduce__(self, /): pass
    def __reduce_ex__(self, protocol, /): pass
    def __repr__(self, /): pass
    def __rmatmul__(self, value, /): pass
    def __rmul__(self, value, /): pass
    def __rsub__(self, value, /): pass
    def __setattr__(self, name, value, /): pass
    def __setitem__(self, key, value, /): pass
    def __sizeof__(self, /): pass
    def __str__(self, /): pass
    def __sub__(self, value, /): pass
    def __subclasshook__(self, value, /): pass
    def adjugate(*args, **kwargs) -> Any: pass
    def adjugated(*args, **kwargs) -> Any: pass
    col: GetSetDescriptorType
    def copy(*args, **kwargs) -> Any: pass
    def decompose(*args, **kwargs) -> Any: pass
    def determinant(*args, **kwargs) -> Any: pass
    def freeze(*args, **kwargs) -> Any: pass
    def identity(*args, **kwargs) -> Any: pass
    def invert(*args, **kwargs) -> Any: pass
    def invert_safe(*args, **kwargs) -> Any: pass
    def inverted(*args, **kwargs) -> Any: pass
    def inverted_safe(*args, **kwargs) -> Any: pass
    is_frozen: GetSetDescriptorType
    is_negative: GetSetDescriptorType
    is_orthogonal: GetSetDescriptorType
    is_orthogonal_axis_vectors: GetSetDescriptorType
    is_wrapped: GetSetDescriptorType
    def lerp(*args, **kwargs) -> Any: pass
    median_scale: GetSetDescriptorType
    def normalize(*args, **kwargs) -> Any: pass
    def normalized(*args, **kwargs) -> Any: pass
    owner: GetSetDescriptorType
    def resize_4x4(*args, **kwargs) -> Any: pass
    def rotate(*args, **kwargs) -> Any: pass
    row: GetSetDescriptorType
    def to_2x2(*args, **kwargs) -> Any: pass
    def to_3x3(*args, **kwargs) -> Any: pass
    def to_4x4(*args, **kwargs) -> Any: pass
    def to_euler(*args, **kwargs) -> Any: pass
    def to_quaternion(*args, **kwargs) -> Any: pass
    def to_scale(*args, **kwargs) -> Any: pass
    def to_translation(*args, **kwargs) -> Any: pass
    translation: GetSetDescriptorType
    def transpose(*args, **kwargs) -> Any: pass
    def transposed(*args, **kwargs) -> Any: pass
    def zero(*args, **kwargs) -> Any: pass



class FieldSettings:
    def __class__(*args, **kwargs) -> Any: pass
    def __contains__(self, key, /): pass
    def __delattr__(self, name, /): pass
    def __delitem__(self, key, /): pass
    def __dir__(*args, **kwargs) -> Any: pass
    __doc__: None
    def __eq__(self, value, /): pass
    def __format__(self, format_spec, /): pass
    def __ge__(self, value, /): pass
    def __getattribute__(self, name, /): pass
    def __getitem__(self, key, /): pass
    def __gt__(self, value, /): pass
    def __hash__(self, /): pass
    def __init__(self, /, *args, **kwargs): pass
    def __init_subclass__(self, /, *args, **kwargs): pass
    def __le__(self, value, /): pass
    def __lt__(self, value, /): pass
    __module__: str
    def __ne__(self, value, /): pass
    def __new__(self, value, /): pass
    def __reduce__(self, /): pass
    def __reduce_ex__(self, protocol, /): pass
    def __repr__(self, /): pass
    def __setattr__(self, name, value, /): pass
    def __setitem__(self, key, value, /): pass
    def __sizeof__(self, /): pass
    __slots__: Tuple
    def __str__(self, /): pass
    def __subclasshook__(self, /): pass
    def as_pointer(*args, **kwargs) -> Any: pass
    bl_rna: FieldSettings
    def bl_rna_get_subclass(*args, **kwargs) -> Any: pass
    def bl_rna_get_subclass_py(*args, **kwargs) -> Any: pass
    def driver_add(*args, **kwargs) -> Any: pass
    def driver_remove(*args, **kwargs) -> Any: pass
    def get(*args, **kwargs) -> Any: pass
    id_data: GetSetDescriptorType
    def is_property_hidden(*args, **kwargs) -> Any: pass
    def is_property_overridable_library(*args, **kwargs) -> Any: pass
    def is_property_readonly(*args, **kwargs) -> Any: pass
    def is_property_set(*args, **kwargs) -> Any: pass
    def items(*args, **kwargs) -> Any: pass
    def keyframe_delete(*args, **kwargs) -> Any: pass
    def keyframe_insert(*args, **kwargs) -> Any: pass
    def keys(*args, **kwargs) -> Any: pass
    def path_from_id(*args, **kwargs) -> Any: pass
    def path_resolve(*args, **kwargs) -> Any: pass
    def pop(*args, **kwargs) -> Any: pass
    def property_overridable_library_set(*args, **kwargs) -> Any: pass
    def property_unset(*args, **kwargs) -> Any: pass
    def type_recast(*args, **kwargs) -> Any: pass
    def values(*args, **kwargs) -> Any: pass



class ObjectDisplay:
    def __class__(*args, **kwargs) -> Any: pass
    def __contains__(self, key, /): pass
    def __delattr__(self, name, /): pass
    def __delitem__(self, key, /): pass
    def __dir__(*args, **kwargs) -> Any: pass
    __doc__: None
    def __eq__(self, value, /): pass
    def __format__(self, format_spec, /): pass
    def __ge__(self, value, /): pass
    def __getattribute__(self, name, /): pass
    def __getitem__(self, key, /): pass
    def __gt__(self, value, /): pass
    def __hash__(self, /): pass
    def __init__(self, /, *args, **kwargs): pass
    def __init_subclass__(self, /, *args, **kwargs): pass
    def __le__(self, value, /): pass
    def __lt__(self, value, /): pass
    __module__: str
    def __ne__(self, value, /): pass
    def __new__(self, value, /): pass
    def __reduce__(self, /): pass
    def __reduce_ex__(self, protocol, /): pass
    def __repr__(self, /): pass
    def __setattr__(self, name, value, /): pass
    def __setitem__(self, key, value, /): pass
    def __sizeof__(self, /): pass
    __slots__: Tuple
    def __str__(self, /): pass
    def __subclasshook__(self, /): pass
    def as_pointer(*args, **kwargs) -> Any: pass
    bl_rna: ObjectDisplay
    def bl_rna_get_subclass(*args, **kwargs) -> Any: pass
    def bl_rna_get_subclass_py(*args, **kwargs) -> Any: pass
    def driver_add(*args, **kwargs) -> Any: pass
    def driver_remove(*args, **kwargs) -> Any: pass
    def get(*args, **kwargs) -> Any: pass
    id_data: GetSetDescriptorType
    def is_property_hidden(*args, **kwargs) -> Any: pass
    def is_property_overridable_library(*args, **kwargs) -> Any: pass
    def is_property_readonly(*args, **kwargs) -> Any: pass
    def is_property_set(*args, **kwargs) -> Any: pass
    def items(*args, **kwargs) -> Any: pass
    def keyframe_delete(*args, **kwargs) -> Any: pass
    def keyframe_insert(*args, **kwargs) -> Any: pass
    def keys(*args, **kwargs) -> Any: pass
    def path_from_id(*args, **kwargs) -> Any: pass
    def path_resolve(*args, **kwargs) -> Any: pass
    def pop(*args, **kwargs) -> Any: pass
    def property_overridable_library_set(*args, **kwargs) -> Any: pass
    def property_unset(*args, **kwargs) -> Any: pass
    def type_recast(*args, **kwargs) -> Any: pass
    def values(*args, **kwargs) -> Any: pass



class Quaternion:
    def __add__(self, value, /): pass
    def __class__(*args, **kwargs) -> Any: pass
    def __copy__(*args, **kwargs) -> Any: pass
    def __deepcopy__(*args, **kwargs) -> Any: pass
    def __delattr__(self, name, /): pass
    def __delitem__(self, key, /): pass
    def __dir__(self, /): pass
    __doc__: str
    def __eq__(self, value, /): pass
    def __format__(self, format_spec, /): pass
    def __ge__(self, value, /): pass
    def __getattribute__(self, name, /): pass
    def __getitem__(self, key, /): pass
    def __gt__(self, value, /): pass
    def __hash__(self, /): pass
    def __imatmul__(self, value, /): pass
    def __imul__(self, value, /): pass
    def __init__(self, /, *args, **kwargs): pass
    def __init_subclass__(self, /, *args, **kwargs): pass
    def __le__(self, value, /): pass
    def __len__(self, /): pass
    def __lt__(self, value, /): pass
    def __matmul__(self, value, /): pass
    def __mul__(self, value, /): pass
    def __ne__(self, value, /): pass
    def __neg__(self, /): pass
    def __new__(self, /): pass
    def __pos__(self, /): pass
    def __radd__(self, value, /): pass
    def __reduce__(self, /): pass
    def __reduce_ex__(self, protocol, /): pass
    def __repr__(self, /): pass
    def __rmatmul__(self, value, /): pass
    def __rmul__(self, value, /): pass
    def __rsub__(self, value, /): pass
    def __setattr__(self, name, value, /): pass
    def __setitem__(self, key, value, /): pass
    def __sizeof__(self, /): pass
    def __str__(self, /): pass
    def __sub__(self, value, /): pass
    def __subclasshook__(self, value, /): pass
    angle: GetSetDescriptorType
    axis: GetSetDescriptorType
    def conjugate(*args, **kwargs) -> Any: pass
    def conjugated(*args, **kwargs) -> Any: pass
    def copy(*args, **kwargs) -> Any: pass
    def cross(*args, **kwargs) -> Any: pass
    def dot(*args, **kwargs) -> Any: pass
    def freeze(*args, **kwargs) -> Any: pass
    def identity(*args, **kwargs) -> Any: pass
    def invert(*args, **kwargs) -> Any: pass
    def inverted(*args, **kwargs) -> Any: pass
    is_frozen: GetSetDescriptorType
    is_wrapped: GetSetDescriptorType
    magnitude: GetSetDescriptorType
    def make_compatible(*args, **kwargs) -> Any: pass
    def negate(*args, **kwargs) -> Any: pass
    def normalize(*args, **kwargs) -> Any: pass
    def normalized(*args, **kwargs) -> Any: pass
    owner: GetSetDescriptorType
    def rotate(*args, **kwargs) -> Any: pass
    def rotation_difference(*args, **kwargs) -> Any: pass
    def slerp(*args, **kwargs) -> Any: pass
    def to_axis_angle(*args, **kwargs) -> Any: pass
    def to_euler(*args, **kwargs) -> Any: pass
    def to_exponential_map(*args, **kwargs) -> Any: pass
    def to_matrix(*args, **kwargs) -> Any: pass
    def to_swing_twist(*args, **kwargs) -> Any: pass
    w: GetSetDescriptorType
    x: GetSetDescriptorType
    y: GetSetDescriptorType
    z: GetSetDescriptorType



class Euler:
    def __class__(*args, **kwargs) -> Any: pass
    def __copy__(*args, **kwargs) -> Any: pass
    def __deepcopy__(*args, **kwargs) -> Any: pass
    def __delattr__(self, name, /): pass
    def __delitem__(self, key, /): pass
    def __dir__(self, /): pass
    __doc__: str
    def __eq__(self, value, /): pass
    def __format__(self, format_spec, /): pass
    def __ge__(self, value, /): pass
    def __getattribute__(self, name, /): pass
    def __getitem__(self, key, /): pass
    def __gt__(self, value, /): pass
    def __hash__(self, /): pass
    def __init__(self, /, *args, **kwargs): pass
    def __init_subclass__(self, /, *args, **kwargs): pass
    def __le__(self, value, /): pass
    def __len__(self, /): pass
    def __lt__(self, value, /): pass
    def __ne__(self, value, /): pass
    def __new__(self, value, /): pass
    def __reduce__(self, /): pass
    def __reduce_ex__(self, protocol, /): pass
    def __repr__(self, /): pass
    def __setattr__(self, name, value, /): pass
    def __setitem__(self, key, value, /): pass
    def __sizeof__(self, /): pass
    def __str__(self, /): pass
    def __subclasshook__(self, /): pass
    def copy(*args, **kwargs) -> Any: pass
    def freeze(*args, **kwargs) -> Any: pass
    is_frozen: GetSetDescriptorType
    is_wrapped: GetSetDescriptorType
    def make_compatible(*args, **kwargs) -> Any: pass
    order: GetSetDescriptorType
    owner: GetSetDescriptorType
    def rotate(*args, **kwargs) -> Any: pass
    def rotate_axis(*args, **kwargs) -> Any: pass
    def to_matrix(*args, **kwargs) -> Any: pass
    def to_quaternion(*args, **kwargs) -> Any: pass
    x: GetSetDescriptorType
    y: GetSetDescriptorType
    z: GetSetDescriptorType
    def zero(*args, **kwargs) -> Any: pass



class Vector:
    Fill: Any
    Linspace: Any
    Range: Any
    Repeat: Any
    def __add__(self, value, /): pass
    def __class__(*args, **kwargs) -> Any: pass
    def __copy__(*args, **kwargs) -> Any: pass
    def __deepcopy__(*args, **kwargs) -> Any: pass
    def __delattr__(self, name, /): pass
    def __delitem__(self, key, /): pass
    def __dir__(self, /): pass
    __doc__: str
    def __eq__(self, value, /): pass
    def __format__(self, format_spec, /): pass
    def __ge__(self, value, /): pass
    def __getattribute__(self, name, /): pass
    def __getitem__(self, key, /): pass
    def __gt__(self, value, /): pass
    def __hash__(self, /): pass
    def __iadd__(self, value, /): pass
    def __imatmul__(self, value, /): pass
    def __imul__(self, value, /): pass
    def __init__(self, /, *args, **kwargs): pass
    def __init_subclass__(self, /, *args, **kwargs): pass
    def __isub__(self, value, /): pass
    def __itruediv__(self, value, /): pass
    def __le__(self, value, /): pass
    def __len__(self, /): pass
    def __lt__(self, value, /): pass
    def __matmul__(self, value, /): pass
    def __mul__(self, value, /): pass
    def __ne__(self, value, /): pass
    def __neg__(self, /): pass
    def __new__(self, /): pass
    def __pos__(self, /): pass
    def __radd__(self, value, /): pass
    def __reduce__(self, /): pass
    def __reduce_ex__(self, protocol, /): pass
    def __repr__(self, /): pass
    def __rmatmul__(self, value, /): pass
    def __rmul__(self, value, /): pass
    def __rsub__(self, value, /): pass
    def __rtruediv__(self, value, /): pass
    def __setattr__(self, name, value, /): pass
    def __setitem__(self, key, value, /): pass
    def __sizeof__(self, /): pass
    def __str__(self, /): pass
    def __sub__(self, value, /): pass
    def __subclasshook__(self, value, /): pass
    def __truediv__(self, value, /): pass
    def angle(*args, **kwargs) -> Any: pass
    def angle_signed(*args, **kwargs) -> Any: pass
    def copy(*args, **kwargs) -> Any: pass
    def cross(*args, **kwargs) -> Any: pass
    def dot(*args, **kwargs) -> Any: pass
    def freeze(*args, **kwargs) -> Any: pass
    is_frozen: GetSetDescriptorType
    is_wrapped: GetSetDescriptorType
    length: GetSetDescriptorType
    length_squared: GetSetDescriptorType
    def lerp(*args, **kwargs) -> Any: pass
    magnitude: GetSetDescriptorType
    def negate(*args, **kwargs) -> Any: pass
    def normalize(*args, **kwargs) -> Any: pass
    def normalized(*args, **kwargs) -> Any: pass
    def orthogonal(*args, **kwargs) -> Any: pass
    owner: GetSetDescriptorType
    def project(*args, **kwargs) -> Any: pass
    def reflect(*args, **kwargs) -> Any: pass
    def resize(*args, **kwargs) -> Any: pass
    def resize_2d(*args, **kwargs) -> Any: pass
    def resize_3d(*args, **kwargs) -> Any: pass
    def resize_4d(*args, **kwargs) -> Any: pass
    def resized(*args, **kwargs) -> Any: pass
    def rotate(*args, **kwargs) -> Any: pass
    def rotation_difference(*args, **kwargs) -> Any: pass
    def slerp(*args, **kwargs) -> Any: pass
    def to_2d(*args, **kwargs) -> Any: pass
    def to_3d(*args, **kwargs) -> Any: pass
    def to_4d(*args, **kwargs) -> Any: pass
    def to_track_quat(*args, **kwargs) -> Any: pass
    def to_tuple(*args, **kwargs) -> Any: pass
    w: GetSetDescriptorType
    ww: GetSetDescriptorType
    www: GetSetDescriptorType
    wwww: GetSetDescriptorType
    wwwx: GetSetDescriptorType
    wwwy: GetSetDescriptorType
    wwwz: GetSetDescriptorType
    wwx: GetSetDescriptorType
    wwxw: GetSetDescriptorType
    wwxx: GetSetDescriptorType
    wwxy: GetSetDescriptorType
    wwxz: GetSetDescriptorType
    wwy: GetSetDescriptorType
    wwyw: GetSetDescriptorType
    wwyx: GetSetDescriptorType
    wwyy: GetSetDescriptorType
    wwyz: GetSetDescriptorType
    wwz: GetSetDescriptorType
    wwzw: GetSetDescriptorType
    wwzx: GetSetDescriptorType
    wwzy: GetSetDescriptorType
    wwzz: GetSetDescriptorType
    wx: GetSetDescriptorType
    wxw: GetSetDescriptorType
    wxww: GetSetDescriptorType
    wxwx: GetSetDescriptorType
    wxwy: GetSetDescriptorType
    wxwz: GetSetDescriptorType
    wxx: GetSetDescriptorType
    wxxw: GetSetDescriptorType
    wxxx: GetSetDescriptorType
    wxxy: GetSetDescriptorType
    wxxz: GetSetDescriptorType
    wxy: GetSetDescriptorType
    wxyw: GetSetDescriptorType
    wxyx: GetSetDescriptorType
    wxyy: GetSetDescriptorType
    wxyz: GetSetDescriptorType
    wxz: GetSetDescriptorType
    wxzw: GetSetDescriptorType
    wxzx: GetSetDescriptorType
    wxzy: GetSetDescriptorType
    wxzz: GetSetDescriptorType
    wy: GetSetDescriptorType
    wyw: GetSetDescriptorType
    wyww: GetSetDescriptorType
    wywx: GetSetDescriptorType
    wywy: GetSetDescriptorType
    wywz: GetSetDescriptorType
    wyx: GetSetDescriptorType
    wyxw: GetSetDescriptorType
    wyxx: GetSetDescriptorType
    wyxy: GetSetDescriptorType
    wyxz: GetSetDescriptorType
    wyy: GetSetDescriptorType
    wyyw: GetSetDescriptorType
    wyyx: GetSetDescriptorType
    wyyy: GetSetDescriptorType
    wyyz: GetSetDescriptorType
    wyz: GetSetDescriptorType
    wyzw: GetSetDescriptorType
    wyzx: GetSetDescriptorType
    wyzy: GetSetDescriptorType
    wyzz: GetSetDescriptorType
    wz: GetSetDescriptorType
    wzw: GetSetDescriptorType
    wzww: GetSetDescriptorType
    wzwx: GetSetDescriptorType
    wzwy: GetSetDescriptorType
    wzwz: GetSetDescriptorType
    wzx: GetSetDescriptorType
    wzxw: GetSetDescriptorType
    wzxx: GetSetDescriptorType
    wzxy: GetSetDescriptorType
    wzxz: GetSetDescriptorType
    wzy: GetSetDescriptorType
    wzyw: GetSetDescriptorType
    wzyx: GetSetDescriptorType
    wzyy: GetSetDescriptorType
    wzyz: GetSetDescriptorType
    wzz: GetSetDescriptorType
    wzzw: GetSetDescriptorType
    wzzx: GetSetDescriptorType
    wzzy: GetSetDescriptorType
    wzzz: GetSetDescriptorType
    x: GetSetDescriptorType
    xw: GetSetDescriptorType
    xww: GetSetDescriptorType
    xwww: GetSetDescriptorType
    xwwx: GetSetDescriptorType
    xwwy: GetSetDescriptorType
    xwwz: GetSetDescriptorType
    xwx: GetSetDescriptorType
    xwxw: GetSetDescriptorType
    xwxx: GetSetDescriptorType
    xwxy: GetSetDescriptorType
    xwxz: GetSetDescriptorType
    xwy: GetSetDescriptorType
    xwyw: GetSetDescriptorType
    xwyx: GetSetDescriptorType
    xwyy: GetSetDescriptorType
    xwyz: GetSetDescriptorType
    xwz: GetSetDescriptorType
    xwzw: GetSetDescriptorType
    xwzx: GetSetDescriptorType
    xwzy: GetSetDescriptorType
    xwzz: GetSetDescriptorType
    xx: GetSetDescriptorType
    xxw: GetSetDescriptorType
    xxww: GetSetDescriptorType
    xxwx: GetSetDescriptorType
    xxwy: GetSetDescriptorType
    xxwz: GetSetDescriptorType
    xxx: GetSetDescriptorType
    xxxw: GetSetDescriptorType
    xxxx: GetSetDescriptorType
    xxxy: GetSetDescriptorType
    xxxz: GetSetDescriptorType
    xxy: GetSetDescriptorType
    xxyw: GetSetDescriptorType
    xxyx: GetSetDescriptorType
    xxyy: GetSetDescriptorType
    xxyz: GetSetDescriptorType
    xxz: GetSetDescriptorType
    xxzw: GetSetDescriptorType
    xxzx: GetSetDescriptorType
    xxzy: GetSetDescriptorType
    xxzz: GetSetDescriptorType
    xy: GetSetDescriptorType
    xyw: GetSetDescriptorType
    xyww: GetSetDescriptorType
    xywx: GetSetDescriptorType
    xywy: GetSetDescriptorType
    xywz: GetSetDescriptorType
    xyx: GetSetDescriptorType
    xyxw: GetSetDescriptorType
    xyxx: GetSetDescriptorType
    xyxy: GetSetDescriptorType
    xyxz: GetSetDescriptorType
    xyy: GetSetDescriptorType
    xyyw: GetSetDescriptorType
    xyyx: GetSetDescriptorType
    xyyy: GetSetDescriptorType
    xyyz: GetSetDescriptorType
    xyz: GetSetDescriptorType
    xyzw: GetSetDescriptorType
    xyzx: GetSetDescriptorType
    xyzy: GetSetDescriptorType
    xyzz: GetSetDescriptorType
    xz: GetSetDescriptorType
    xzw: GetSetDescriptorType
    xzww: GetSetDescriptorType
    xzwx: GetSetDescriptorType
    xzwy: GetSetDescriptorType
    xzwz: GetSetDescriptorType
    xzx: GetSetDescriptorType
    xzxw: GetSetDescriptorType
    xzxx: GetSetDescriptorType
    xzxy: GetSetDescriptorType
    xzxz: GetSetDescriptorType
    xzy: GetSetDescriptorType
    xzyw: GetSetDescriptorType
    xzyx: GetSetDescriptorType
    xzyy: GetSetDescriptorType
    xzyz: GetSetDescriptorType
    xzz: GetSetDescriptorType
    xzzw: GetSetDescriptorType
    xzzx: GetSetDescriptorType
    xzzy: GetSetDescriptorType
    xzzz: GetSetDescriptorType
    y: GetSetDescriptorType
    yw: GetSetDescriptorType
    yww: GetSetDescriptorType
    ywww: GetSetDescriptorType
    ywwx: GetSetDescriptorType
    ywwy: GetSetDescriptorType
    ywwz: GetSetDescriptorType
    ywx: GetSetDescriptorType
    ywxw: GetSetDescriptorType
    ywxx: GetSetDescriptorType
    ywxy: GetSetDescriptorType
    ywxz: GetSetDescriptorType
    ywy: GetSetDescriptorType
    ywyw: GetSetDescriptorType
    ywyx: GetSetDescriptorType
    ywyy: GetSetDescriptorType
    ywyz: GetSetDescriptorType
    ywz: GetSetDescriptorType
    ywzw: GetSetDescriptorType
    ywzx: GetSetDescriptorType
    ywzy: GetSetDescriptorType
    ywzz: GetSetDescriptorType
    yx: GetSetDescriptorType
    yxw: GetSetDescriptorType
    yxww: GetSetDescriptorType
    yxwx: GetSetDescriptorType
    yxwy: GetSetDescriptorType
    yxwz: GetSetDescriptorType
    yxx: GetSetDescriptorType
    yxxw: GetSetDescriptorType
    yxxx: GetSetDescriptorType
    yxxy: GetSetDescriptorType
    yxxz: GetSetDescriptorType
    yxy: GetSetDescriptorType
    yxyw: GetSetDescriptorType
    yxyx: GetSetDescriptorType
    yxyy: GetSetDescriptorType
    yxyz: GetSetDescriptorType
    yxz: GetSetDescriptorType
    yxzw: GetSetDescriptorType
    yxzx: GetSetDescriptorType
    yxzy: GetSetDescriptorType
    yxzz: GetSetDescriptorType
    yy: GetSetDescriptorType
    yyw: GetSetDescriptorType
    yyww: GetSetDescriptorType
    yywx: GetSetDescriptorType
    yywy: GetSetDescriptorType
    yywz: GetSetDescriptorType
    yyx: GetSetDescriptorType
    yyxw: GetSetDescriptorType
    yyxx: GetSetDescriptorType
    yyxy: GetSetDescriptorType
    yyxz: GetSetDescriptorType
    yyy: GetSetDescriptorType
    yyyw: GetSetDescriptorType
    yyyx: GetSetDescriptorType
    yyyy: GetSetDescriptorType
    yyyz: GetSetDescriptorType
    yyz: GetSetDescriptorType
    yyzw: GetSetDescriptorType
    yyzx: GetSetDescriptorType
    yyzy: GetSetDescriptorType
    yyzz: GetSetDescriptorType
    yz: GetSetDescriptorType
    yzw: GetSetDescriptorType
    yzww: GetSetDescriptorType
    yzwx: GetSetDescriptorType
    yzwy: GetSetDescriptorType
    yzwz: GetSetDescriptorType
    yzx: GetSetDescriptorType
    yzxw: GetSetDescriptorType
    yzxx: GetSetDescriptorType
    yzxy: GetSetDescriptorType
    yzxz: GetSetDescriptorType
    yzy: GetSetDescriptorType
    yzyw: GetSetDescriptorType
    yzyx: GetSetDescriptorType
    yzyy: GetSetDescriptorType
    yzyz: GetSetDescriptorType
    yzz: GetSetDescriptorType
    yzzw: GetSetDescriptorType
    yzzx: GetSetDescriptorType
    yzzy: GetSetDescriptorType
    yzzz: GetSetDescriptorType
    z: GetSetDescriptorType
    def zero(*args, **kwargs) -> Any: pass
    zw: GetSetDescriptorType
    zww: GetSetDescriptorType
    zwww: GetSetDescriptorType
    zwwx: GetSetDescriptorType
    zwwy: GetSetDescriptorType
    zwwz: GetSetDescriptorType
    zwx: GetSetDescriptorType
    zwxw: GetSetDescriptorType
    zwxx: GetSetDescriptorType
    zwxy: GetSetDescriptorType
    zwxz: GetSetDescriptorType
    zwy: GetSetDescriptorType
    zwyw: GetSetDescriptorType
    zwyx: GetSetDescriptorType
    zwyy: GetSetDescriptorType
    zwyz: GetSetDescriptorType
    zwz: GetSetDescriptorType
    zwzw: GetSetDescriptorType
    zwzx: GetSetDescriptorType
    zwzy: GetSetDescriptorType
    zwzz: GetSetDescriptorType
    zx: GetSetDescriptorType
    zxw: GetSetDescriptorType
    zxww: GetSetDescriptorType
    zxwx: GetSetDescriptorType
    zxwy: GetSetDescriptorType
    zxwz: GetSetDescriptorType
    zxx: GetSetDescriptorType
    zxxw: GetSetDescriptorType
    zxxx: GetSetDescriptorType
    zxxy: GetSetDescriptorType
    zxxz: GetSetDescriptorType
    zxy: GetSetDescriptorType
    zxyw: GetSetDescriptorType
    zxyx: GetSetDescriptorType
    zxyy: GetSetDescriptorType
    zxyz: GetSetDescriptorType
    zxz: GetSetDescriptorType
    zxzw: GetSetDescriptorType
    zxzx: GetSetDescriptorType
    zxzy: GetSetDescriptorType
    zxzz: GetSetDescriptorType
    zy: GetSetDescriptorType
    zyw: GetSetDescriptorType
    zyww: GetSetDescriptorType
    zywx: GetSetDescriptorType
    zywy: GetSetDescriptorType
    zywz: GetSetDescriptorType
    zyx: GetSetDescriptorType
    zyxw: GetSetDescriptorType
    zyxx: GetSetDescriptorType
    zyxy: GetSetDescriptorType
    zyxz: GetSetDescriptorType
    zyy: GetSetDescriptorType
    zyyw: GetSetDescriptorType
    zyyx: GetSetDescriptorType
    zyyy: GetSetDescriptorType
    zyyz: GetSetDescriptorType
    zyz: GetSetDescriptorType
    zyzw: GetSetDescriptorType
    zyzx: GetSetDescriptorType
    zyzy: GetSetDescriptorType
    zyzz: GetSetDescriptorType
    zz: GetSetDescriptorType
    zzw: GetSetDescriptorType
    zzww: GetSetDescriptorType
    zzwx: GetSetDescriptorType
    zzwy: GetSetDescriptorType
    zzwz: GetSetDescriptorType
    zzx: GetSetDescriptorType
    zzxw: GetSetDescriptorType
    zzxx: GetSetDescriptorType
    zzxy: GetSetDescriptorType
    zzxz: GetSetDescriptorType
    zzy: GetSetDescriptorType
    zzyw: GetSetDescriptorType
    zzyx: GetSetDescriptorType
    zzyy: GetSetDescriptorType
    zzyz: GetSetDescriptorType
    zzz: GetSetDescriptorType
    zzzw: GetSetDescriptorType
    zzzx: GetSetDescriptorType
    zzzy: GetSetDescriptorType
    zzzz: GetSetDescriptorType



class member_descriptor:
    def __class__(*args, **kwargs) -> Any: pass
    def __delattr__(self, name, /): pass
    def __delete__(self, instance, /): pass
    def __dir__(self, /): pass
    __doc__: GetSetDescriptorType
    def __eq__(self, value, /): pass
    def __format__(self, format_spec, /): pass
    def __ge__(self, value, /): pass
    def __get__(self, instance, owner, /): pass
    def __getattribute__(self, name, /): pass
    def __gt__(self, value, /): pass
    def __hash__(self, /): pass
    def __init__(self, /, *args, **kwargs): pass
    def __init_subclass__(self, /, *args, **kwargs): pass
    def __le__(self, value, /): pass
    def __lt__(self, value, /): pass
    __name__: str
    def __ne__(self, value, /): pass
    def __new__(self, value, /): pass
    __objclass__: member_descriptor
    __qualname__: str
    def __reduce__(*args, **kwargs) -> Any: pass
    def __reduce_ex__(self, protocol, /): pass
    def __repr__(self, /): pass
    def __set__(self, instance, value, /): pass
    def __setattr__(self, name, value, /): pass
    def __sizeof__(self, /): pass
    def __str__(self, /): pass
    def __subclasshook__(self, /): pass



class property:
    def __class__(*args, **kwargs) -> Any: pass
    def __delattr__(self, name, /): pass
    def __delete__(self, instance, /): pass
    def __dir__(self, /): pass
    __doc__: str
    def __eq__(self, value, /): pass
    def __format__(self, format_spec, /): pass
    def __ge__(self, value, /): pass
    def __get__(self, instance, owner, /): pass
    def __getattribute__(self, name, /): pass
    def __gt__(self, value, /): pass
    def __hash__(self, /): pass
    def __init__(self, /, *args, **kwargs): pass
    def __init_subclass__(self, /, *args, **kwargs): pass
    __isabstractmethod__: GetSetDescriptorType
    def __le__(self, value, /): pass
    def __lt__(self, value, /): pass
    def __ne__(self, value, /): pass
    def __new__(self, value, /): pass
    def __reduce__(self, /): pass
    def __reduce_ex__(self, protocol, /): pass
    def __repr__(self, /): pass
    def __set__(self, instance, value, /): pass
    def __setattr__(self, name, value, /): pass
    def __sizeof__(self, /): pass
    def __str__(self, /): pass
    def __subclasshook__(self, /): pass
    def deleter(*args, **kwargs) -> Any: pass
    fdel: member_descriptor
    fget: member_descriptor
    fset: member_descriptor
    def getter(*args, **kwargs) -> Any: pass
    def setter(*args, **kwargs) -> Any: pass



class Mesh:
    def __class__(*args, **kwargs) -> Any: pass
    def __contains__(self, key, /): pass
    def __delattr__(self, name, /): pass
    def __delitem__(self, key, /): pass
    def __dir__(*args, **kwargs) -> Any: pass
    __doc__: None
    def __eq__(self, value, /): pass
    def __format__(self, format_spec, /): pass
    def __ge__(self, value, /): pass
    def __getattribute__(self, name, /): pass
    def __getitem__(self, key, /): pass
    def __gt__(self, value, /): pass
    def __hash__(self, /): pass
    def __init__(self, /, *args, **kwargs): pass
    def __init_subclass__(self, /, *args, **kwargs): pass
    def __le__(self, value, /): pass
    def __lt__(self, value, /): pass
    __module__: str
    def __ne__(self, value, /): pass
    def __new__(self, value, /): pass
    def __reduce__(self, /): pass
    def __reduce_ex__(self, protocol, /): pass
    def __repr__(self, /): pass
    def __setattr__(self, name, value, /): pass
    def __setitem__(self, key, value, /): pass
    def __sizeof__(self, /): pass
    __slots__: Tuple
    def __str__(self, /): pass
    def __subclasshook__(self, /): pass
    def as_pointer(*args, **kwargs) -> Any: pass
    bl_rna: Mesh
    def bl_rna_get_subclass(*args, **kwargs) -> Any: pass
    def bl_rna_get_subclass_py(*args, **kwargs) -> Any: pass
    cycles: Tuple
    def driver_add(*args, **kwargs) -> Any: pass
    def driver_remove(*args, **kwargs) -> Any: pass
    edge_keys: property
    def from_pydata(self, vertices, edges, faces): pass
    def get(*args, **kwargs) -> Any: pass
    id_data: GetSetDescriptorType
    def is_property_hidden(*args, **kwargs) -> Any: pass
    def is_property_overridable_library(*args, **kwargs) -> Any: pass
    def is_property_readonly(*args, **kwargs) -> Any: pass
    def is_property_set(*args, **kwargs) -> Any: pass
    def items(*args, **kwargs) -> Any: pass
    def keyframe_delete(*args, **kwargs) -> Any: pass
    def keyframe_insert(*args, **kwargs) -> Any: pass
    def keys(*args, **kwargs) -> Any: pass
    def path_from_id(*args, **kwargs) -> Any: pass
    def path_resolve(*args, **kwargs) -> Any: pass
    def pop(*args, **kwargs) -> Any: pass
    def property_overridable_library_set(*args, **kwargs) -> Any: pass
    def property_unset(*args, **kwargs) -> Any: pass
    def type_recast(*args, **kwargs) -> Any: pass
    def values(*args, **kwargs) -> Any: pass



class CyclesVisibilitySettings:
    __annotations__: Dict
    def __class__(*args, **kwargs) -> Any: pass
    def __contains__(self, key, /): pass
    def __delattr__(self, name, /): pass
    def __delitem__(self, key, /): pass
    __dict__: mappingproxy
    def __dir__(*args, **kwargs) -> Any: pass
    __doc__: None
    def __eq__(self, value, /): pass
    def __format__(self, format_spec, /): pass
    def __ge__(self, value, /): pass
    def __getattribute__(self, name, /): pass
    def __getitem__(self, key, /): pass
    def __gt__(self, value, /): pass
    def __hash__(self, /): pass
    def __init__(self, /, *args, **kwargs): pass
    def __init_subclass__(self, /, *args, **kwargs): pass
    def __le__(self, value, /): pass
    def __lt__(self, value, /): pass
    __module__: str
    def __ne__(self, value, /): pass
    def __new__(self, value, /): pass
    def __reduce__(self, /): pass
    def __reduce_ex__(self, protocol, /): pass
    def __repr__(self, /): pass
    def __setattr__(self, name, value, /): pass
    def __setitem__(self, key, value, /): pass
    def __sizeof__(self, /): pass
    __slots__: Tuple
    def __str__(self, /): pass
    def __subclasshook__(self, /): pass
    __weakref__: GetSetDescriptorType
    def as_pointer(*args, **kwargs) -> Any: pass
    bl_rna: CyclesVisibilitySettings
    def bl_rna_get_subclass(*args, **kwargs) -> Any: pass
    def bl_rna_get_subclass_py(*args, **kwargs) -> Any: pass
    def driver_add(*args, **kwargs) -> Any: pass
    def driver_remove(*args, **kwargs) -> Any: pass
    def get(*args, **kwargs) -> Any: pass
    id_data: GetSetDescriptorType
    def is_property_hidden(*args, **kwargs) -> Any: pass
    def is_property_overridable_library(*args, **kwargs) -> Any: pass
    def is_property_readonly(*args, **kwargs) -> Any: pass
    def is_property_set(*args, **kwargs) -> Any: pass
    def items(*args, **kwargs) -> Any: pass
    def keyframe_delete(*args, **kwargs) -> Any: pass
    def keyframe_insert(*args, **kwargs) -> Any: pass
    def keys(*args, **kwargs) -> Any: pass
    def path_from_id(*args, **kwargs) -> Any: pass
    def path_resolve(*args, **kwargs) -> Any: pass
    def pop(*args, **kwargs) -> Any: pass
    def property_overridable_library_set(*args, **kwargs) -> Any: pass
    def property_unset(*args, **kwargs) -> Any: pass
    def register(): pass
    def type_recast(*args, **kwargs) -> Any: pass
    def unregister(): pass
    def values(*args, **kwargs) -> Any: pass



class mappingproxy:
    def __class__(*args, **kwargs) -> Any: pass
    def __contains__(self, key, /): pass
    def __delattr__(self, name, /): pass
    def __dir__(self, /): pass
    __doc__: None
    def __eq__(self, value, /): pass
    def __format__(self, format_spec, /): pass
    def __ge__(self, value, /): pass
    def __getattribute__(self, name, /): pass
    def __getitem__(self, key, /): pass
    def __gt__(self, value, /): pass
    __hash__: None
    def __init__(self, /, *args, **kwargs): pass
    def __init_subclass__(self, /, *args, **kwargs): pass
    def __iter__(self, /): pass
    def __le__(self, value, /): pass
    def __len__(self, /): pass
    def __lt__(self, value, /): pass
    def __ne__(self, value, /): pass
    def __new__(self, value, /): pass
    def __reduce__(self, /): pass
    def __reduce_ex__(self, protocol, /): pass
    def __repr__(self, /): pass
    def __setattr__(self, name, value, /): pass
    def __sizeof__(self, /): pass
    def __str__(self, /): pass
    def __subclasshook__(self, /): pass
    def copy(*args, **kwargs) -> Any: pass
    def get(*args, **kwargs) -> Any: pass
    def items(*args, **kwargs) -> Any: pass
    def keys(*args, **kwargs) -> Any: pass
    def values(*args, **kwargs) -> Any: pass



class CyclesObjectSettings:
    __annotations__: Dict
    def __class__(*args, **kwargs) -> Any: pass
    def __contains__(self, key, /): pass
    def __delattr__(self, name, /): pass
    def __delitem__(self, key, /): pass
    __dict__: mappingproxy
    def __dir__(*args, **kwargs) -> Any: pass
    __doc__: None
    def __eq__(self, value, /): pass
    def __format__(self, format_spec, /): pass
    def __ge__(self, value, /): pass
    def __getattribute__(self, name, /): pass
    def __getitem__(self, key, /): pass
    def __gt__(self, value, /): pass
    def __hash__(self, /): pass
    def __init__(self, /, *args, **kwargs): pass
    def __init_subclass__(self, /, *args, **kwargs): pass
    def __le__(self, value, /): pass
    def __lt__(self, value, /): pass
    __module__: str
    def __ne__(self, value, /): pass
    def __new__(self, value, /): pass
    def __reduce__(self, /): pass
    def __reduce_ex__(self, protocol, /): pass
    def __repr__(self, /): pass
    def __setattr__(self, name, value, /): pass
    def __setitem__(self, key, value, /): pass
    def __sizeof__(self, /): pass
    __slots__: Tuple
    def __str__(self, /): pass
    def __subclasshook__(self, /): pass
    __weakref__: GetSetDescriptorType
    def as_pointer(*args, **kwargs) -> Any: pass
    bl_rna: CyclesObjectSettings
    def bl_rna_get_subclass(*args, **kwargs) -> Any: pass
    def bl_rna_get_subclass_py(*args, **kwargs) -> Any: pass
    def driver_add(*args, **kwargs) -> Any: pass
    def driver_remove(*args, **kwargs) -> Any: pass
    def get(*args, **kwargs) -> Any: pass
    id_data: GetSetDescriptorType
    def is_property_hidden(*args, **kwargs) -> Any: pass
    def is_property_overridable_library(*args, **kwargs) -> Any: pass
    def is_property_readonly(*args, **kwargs) -> Any: pass
    def is_property_set(*args, **kwargs) -> Any: pass
    def items(*args, **kwargs) -> Any: pass
    def keyframe_delete(*args, **kwargs) -> Any: pass
    def keyframe_insert(*args, **kwargs) -> Any: pass
    def keys(*args, **kwargs) -> Any: pass
    def path_from_id(*args, **kwargs) -> Any: pass
    def path_resolve(*args, **kwargs) -> Any: pass
    def pop(*args, **kwargs) -> Any: pass
    def property_overridable_library_set(*args, **kwargs) -> Any: pass
    def property_unset(*args, **kwargs) -> Any: pass
    def register(): pass
    def type_recast(*args, **kwargs) -> Any: pass
    def unregister(): pass
    def values(*args, **kwargs) -> Any: pass



class bpy_prop_collection:
    def __bool__(self, /): pass
    def __class__(*args, **kwargs) -> Any: pass
    def __contains__(self, key, /): pass
    def __delattr__(self, name, /): pass
    def __delitem__(self, key, /): pass
    def __dir__(*args, **kwargs) -> Any: pass
    __doc__: None
    def __eq__(self, value, /): pass
    def __format__(self, format_spec, /): pass
    def __ge__(self, value, /): pass
    def __getattribute__(self, name, /): pass
    def __getitem__(self, key, /): pass
    def __gt__(self, value, /): pass
    def __hash__(self, /): pass
    def __init__(self, /, *args, **kwargs): pass
    def __init_subclass__(self, /, *args, **kwargs): pass
    def __iter__(self, /): pass
    def __le__(self, value, /): pass
    def __len__(self, /): pass
    def __lt__(self, value, /): pass
    def __ne__(self, value, /): pass
    def __new__(self, value, /): pass
    def __reduce__(self, /): pass
    def __reduce_ex__(self, protocol, /): pass
    def __repr__(self, /): pass
    def __setattr__(self, name, value, /): pass
    def __setitem__(self, key, value, /): pass
    def __sizeof__(self, /): pass
    def __str__(self, /): pass
    def __subclasshook__(self, /): pass
    def as_bytes(*args, **kwargs) -> Any: pass
    data: GetSetDescriptorType
    def find(*args, **kwargs) -> Any: pass
    def foreach_get(*args, **kwargs) -> Any: pass
    def foreach_set(*args, **kwargs) -> Any: pass
    def get(*args, **kwargs) -> Any: pass
    id_data: GetSetDescriptorType
    def items(*args, **kwargs) -> Any: pass
    def keys(*args, **kwargs) -> Any: pass
    def path_from_id(*args, **kwargs) -> Any: pass
    rna_type: GetSetDescriptorType
    def update(*args, **kwargs) -> Any: pass
    def values(*args, **kwargs) -> Any: pass



class CollisionSettings:
    def __class__(*args, **kwargs) -> Any: pass
    def __contains__(self, key, /): pass
    def __delattr__(self, name, /): pass
    def __delitem__(self, key, /): pass
    def __dir__(*args, **kwargs) -> Any: pass
    __doc__: None
    def __eq__(self, value, /): pass
    def __format__(self, format_spec, /): pass
    def __ge__(self, value, /): pass
    def __getattribute__(self, name, /): pass
    def __getitem__(self, key, /): pass
    def __gt__(self, value, /): pass
    def __hash__(self, /): pass
    def __init__(self, /, *args, **kwargs): pass
    def __init_subclass__(self, /, *args, **kwargs): pass
    def __le__(self, value, /): pass
    def __lt__(self, value, /): pass
    __module__: str
    def __ne__(self, value, /): pass
    def __new__(self, value, /): pass
    def __reduce__(self, /): pass
    def __reduce_ex__(self, protocol, /): pass
    def __repr__(self, /): pass
    def __setattr__(self, name, value, /): pass
    def __setitem__(self, key, value, /): pass
    def __sizeof__(self, /): pass
    __slots__: Tuple
    def __str__(self, /): pass
    def __subclasshook__(self, /): pass
    def as_pointer(*args, **kwargs) -> Any: pass
    bl_rna: CollisionSettings
    def bl_rna_get_subclass(*args, **kwargs) -> Any: pass
    def bl_rna_get_subclass_py(*args, **kwargs) -> Any: pass
    def driver_add(*args, **kwargs) -> Any: pass
    def driver_remove(*args, **kwargs) -> Any: pass
    def get(*args, **kwargs) -> Any: pass
    id_data: GetSetDescriptorType
    def is_property_hidden(*args, **kwargs) -> Any: pass
    def is_property_overridable_library(*args, **kwargs) -> Any: pass
    def is_property_readonly(*args, **kwargs) -> Any: pass
    def is_property_set(*args, **kwargs) -> Any: pass
    def items(*args, **kwargs) -> Any: pass
    def keyframe_delete(*args, **kwargs) -> Any: pass
    def keyframe_insert(*args, **kwargs) -> Any: pass
    def keys(*args, **kwargs) -> Any: pass
    def path_from_id(*args, **kwargs) -> Any: pass
    def path_resolve(*args, **kwargs) -> Any: pass
    def pop(*args, **kwargs) -> Any: pass
    def property_overridable_library_set(*args, **kwargs) -> Any: pass
    def property_unset(*args, **kwargs) -> Any: pass
    def type_recast(*args, **kwargs) -> Any: pass
    def values(*args, **kwargs) -> Any: pass



class bpy_prop_array:
    def __bool__(self, /): pass
    def __class__(*args, **kwargs) -> Any: pass
    def __contains__(self, key, /): pass
    def __delattr__(self, name, /): pass
    def __delitem__(self, key, /): pass
    def __dir__(*args, **kwargs) -> Any: pass
    __doc__: None
    def __eq__(self, value, /): pass
    def __format__(self, format_spec, /): pass
    def __ge__(self, value, /): pass
    def __getattribute__(self, name, /): pass
    def __getitem__(self, key, /): pass
    def __gt__(self, value, /): pass
    def __hash__(self, /): pass
    def __init__(self, /, *args, **kwargs): pass
    def __init_subclass__(self, /, *args, **kwargs): pass
    def __iter__(self, /): pass
    def __le__(self, value, /): pass
    def __len__(self, /): pass
    def __lt__(self, value, /): pass
    def __ne__(self, value, /): pass
    def __new__(self, value, /): pass
    def __reduce__(self, /): pass
    def __reduce_ex__(self, protocol, /): pass
    def __repr__(self, /): pass
    def __setattr__(self, name, value, /): pass
    def __setitem__(self, key, value, /): pass
    def __sizeof__(self, /): pass
    def __str__(self, /): pass
    def __subclasshook__(self, /): pass
    def as_bytes(*args, **kwargs) -> Any: pass
    data: GetSetDescriptorType
    def foreach_get(*args, **kwargs) -> Any: pass
    def foreach_set(*args, **kwargs) -> Any: pass
    id_data: GetSetDescriptorType
    def path_from_id(*args, **kwargs) -> Any: pass
    rna_type: GetSetDescriptorType
    def update(*args, **kwargs) -> Any: pass



class AnimViz:
    def __class__(*args, **kwargs) -> Any: pass
    def __contains__(self, key, /): pass
    def __delattr__(self, name, /): pass
    def __delitem__(self, key, /): pass
    def __dir__(*args, **kwargs) -> Any: pass
    __doc__: None
    def __eq__(self, value, /): pass
    def __format__(self, format_spec, /): pass
    def __ge__(self, value, /): pass
    def __getattribute__(self, name, /): pass
    def __getitem__(self, key, /): pass
    def __gt__(self, value, /): pass
    def __hash__(self, /): pass
    def __init__(self, /, *args, **kwargs): pass
    def __init_subclass__(self, /, *args, **kwargs): pass
    def __le__(self, value, /): pass
    def __lt__(self, value, /): pass
    __module__: str
    def __ne__(self, value, /): pass
    def __new__(self, value, /): pass
    def __reduce__(self, /): pass
    def __reduce_ex__(self, protocol, /): pass
    def __repr__(self, /): pass
    def __setattr__(self, name, value, /): pass
    def __setitem__(self, key, value, /): pass
    def __sizeof__(self, /): pass
    __slots__: Tuple
    def __str__(self, /): pass
    def __subclasshook__(self, /): pass
    def as_pointer(*args, **kwargs) -> Any: pass
    bl_rna: AnimViz
    def bl_rna_get_subclass(*args, **kwargs) -> Any: pass
    def bl_rna_get_subclass_py(*args, **kwargs) -> Any: pass
    def driver_add(*args, **kwargs) -> Any: pass
    def driver_remove(*args, **kwargs) -> Any: pass
    def get(*args, **kwargs) -> Any: pass
    id_data: GetSetDescriptorType
    def is_property_hidden(*args, **kwargs) -> Any: pass
    def is_property_overridable_library(*args, **kwargs) -> Any: pass
    def is_property_readonly(*args, **kwargs) -> Any: pass
    def is_property_set(*args, **kwargs) -> Any: pass
    def items(*args, **kwargs) -> Any: pass
    def keyframe_delete(*args, **kwargs) -> Any: pass
    def keyframe_insert(*args, **kwargs) -> Any: pass
    def keys(*args, **kwargs) -> Any: pass
    def path_from_id(*args, **kwargs) -> Any: pass
    def path_resolve(*args, **kwargs) -> Any: pass
    def pop(*args, **kwargs) -> Any: pass
    def property_overridable_library_set(*args, **kwargs) -> Any: pass
    def property_unset(*args, **kwargs) -> Any: pass
    def type_recast(*args, **kwargs) -> Any: pass
    def values(*args, **kwargs) -> Any: pass



class Material:
    def __class__(*args, **kwargs) -> Any: pass
    def __contains__(self, key, /): pass
    def __delattr__(self, name, /): pass
    def __delitem__(self, key, /): pass
    def __dir__(*args, **kwargs) -> Any: pass
    __doc__: None
    def __eq__(self, value, /): pass
    def __format__(self, format_spec, /): pass
    def __ge__(self, value, /): pass
    def __getattribute__(self, name, /): pass
    def __getitem__(self, key, /): pass
    def __gt__(self, value, /): pass
    def __hash__(self, /): pass
    def __init__(self, /, *args, **kwargs): pass
    def __init_subclass__(self, /, *args, **kwargs): pass
    def __le__(self, value, /): pass
    def __lt__(self, value, /): pass
    __module__: str
    def __ne__(self, value, /): pass
    def __new__(self, value, /): pass
    def __reduce__(self, /): pass
    def __reduce_ex__(self, protocol, /): pass
    def __repr__(self, /): pass
    def __setattr__(self, name, value, /): pass
    def __setitem__(self, key, value, /): pass
    def __sizeof__(self, /): pass
    __slots__: Tuple
    def __str__(self, /): pass
    def __subclasshook__(self, /): pass
    def as_pointer(*args, **kwargs) -> Any: pass
    bl_rna: Material
    def bl_rna_get_subclass(*args, **kwargs) -> Any: pass
    def bl_rna_get_subclass_py(*args, **kwargs) -> Any: pass
    cycles: Tuple
    def driver_add(*args, **kwargs) -> Any: pass
    def driver_remove(*args, **kwargs) -> Any: pass
    def get(*args, **kwargs) -> Any: pass
    id_data: GetSetDescriptorType
    def is_property_hidden(*args, **kwargs) -> Any: pass
    def is_property_overridable_library(*args, **kwargs) -> Any: pass
    def is_property_readonly(*args, **kwargs) -> Any: pass
    def is_property_set(*args, **kwargs) -> Any: pass
    def items(*args, **kwargs) -> Any: pass
    def keyframe_delete(*args, **kwargs) -> Any: pass
    def keyframe_insert(*args, **kwargs) -> Any: pass
    def keys(*args, **kwargs) -> Any: pass
    def path_from_id(*args, **kwargs) -> Any: pass
    def path_resolve(*args, **kwargs) -> Any: pass
    def pop(*args, **kwargs) -> Any: pass
    def property_overridable_library_set(*args, **kwargs) -> Any: pass
    def property_unset(*args, **kwargs) -> Any: pass
    def type_recast(*args, **kwargs) -> Any: pass
    def values(*args, **kwargs) -> Any: pass



class BpyObject:
    __doc__: None
    __module__: str
    __slots__: Tuple
    active_material: Material
    active_material_index: int
    active_shape_key: None
    active_shape_key_index: int
    animation_data: None
    def animation_data_clear(*args, **kwargs) -> Any: pass
    def animation_data_create(*args, **kwargs) -> Any: pass
    animation_visualization: AnimViz
    bl_rna: BpyObject
    bound_box: bpy_prop_array
    def cache_release(*args, **kwargs) -> Any: pass
    def calc_matrix_camera(*args, **kwargs) -> Any: pass
    def camera_fit_coords(*args, **kwargs) -> Any: pass
    children: Tuple
    def closest_point_on_mesh(*args, **kwargs) -> Any: pass
    collision: CollisionSettings
    color: bpy_prop_array
    constraints: bpy_prop_collection
    def convert_space(*args, **kwargs) -> Any: pass
    def copy(*args, **kwargs) -> Any: pass
    cycles: CyclesObjectSettings
    cycles_visibility: CyclesVisibilitySettings
    data: Any
    delta_location: Vector
    delta_rotation_euler: Euler
    delta_rotation_quaternion: Quaternion
    delta_scale: Vector
    dimensions: Vector
    display: ObjectDisplay
    display_bounds_type: str
    display_type: str
    empty_display_size: float
    empty_display_type: str
    empty_image_depth: str
    empty_image_offset: bpy_prop_array
    empty_image_side: str
    def evaluated_get(*args, **kwargs) -> Any: pass
    face_maps: bpy_prop_collection
    field: FieldSettings
    def find_armature(*args, **kwargs) -> Any: pass
    def generate_gpencil_strokes(*args, **kwargs) -> Any: pass
    grease_pencil_modifiers: bpy_prop_collection
    def hide_get(*args, **kwargs) -> Any: pass
    hide_render: bool
    hide_select: bool
    def hide_set(*args, **kwargs) -> Any: pass
    hide_viewport: bool
    def holdout_get(*args, **kwargs) -> Any: pass
    image_user: None
    def indirect_only_get(*args, **kwargs) -> Any: pass
    instance_collection: None
    instance_faces_scale: float
    instance_type: str
    def is_deform_modified(*args, **kwargs) -> Any: pass
    is_embedded_data: bool
    is_evaluated: bool
    is_from_instancer: bool
    is_from_set: bool
    is_instancer: bool
    is_library_indirect: bool
    def is_modified(*args, **kwargs) -> Any: pass
    library: None
    def local_view_get(*args, **kwargs) -> Any: pass
    def local_view_set(*args, **kwargs) -> Any: pass
    location: Vector
    lock_location: bpy_prop_array
    lock_rotation: bpy_prop_array
    lock_rotation_w: bool
    lock_rotations_4d: bool
    lock_scale: bpy_prop_array
    def make_local(*args, **kwargs) -> Any: pass
    material_slots: bpy_prop_collection
    matrix_basis: Matrix
    matrix_local: Matrix
    matrix_parent_inverse: Matrix
    matrix_world: Matrix
    mode: str
    modifiers: bpy_prop_collection
    motion_path: None
    name: str
    name_full: str
    original: BpyObject
    def override_create(*args, **kwargs) -> Any: pass
    override_library: None
    parent: None
    parent_bone: str
    parent_type: str
    parent_vertices: bpy_prop_array
    particle_systems: bpy_prop_collection
    pass_index: int
    pose: None
    pose_library: None
    preview: ImagePreview
    proxy: None
    proxy_collection: None
    def ray_cast(*args, **kwargs) -> Any: pass
    rigid_body: None
    rigid_body_constraint: None
    rna_type: BpyObject
    rotation_axis_angle: bpy_prop_array
    rotation_euler: Euler
    rotation_mode: str
    rotation_quaternion: Quaternion
    scale: Vector
    def select_get(*args, **kwargs) -> Any: pass
    def select_set(*args, **kwargs) -> Any: pass
    shader_effects: bpy_prop_collection
    def shape_key_add(*args, **kwargs) -> Any: pass
    def shape_key_clear(*args, **kwargs) -> Any: pass
    def shape_key_remove(*args, **kwargs) -> Any: pass
    show_all_edges: bool
    show_axis: bool
    show_bounds: bool
    show_empty_image_only_axis_aligned: bool
    show_empty_image_orthographic: bool
    show_empty_image_perspective: bool
    show_in_front: bool
    show_instancer_for_render: bool
    show_instancer_for_viewport: bool
    show_name: bool
    show_only_shape_key: bool
    show_texture_space: bool
    show_transparent: bool
    show_wire: bool
    soft_body: None
    tag: bool
    def to_mesh(*args, **kwargs) -> Any: pass
    def to_mesh_clear(*args, **kwargs) -> Any: pass
    track_axis: str
    type: str
    up_axis: str
    def update_from_editmode(*args, **kwargs) -> Any: pass
    def update_tag(*args, **kwargs) -> Any: pass
    use_dynamic_topology_sculpting: bool
    use_empty_image_alpha: bool
    use_fake_user: bool
    use_grease_pencil_lights: bool
    use_instance_faces_scale: bool
    use_instance_vertices_rotation: bool
    use_shape_key_edit_mode: bool
    def user_clear(*args, **kwargs) -> Any: pass
    def user_of_id(*args, **kwargs) -> Any: pass
    def user_remap(*args, **kwargs) -> Any: pass
    users: int
    users_collection: Tuple
    users_scene: Tuple
    vertex_groups: bpy_prop_collection
    def visible_get(*args, **kwargs) -> Any: pass
    def visible_in_viewport_get(*args, **kwargs) -> Any: pass
