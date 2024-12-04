
def analise_5700(Z, Fdata, J9, N1, V, R1, S, W, R3, A, D6, R, Hvalue, selecao_dados_principais):
    Z0 = 1.76
    list = [float(selecao_dados_principais[J9]['INSASP4Lados']),
            float(selecao_dados_principais[J9]['ASP3Lados']), float(selecao_dados_principais[J9]['ASP2Lados'])]
    F1 = list[N1]
    W1 = V/list[N1]

    D2 = Z0*W1 ** 2*R1/2
    if float(selecao_dados_principais[J9]['AreaSecTrans']) != 2.0:
        Z0 = 4
        D2 = Z0*W ** 2*R3/2
    Z1 = 0

    for J in range(4):
        chave = 'A' + str(J + 7)
        print('chave', chave)
        Z1 = float(Z1)
        Hvalue_chave = float(Hvalue[chave])
        W = float(W)

        Z1 = Z1+Hvalue_chave*W ** (J+1)

    Z1 = Z1+float(Hvalue['A10'])*(R-10)

    D3 = Z1*W ** 2*R3/2
    D4 = D2+D3+D6
    return [D2, D3, D4, F1, W1, Z0, Z1]
