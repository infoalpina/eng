def calculaAR(T, dados):
    A = [1000, 0.0425, -0.006875, 0.000025]
    R = 0
    for I in range(1, 5):
        R += A[I - 1] * T ** (I - 1)
    return [A, R]
