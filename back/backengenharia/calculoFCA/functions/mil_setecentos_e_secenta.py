import math
from .mil_seisentos_e_vinte import calculaCeH


def calculaLECH(T, dados):
    L = 0.492 * T ** 0.07
    E = 0.38282 / ((273.15 + T) / 647.3 - 0.216283) - 4.6173
    E = 10**E
    CH = calculaCeH(T, dados)
    return [L, E, CH]

