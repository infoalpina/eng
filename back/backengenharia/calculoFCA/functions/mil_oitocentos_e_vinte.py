import math
def calculaA0A1A2A3LEC(L1):
    A0 = 273.15 + L1
    A1 = math.sqrt(A0)
    A2 = math.sqrt(A0 ** 3)
    A3 = 245.4 * 10 ** (-12 / A0) / A0
    L = 2.64815E-03 * A1 / (1 + A3)
    E = 1.45749E-06 * A2 / (L1 + 383.5)
    C = 1.005 + 1.35E-08 * (L1 + 30) ** 2
    return [A0, A1, A2, A3, L, E, C]
