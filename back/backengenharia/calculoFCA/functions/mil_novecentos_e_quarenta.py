import math


def calculaA8(R8, E8, D0):
    A8 = 137.21*(R8*E8*3600/(4*D0))**(1/3)
    return A8
