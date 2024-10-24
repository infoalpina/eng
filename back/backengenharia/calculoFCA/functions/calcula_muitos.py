import math
from .mil_quatrocentos_e_quarenta import calculaP6P7P8RXH


def calculaMuitos(X1, Q8, M, H9, T9, U1, C9, P):
    C7 = 1
    C6 = 1.93
    C8 = (C7 + C6 * X1) * 1000
    A4 = Q8 * 1000 * 1088.57 * 3600 / (M * C8 * H9 * 1000)
    A0 = math.exp(A4)
    T2 = (A0*T9-(T9-U1))/A0
    A1 = C8*A4/1088.57
    A2 = math.exp(A1)
    L1 = T9
    F1 = T9
    P6P7P8RXH = calculaP6P7P8RXH(F1, L1, P)
    P6 = P6P7P8RXH[0]
    P7 = P6P7P8RXH[1]
    P8 = P6P7P8RXH[2]
    R = P6P7P8RXH[3]
    X = P6P7P8RXH[4]
    H = P6P7P8RXH[5]
    X3 = X
    X2 = (A2*X3-(X3-X1))/A2
    L1 = T2
    F1 = T2
    P6P7P8RXH = calculaP6P7P8RXH(F1, L1, P)
    P6 = P6P7P8RXH[0]
    P7 = P6P7P8RXH[1]
    P8 = P6P7P8RXH[2]
    R = P6P7P8RXH[3]
    X = P6P7P8RXH[4]
    H = P6P7P8RXH[5]
    X4 = X
    Q4 = M*(X2-X4)*C9*T2/3600
    V = M*(X4-X1)
    Q5 = M*(X2-X1)*T9*C9/3600
    W = 0
    if (X2-X4) <= 0:
        Z = W+V
        return [C7, C6, C8, A4, A0, T2, A1, A2, L1, F1, Z, P6, P7, P8, R, X, H, Q4, P6, P7, P8, R, X, H, X4, Q4, V, Q5, W, Z, X2]
    else:
        W = M*(X2-X4)
        Z = W+V
        return [C7, C6, C8, A4, A0, T2, A1, A2, L1, F1, Z, P6, P7, P8, R, X, H, Q4, P6, P7, P8, R, X, H, X4, Q4, V, Q5, W, Z, X2]
