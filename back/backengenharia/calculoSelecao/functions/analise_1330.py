from .analise_5200 import analise_5200
from .analise_5700 import analise_5700
from .analise_5860 import analise_5860


def analise_1330(Kv, K, J7, J9, R, A, N1, H, Z, D1, L, F, V, R1, S, W, R3, D6, R2, C0, H1, P0, N2, Fdata, T1, T2, Hvalue, selecao_dados_principais):
    # 1390
    J7 += 1
    J9 += 1

    get_5200 = analise_5200(K, J7, J9, R, A, N1, H, Z,
                            D1, L, Hvalue)

    As = get_5200[0]
    K0 = get_5200[1]
    M = get_5200[2]
    K3 = get_5200[3]

    E9 = 0.02
    # 1419
    print('Kv', Kv)
    print('J7', J7)
    print('J9', J9)
    print('R', R)
    print('A', A)
    print('N1', N1)
    print('H', H)
    print('Z', Z)
    print('D1', D1)
    print(get_5200)
    D9 = abs(Kv-K3)
    D = Kv*100/(L**M*K0)

    print('teste 3')
    get_5700 = analise_5700(
        Z, Fdata, J9, N1, V, R1, S, W, R3, A,  D6, R, Hvalue, selecao_dados_principais)

    D2 = get_5700[0]
    D3 = get_5700[1]
    D4 = get_5700[2]
    F1 = get_5700[3]
    W1 = get_5700[4]
    Z0 = get_5700[5]
    Z1 = get_5700[6]
    R5 = R2
    print('teste')
    if S[J9][2] != 2:
        print('teste1')
        R5 = R1
    print('teste2')
    V5 = V*R3/R5
    # analise_5860 feita
    get_5860 = analise_5860(Z, C0, L, H1, P0, J7, J9, R,
                            A, N1, H, K, D1, T1, T2, D, Kv, Hvalue)
    # 6070
    D = get_5860[0]
    D1 = get_5860[1]
    D5 = get_5860[2]
    D8 = get_5860[3]
    D9 = get_5860[4]
    H7 = get_5860[5]
    K = get_5860[6]
    K0 = get_5860[7]
    L = get_5860[8]
    L2 = get_5860[9]
    L5 = get_5860[10]
    L6 = get_5860[11]
    L7 = get_5860[12]
    L8 = get_5860[13]
    L9 = get_5860[14]
    M = get_5860[15]
    N = get_5860[16]
    T0 = get_5860[17]
    T1 = get_5860[18]
    T2 = get_5860[19]
    T7 = get_5860[20]
    T8 = get_5860[21]
    T9 = get_5860[22]
    V8 = get_5860[23]
    V9 = get_5860[24]
    Z = get_5860[25]
    U6 = get_5860[26]
    U5 = get_5860[27]
    U7 = get_5860[28]
    As = get_5860[29]

    # imprimira os resultados na tela
    print('P0', P0)
    print("JJ.RTP")
    print(f"{N2} X {S[J9-1][0]} {As}")
    print(f"Delta T: {U6*100+U5-T9} K")
    print()
    print("Codigos dos operacoes :")
    print()
    print(
        "Calculo da potencia consumida do ventilador....... 1")
    print(
        "Novo numero de torres............................. 2")
    print(
        "Novo modelo , novo enchimento..................... 3")
    print(
        "Calculo com novos dados e o mesmo modelo.......... 4")
    print(
        "Novo calculo...................................... 5")
    print(
        "Fim............................................... 6")
    print()
    print(
        "Informe codigo da operacao desejada ")
    return
