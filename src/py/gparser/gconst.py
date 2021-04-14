from abc import ABC


class Constant(ABC):
    """Container for gerber parser constants
    """
    LINEAR_INTERPOLATION = "LINEAR_INTERPOLATION"
    CIRCULAR_CW_INTERPOLATION = "CIRCULAR_CW_INTERPOLATION"
    CIRCULAR_CCW_INTERPOLATION = "CIRCULAR_CCW_INTERPOLATION"
    G36 = True
    G37 = False
    SINGLEQUAD = "SINGLEQUAD"
    MULTIQUAD = "MULTIQUAD"
    DARK = "DARK"
    CLEAR = "CLEAR"
    BRUSH_RECTANGLE = "R"
    BRUSH_CIRCLE = "C"
    BRUSH_OBROUND = "O"
    BRUSH_POLYGON = "P"
    RAISE = -81
    WARN = -82
    IGNORE = -83