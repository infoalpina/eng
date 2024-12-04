from .analise_4580 import analise_4580
from .analise_4880 import analise_4880
from .analise_1330 import analise_1330


def analise_770(G0, F, W, R1, M0, N2, H1, C0, P0, K8, L3, F8, I3, K, J9, N1, H, A,
                I8, D6, S, K1, Z, L2, T1, T2, D1, Fdata, selecao_dados_principais, selecao_pilaretes, selecao_camadas_de_enchimento, chars_torre, chars_enchimento, chars_mote_vent, chars_camadas_de_enchimento, NumeroDeLadosLivresEntradaDeAr):
    R = G0/F
    V = F*W
    R3 = R1

    repeat_740 = 0
    while repeat_740 == 0:
        L = V*R3/(M0/N2)
        K9 = H1+Z*C0/L
        H2 = H1+Z*C0/L
        get_4580 = analise_4580(K9, P0)

        K8 = get_4580[0]
        K9 = get_4580[1]
        I5 = get_4580[2]
        L1 = get_4580[3]
        L2 = get_4580[4]
        L3 = get_4580[5]
        L4 = get_4580[6]
        L5 = get_4580[7]
        L6 = get_4580[8]
        L7 = get_4580[9]
        L8 = get_4580[10]
        L9 = get_4580[11]
        P5 = get_4580[12]
        P6 = get_4580[13]
        P7 = get_4580[14]
        P8 = get_4580[15]
        P9 = get_4580[16]
        A1 = get_4580[17]
        A2 = get_4580[18]
        A3 = get_4580[19]

        T5 = K8
        T6 = K8
        X2 = L3
        R2 = L2
        R4 = (R1+R2)/2
        D9 = abs(R3-R4)

        if D9 > 0.0001:
            R3 = R4
        else:
            try:
                get_4880 = analise_4880(T1, T2, C0, L, H1, P0)
            except Exception as e:
                print(f"Erro ao chamar analise_4880: {e}")
                return 500
            Z = get_4880[0]
            N = get_4880[1]
            D9 = get_4880[2]
            D8 = get_4880[3]
            T0 = get_4880[4]
            H7 = get_4880[5]
            L9 = get_4880[6]
            L8 = get_4880[7]
            L6 = get_4880[8]
            L5 = get_4880[9]
            L2 = get_4880[10]
            L7 = get_4880[11]
            L4 = get_4880[12]
            H6 = get_4880[13]
            I4 = get_4880[14]
            Kv = get_4880[15]
            F8 = get_4880[16]

            valores = {}

            # Itera sobre as chaves do dicionário
            for chave in selecao_camadas_de_enchimento[J9]:
                if chave.startswith('TorresCom'):
                    # Remove 'TorresCom' e 'Nmax' ou 'Nmin'
                    if 'Nmax' in chave:
                        novo_nome = chave.replace(
                            'TorresCom', '').replace('Nmax', '')
                        valuenMax = selecao_camadas_de_enchimento[J9][chave]
                        # Adiciona ou atualiza o valor de nMax no dicionário
                        if novo_nome in valores:
                            valores[novo_nome]['nMax'] = valuenMax
                        else:
                            valores[novo_nome] = {
                                'nMax': valuenMax, 'nMin': None}

                    elif 'Nmin' in chave:
                        novo_nome = chave.replace(
                            'TorresCom', '').replace('Nmin', '')
                        valuenMin = selecao_camadas_de_enchimento[J9][chave]
                        # Adiciona ou atualiza o valor de nMin no dicionário
                        if novo_nome in valores:
                            valores[novo_nome]['nMin'] = valuenMin
                        else:
                            valores[novo_nome] = {
                                'nMax': None, 'nMin': valuenMin}
            resultados = []

            for chave, limites in valores.items():
                nMin = int(limites['nMin'])
                nMax = int(limites['nMax'])

                for n in range(nMin, nMax + 1):
                    value = f"{chave}/{n}"
                    for dados in chars_camadas_de_enchimento:
                        if dados['nome'] == value and value not in resultados:
                            resultados.append(value)

            print('resultados', resultados)
            count_start = len(resultados)

            print('teste 1')
            if F8 != 0:
                print('teste 2')
                return 560
            if I3 != 0:
                print('teste 3')
                K2 = resultados[J7]

                if K2 != '':
                    I6 = (N1-1)*8+J7
                    for dados in chars_camadas_de_enchimento:
                        if int(dados['ladosEnchimento']) == int(NumeroDeLadosLivresEntradaDeAr) and dados['condicoesDeEntrada'] == selecao_dados_principais[J9]['AltEntAgua'] and dados['nome'] == K2:
                            Hvalue = dados

                    H0 = Hvalue['Valor']
                    print('H0', H0)

                else:
                    return 200

            if I8 != 0:
                print('teste 4')
                J7 = -1
                J7 = J7+1
                # J7 sera a quantidade de enchimentos possiveis em K
                if J7 <= count_start:
                    print('teste 5')

                    K2 = resultados[J7]
                    if K2 != '':

                        I6 = (N1-1)*8+J7

                        for dados in chars_camadas_de_enchimento:
                            if int(dados['ladosEnchimento']) == int(NumeroDeLadosLivresEntradaDeAr) and dados['condicoesDeEntrada'] == selecao_dados_principais[J9]['AltEntAgua'] and dados['nome'] == K2:
                                Hvalue = dados

                        H0 = Hvalue['Valor']
                        print('H0', H0)

                        analise_1330(Kv, K, J7, J9, R, A, N1, H, Z, D1, L, F, V,
                                     R1, S, W, R3, D6, R2, C0, H1, P0, N2, Fdata, T1, T2, Hvalue, selecao_dados_principais)
                    else:
                        I7 = 1
                        return 560

                else:
                    print('teste 5')
                    I7 = 1
                    return 560
            if K1 != 0:
                print('teste 5')

                # 1030
                J7 = -1
                repeat_1050 = 0
                while repeat_1050 == 0:
                    J7 = J7+1
                    if J7 > count_start:
                        return 200
                    else:
                        K2 = resultados[J7]

                        if K2 == 0:
                            return 200
                        else:
                            if K2 == K1:
                                I6 = (N1-1)*8+J7

                                for dados in chars_camadas_de_enchimento:
                                    if int(dados['ladosEnchimento']) == int(NumeroDeLadosLivresEntradaDeAr) and dados['condicoesDeEntrada'] == selecao_dados_principais[J9]['AltEntAgua'] and dados['nome'] == K2:
                                        Hvalue = dados

                                H0 = Hvalue['Valor']
                                print('H0', H0)

                            analise_1330(Kv, K, J7, J9, R, A, N1, H, Z, D1, L, F, V,
                                         R1, S, W, R3, D6, R2, C0, H1, P0, N2, Fdata, T1, T2, Hvalue, selecao_dados_principais)
            J7 = 0
            J7 = J7+1
            if J7 > count_start:
                return 200
            else:
                K2 = resultados[J7]

                if K2 == 0:
                    return 200
                else:
                    I6 = (N1-1)*8+J7

                    for dados in chars_camadas_de_enchimento:
                        if int(dados['ladosEnchimento']) == int(NumeroDeLadosLivresEntradaDeAr) and dados['condicoesDeEntrada'] == selecao_dados_principais[J9]['AltEntAgua'] and dados['nome'] == K2:
                            Hvalue = dados

                    H0 = Hvalue['Valor']
                    print('H0', H0)

                    analise_1330(Kv, K, J7, J9, R, A, N1, H, Z, D1, L, F, V,
                                 R1, S, W, R3, D6, R2, C0, H1, P0, N2, Fdata, T1, T2, Hvalue, selecao_dados_principais)
    return
