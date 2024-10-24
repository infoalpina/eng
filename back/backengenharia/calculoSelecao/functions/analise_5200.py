from .analise_5610 import analise_5610
from .analise_5670 import analise_5670


def analise_5200(K, J7, J9, R, A, N1, H, Z, D1, L, Hvalue):
    K0 = 0.0  # Inicializando como float

    for J in range(4):
        chave = 'A' + str(J + 1)
        valor_H = float(Hvalue[chave])  # Garantir que valor_H seja float
        valor_R = float(R)  # Garantir que R seja float
        expoente_J = float(J)  # Garantir que J seja float

        K0 += valor_H * valor_R ** expoente_J
        get_5610 = analise_5610(N1, J7, H, J9, R, K0)

        I6 = get_5610[0]
        H0 = get_5610[1]
        F9 = get_5610[2]
        K0 = get_5610[3]

        K0 = analise_5670(Z, K0)[0]
        K0 = K0 * D1 / 100

        M = float(Hvalue['A4'])  # Garantir que M seja float
        K3 = K0 * L ** M

        nome = Hvalue.get('nome', None)
        if nome == 11:
            As = "SG   H=450"
        elif nome == 12:
            As = "SG   H=900"
        elif nome == 13:
            As = "SG    H=1350"
        elif nome == 14:
            As = "SG    H=1800"
        elif nome == 15:
            As = "SG   H=2250"
        elif nome == 22:
            As = "RTP (18)"
        elif nome == 23:
            As = "RTP (14)"
        elif nome == 24:
            As = "A-12  H=1200"
        elif nome == 25:
            As = "A-12  H=1500"
        else:
            As = "A-12  H=1500"

    return [As, K0, M, K3]
