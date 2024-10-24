import math
import requests
from .calcula_muitos import calculaMuitos
from .mil_e_novecentos import calculaP9N9A9
from .mil_novecentos_e_quarenta import calculaA8
from .mil_novecentos_e_oitenta import calculaK9
from .mil_novecentos_e_secenta import calculaS
from .mil_oitocentos_e_vinte import calculaA0A1A2A3LEC
from .mil_quatrocentos_e_quarenta import calculaP6P7P8RXH
from .quatro_mil_seicentos_e_oitenta import calculaY7Y6Y5H1H2W4N7W5W0V7A0V6S7S6S5S4V5
from .mil_setecentos_e_secenta import calculaLECH
from .mil_seisentos_e_vinte import calculaCeH
from .mil_seicentos_e_secnta import calculaAR
import traceback


def converter_para_numero(valor):
    try:
        return float(valor)
    except (ValueError, TypeError):
        return 0


def calculoGeral(dados, datas, fca, numero_tubos, valorSelectCalorEspecifico):
    try:
        return calculo_FCA(dados, datas, fca, numero_tubos, valorSelectCalorEspecifico, 0.5)
    except:
        try:
            return calculo_FCA(dados, datas, fca, numero_tubos, valorSelectCalorEspecifico, 0.1)
        except:
            try:
                return calculo_FCA(dados, datas, fca, numero_tubos, valorSelectCalorEspecifico, 0.05)
            except:
                try:
                    return calculo_FCA(dados, datas, fca, numero_tubos, valorSelectCalorEspecifico, 0.01)
                except Exception as e:
                    print('e', e)


def calculo_FCA(dados, datas, fca, numero_tubos, valorSelectCalorEspecifico, tolerancia):
    try:
        selectedCompactado = dados['received_data']['selectedCompactado']
        AlturaDoDifusor = dados['received_data']['AlturaDoDifusor']

        Y2 = 0
        A6 = 0

        FCA = fca
        diametro_de_tubo = dados['received_data']['diametro_de_tubo']
        tipo_de_fluido = dados['received_data']['tipo_de_fluido']
        nome_do_projeto = dados['received_data']['nome_do_projeto']
        cliente = dados['received_data']['cliente']
        data_atual = dados['received_data']['data_atual']

        cod_resfriador_TY = dados['received_data']['cod_resfriador_TY']
        temperatura_quente_E_1 = converter_para_numero(
            dados['received_data'].get('temperatura_quente_E_1'))
        temperatura_fria_E_2 = converter_para_numero(
            dados['received_data'].get('temperatura_fria_E_2'))
        temperatura_do_bulbo_umido_E_4 = converter_para_numero(
            dados['received_data'].get('temperatura_do_bulbo_umido_E_4'))
        temperatura_do_bulbo_seco_E_3 = converter_para_numero(
            dados['received_data'].get('temperatura_do_bulbo_seco_E_3'))
        vazao_de_agua_E_6 = converter_para_numero(
            dados['received_data'].get('vazao_de_agua_E_6'))
        perda_de_pressao_estatica_adicional = converter_para_numero(
            dados['received_data'].get('perda_de_pressao_estatica_adicional'))
        numero_de_celulas_E_12 = converter_para_numero(
            dados['received_data'].get('numero_de_celulas_E_12'))

        outros_dados = datas[0]['outros_dados']
        tipo_de_acionamento_de_transmissao = outros_dados[2]['tipo_de_acionamento_de_transmissao']
        potencia_do_motor = outros_dados[2]['potencia_do_motor']
        motor_eletrico_tipo = outros_dados[2]['motor_eletrico_tipo']

        nome_da_torre = datas[0]['nome']

        if outros_dados[3]['modelo'] == 'Compactado':
            T_k0_9 = float(outros_dados[3]['N_de_tub_hor_compact'])
        else:
            T_k0_9 = float(outros_dados[3]['N_de_tub_hor'])
        T_k0_k1 = float(outros_dados[3]['comprimento_dos_feixes'])
        T_k0_k1_mais_4 = datas[0]['areas_transversais']
        ventilador_modelo = outros_dados[1]['modelo']
        diamtro_do_ventilador = float(
            outros_dados[1]['diametro'])
        IND = tipo_de_acionamento_de_transmissao
        potencia_nominal_por_ventilador = float(
            potencia_do_motor)
        PTC = potencia_nominal_por_ventilador/1.1
        rotacao = float(
            outros_dados[2]['rotacao_do_ventilador'])
        T_K0_19 = (math.pi*(diamtro_do_ventilador/1000)*rotacao)/60
        largura = str(int(datas[0]['largura']))
        comprimento = str(int(datas[0]['comprimento']))
        altura = str(int(datas[0]['altura']))
        codigo = comprimento + ' x ' + largura + ' x ' + altura
        T_k0_10 = numero_tubos
        T_k0_11 = float(outros_dados[3]['dist_ent_tub'])
        D0 = float(outros_dados[3]['diam_extern_ent_tub'])
        D1 = float(outros_dados[3]['diam_intern_ent_tub'])
        S0 = float(outros_dados[3]['exp_parede'])
        L8 = float(valorSelectCalorEspecifico)

        pressao_barometrica_e_5 = converter_para_numero(
            dados['received_data'].get('pressao_de_ar_do_ambiente'))

        e_8 = converter_para_numero(
            dados['received_data'].get('velocidade_media_do_ar'))
        calculo0 = True
        while calculo0:
            calculo0 = False
            densidade_de_chuva_e_9 = converter_para_numero(
                dados['received_data'].get('densidade_de_agua_de_irrigacao'))
            if '/' in nome_da_torre:
                partes = nome_da_torre.split('/')
            elif '\\' in nome_da_torre:
                partes = nome_da_torre.split('\\')
            else:
                partes = [nome_da_torre]

            n_de_corpos_e_11 = partes[1]

            n_de_corpos_e_11 = int(n_de_corpos_e_11)

            e_13 = 3
            e_14 = converter_para_numero(
                dados['received_data'].get('fator_de_incrustracao'))
            s = 0.0019
            R6 = e_13

            # jorge passou por aqui

            F9 = e_14
            Z9 = temperatura_quente_E_1 - temperatura_fria_E_2
            Y9 = 10

            W1 = temperatura_quente_E_1
            W2 = temperatura_fria_E_2
            U1 = temperatura_do_bulbo_seco_E_3
            U2 = temperatura_do_bulbo_umido_E_4
            P = pressao_barometrica_e_5

            R0 = float(outros_dados[0]['vazao']) * \
                float(dados['received_data']['numberBombas'])/T_k0_k1_mais_4
            K1 = n_de_corpos_e_11
            n = numero_de_celulas_E_12

            if fca == '1':
                R_R6_2 = 0.01605
            else:
                R_R6_2 = 0.0224

            F8 = ((T_k0_10 / 2 * T_k0_k1 + (T_k0_10 / 2 - 1) * T_k0_11 *
                   math.pi / 2 / 1000) * T_k0_9 * 2) * math.pi * D0

            H0 = 0.8504
            V0 = F8 / (T_k0_k1_mais_4*H0)
            V0 = V0
            V9 = R0 * T_k0_k1_mais_4
            V9 = V9
            J1 = -1
            G9 = vazao_de_agua_E_6 / n
            calculaum = True

            while calculaum:
                calculaum = False
                T = (W1 + W2)/2
                R_A = calculaAR(T, dados)
                R = R_A[1]
                R5 = R
                if FCA == '3' or FCA == '4':
                    R = float(dados['received_data']['densidade_do_fluido'])
                    R5 = float(dados['received_data']['densidade_do_fluido'])
                    C9 = float(dados['received_data']
                               ['calor_especifico_do_fluido'])
                C_H = calculaCeH(T, dados)
                if FCA == '1' or FCA == '2':
                    C9 = C_H[0]

                Q9 = G9*Z9*C9*R5/3600
                Q8 = Q9
                V8 = e_8*T_k0_k1_mais_4
                L1 = U1
                F1 = U2

                P6P7RXH = calculaP6P7P8RXH(F1, L1, P)
                R = P6P7RXH[3]
                X = P6P7RXH[4]
                H = P6P7RXH[5]

                X1 = X
                H1 = H
                R1 = R
                J1 = J1+1
                calculaPartedois = True

                while calculaPartedois:
                    calculaPartedois = False
                    W3 = (W1+W2)/2
                    T = W1
                    C_H = calculaCeH(T, dados)
                    C = C_H[0]
                    H = C_H[1]
                    O2 = H
                    T = W2

                    C_H = calculaCeH(T, dados)
                    C = C_H[0]
                    H = C_H[1]
                    O1 = H

                    C_H = calculaCeH(T, dados)
                    C = C_H[0]
                    H = C_H[1]
                    O3 = H
                    H4 = Q9/(V8*R1)

                    T = W3
                    R_A = calculaAR(T, dados)
                    R5 = R_A[1]
                    if FCA == '3' or FCA == '4':
                        R5 = float(dados['received_data']
                                   ['densidade_do_fluido'])
                    M0 = G9 * R5
                    M = V8 * R1 * 3600
                    M1 = V9*R5
                    H2 = H1+H4
                    T = W3
                    LECH = calculaLECH(T, dados)

                    L = LECH[0]
                    E = LECH[1]
                    CH = LECH[2]
                    C = CH[0]
                    H = CH[1]

                    L9 = L
                    E9 = E
                    C9 = C

                    if FCA == '3' or FCA == '4':
                        L9 = float(dados['received_data']
                                   ['condutibilidade_termica_do_fluido'])
                        E9 = float(dados['received_data']
                                   ['viscosidade_dinamica'])
                        C9 = float(dados['received_data']
                                   ['calor_especifico_do_fluido'])

                    R9 = 4*M0/(2*T_k0_9*3.14159*D1*E9*3600)
                    L1 = U1
                    A0A1A2A3LEC = calculaA0A1A2A3LEC(L1)
                    A0 = A0A1A2A3LEC[0]
                    L = A0A1A2A3LEC[4]
                    E = A0A1A2A3LEC[5]
                    C = A0A1A2A3LEC[6]

                    L7 = L
                    E7 = E
                    F7 = T_k0_9*D0*T_k0_k1

                    R7 = (M*D0)/(E7*3600*(T_k0_k1_mais_4-F7))

                    T5 = W2

                    calculaPartetres = True
                    while calculaPartetres:
                        calculaPartetres = False
                        T = T5
                        LECH = calculaLECH(T, dados)
                        L = LECH[0]
                        E = LECH[1]
                        CH = LECH[2]
                        C = CH[0]
                        H = CH[1]

                        R4 = R
                        C_H = calculaCeH(T, dados)
                        C = C_H[0]
                        H = C_H[1]
                        E8 = E
                        R8 = M1/(T_k0_9*T_k0_k1*E8*3600)
                        P9N9A9 = calculaP9N9A9(C9, E9, L9, R9, D1)
                        N9 = P9N9A9[1]
                        A9 = P9N9A9[2]
                        A8 = calculaA8(R8, E8, D0)
                        S = calculaS(R7, R8, D0)
                        K9 = calculaK9(A9, A8, S0, L8, F9)

                        K8 = K9*V0
                        E3 = K8*M*3600/(M0*C9*S*1000)

                        A0 = math.exp(K9*F8*3.6/(M0*C9))
                        T9 = (W1-W2*A0)/(1-A0)
                        L1 = T9
                        F1 = T9

                        P6P7P8RXH = calculaP6P7P8RXH(F1, L1, P)
                        R = P6P7P8RXH[3]
                        X = P6P7P8RXH[4]
                        H = P6P7P8RXH[5]
                        O4 = H

                        if O4 - H2 < 0:
                            W2 = W2+tolerancia
                            W1 = W2+Z9
                            calculaPartedois = True
                        else:

                            if abs(T5 - T9) < 0.0005:
                                if T9 > W2:
                                    W2 = W2+0.5
                                    W1 = W2+Z9
                                    calculaPartedois = True
                                else:
                                    if T9 > temperatura_do_bulbo_umido_E_4:
                                        T8 = (W1 - W2) / \
                                            (math.log((W1 - T9) / (W2 - T9)))
                                        H9 = (H2 - H1) / \
                                            (math.log((O4 - H1) / (O4 - H2)))
                                        Q7 = K8 * T8 * T_k0_k1_mais_4 * H0 / 1000
                                        Q8 = S * H9 * T_k0_k1_mais_4 * H0 / 3600
                                        if abs(Q8-Q9) < (Q9/200):
                                            muitos = calculaMuitos(
                                                X1, Q8, M, H9, T9, U1, C9, P)
                                            C7 = muitos[0]
                                            C6 = muitos[1]
                                            C8 = muitos[2]
                                            A4 = muitos[3]
                                            A0 = muitos[4]
                                            T2 = muitos[5]
                                            A1 = muitos[6]
                                            A2 = muitos[7]
                                            L1 = muitos[8]
                                            F1 = muitos[9]
                                            Z = muitos[10]
                                            P6 = muitos[11]
                                            P7 = muitos[12]
                                            P8 = muitos[13]
                                            R = muitos[14]
                                            X = muitos[15]
                                            H = muitos[16]
                                            Q4 = muitos[17]
                                            P6 = muitos[18]
                                            P7 = muitos[19]
                                            P8 = muitos[20]
                                            R = muitos[21]
                                            X = muitos[22]
                                            H = muitos[23]
                                            X4 = muitos[24]
                                            Q4 = muitos[25]
                                            V = muitos[26]
                                            Q5 = muitos[27]
                                            W = muitos[28]
                                            Z = muitos[29]
                                            X2 = muitos[30]

                                            mais_ainda = calculaY7Y6Y5H1H2W4N7W5W0V7A0V6S7S6S5S4V5(
                                                R1, V8, n_de_corpos_e_11, G9,  T_K0_19, T_k0_9, R_R6_2, T_k0_10, T_k0_11, T_k0_k1, e_8)

                                            Y7 = mais_ainda[0]
                                            Y6 = mais_ainda[1]
                                            Y5 = mais_ainda[2]

                                            W4 = mais_ainda[3]
                                            N7 = mais_ainda[4]
                                            W5 = mais_ainda[5]
                                            W0 = mais_ainda[6]
                                            V7 = mais_ainda[7]
                                            A0 = mais_ainda[8]
                                            V6 = mais_ainda[9]
                                            S7 = mais_ainda[10]
                                            S6 = mais_ainda[11]
                                            S5 = mais_ainda[12]
                                            S4 = mais_ainda[13]
                                            V5 = mais_ainda[14]
                                            Q6 = Q9*n
                                            A0 = abs(
                                                temperatura_quente_E_1 - W1)

                                            vazao_massica_de_ar_por_torre = M/n_de_corpos_e_11
                                            vazao_volumetrica_de_ar_por_torre = V8/n_de_corpos_e_11

                                            url = "http://10.0.0.183:8001/backengenharia/calculoVentiladores/CalcularVentiladores2/"

                                            calculoVentil = {
                                                "dados": dados,
                                                "datas": datas,
                                                "vazao_volumetrica_de_ar_por_torre": vazao_volumetrica_de_ar_por_torre,
                                                "R1": R1,
                                                "AlturaDoDifusor": AlturaDoDifusor,
                                                "Y5": Y5,
                                            }

                                            response = requests.post(
                                                url, json=calculoVentil)
                                            try:
                                                data = response.json()
                                                if data['data'][0]['nextScreen']:
                                                    serie = data['data'][0]['serie'][1]
                                                    perda_pressao_estatica_do_ar = data['data'][
                                                        0]['perda_pressao_estatica_do_ar']
                                                    potencia_consumida_2 = data['data'][0]['potencia_consumida_2']
                                                    viscosidade_dinamica = E9*3600
                                                    Comprimento_de_cada_tubo = T_k0_10/2*T_k0_k1 + \
                                                        (T_k0_10/2-1) * \
                                                        T_k0_11*math.pi/2/1000
                                                    R_R6_1 = float(
                                                        outros_dados[3]['diam_extern_ent_tub'])
                                                    potencia_consumida_do_ventilador = N7*1.36
                                                    potencia_consumida_do_ventiladores_um = N7*K1
                                                    potencia_consumida_do_ventiladores_dois = N7*1.36*1
                                                    variaveis_front_dict = []
                                                    EvaporacaoSimplificada = Q6 * 860 / 580
                                                    if V < EvaporacaoSimplificada:
                                                        VW = V/1000
                                                    else:
                                                        VW = EvaporacaoSimplificada/1000
                                                    variaveis_views_dict = {
                                                        "EvaporacaoSimplificada": EvaporacaoSimplificada,
                                                        "AlturaDoDifusor": AlturaDoDifusor,
                                                        "K1": K1,
                                                        "Q6": Q6,
                                                        "Q9": Q9,
                                                        "Q8": Q8,
                                                        "Q7": Q7,
                                                        "R1": R1,
                                                        "H1": H1,
                                                        "X1": X1,
                                                        "L7": L7,
                                                        "R7": R7,
                                                        "T2": T2,
                                                        "H2": H2,
                                                        "X2": X2,
                                                        "X4": X4,
                                                        "vazao_massica_de_ar_por_torre": vazao_massica_de_ar_por_torre,
                                                        "vazao_volumetrica_de_ar_por_torre": vazao_volumetrica_de_ar_por_torre,
                                                        "A0": A0,
                                                        "R5": R5,
                                                        "O1": O1,
                                                        "O2": O2,
                                                        "L9": L9,
                                                        "C9": C9,
                                                        "viscosidade_dinamica": viscosidade_dinamica,
                                                        "R9": R9,
                                                        "N9": N9,
                                                        "A9": A9,
                                                        "G9": G9,
                                                        "M0": M0,
                                                        "V9": V9,
                                                        "M1": M1,
                                                        "R0": R0,
                                                        "T9": T9,
                                                        "R8": R8,
                                                        "A8": A8,
                                                        "V": V,
                                                        "W": W,
                                                        "n": n,
                                                        "nome_da_torre": nome_da_torre,
                                                        "F8": F8,
                                                        "Comprimento_de_cada_tubo": Comprimento_de_cada_tubo,
                                                        "R_R6_1": R_R6_1,
                                                        "K9": K9,
                                                        "Y5": Y5,
                                                        "W0": W0,
                                                        "V5": V5,
                                                        "W4": W4,
                                                        "W5": W5,
                                                        "N7": N7,
                                                        "codigo": codigo,
                                                        "e_8": e_8,
                                                        "W1": W1,
                                                        "E_1": temperatura_quente_E_1,
                                                        "datas": datas,
                                                        "motor_eletrico_tipo": motor_eletrico_tipo,
                                                        "calculoVentil": data,
                                                        "serie": serie,
                                                        "perda_pressao_estatica_do_ar": perda_pressao_estatica_do_ar,
                                                    }
                                                    A0 = (
                                                        temperatura_quente_E_1 - W1)
                                                    if A0 < 0:
                                                        TN = int(
                                                            abs(A0*10))+200
                                                    else:
                                                        TN = int(
                                                            abs(A0*10))+100
                                                    QA6 = vazao_de_agua_E_6*1000 * \
                                                        (temperatura_quente_E_1 -
                                                            temperatura_fria_E_2)

                                                    R_R6_1 = float(
                                                        outros_dados[3]['diam_extern_ent_tub'])

                                                    ventilador_modelo = outros_dados[1]['modelo']
                                                    diamtro_do_ventilador = float(
                                                        outros_dados[1]['diametro'])
                                                    IND = tipo_de_acionamento_de_transmissao
                                                    potencia_nominal_por_ventilador = float(
                                                        potencia_do_motor)
                                                    PTC = potencia_nominal_por_ventilador/1.1
                                                    rotacao = float(
                                                        outros_dados[2]['rotacao_do_ventilador'])
                                                    T_K0_19 = (
                                                        math.pi*(diamtro_do_ventilador/1000)*rotacao)/60

                                                    VPR = rotacao*math.pi * diamtro_do_ventilador/60000
                                                    '''Medida provisoria para perda por evaporação uma vez que a evaporação não pode ser maior 
                                                        que a carga termica / pela entalpia de vaporização da água (580 á 40°C)'''
                                                    EvaporacaoSimplificada = Q6 * 860 / 580
                                                    if V < EvaporacaoSimplificada:
                                                        VW = V/1000
                                                    else:
                                                        VW = EvaporacaoSimplificada/1000
                                                    bomba_circuito_secundario = outros_dados[0]['potencia']
                                                    PCB = bomba_circuito_secundario/1.1
                                                    modelo_da_bomba = outros_dados[0]['modelo']
                                                    vazao_da_bomba = outros_dados[0]['vazao']
                                                    potencia_nominal_da_bomba = outros_dados[0]['potencia']

                                                    variaveis_print_dict = {
                                                        "EvaporacaoSimplificada": EvaporacaoSimplificada,
                                                        "AlturaDoDifusor": AlturaDoDifusor,
                                                        "potencia_nominal_por_ventilador": potencia_nominal_por_ventilador,
                                                        "diametro_de_tubo": diametro_de_tubo,
                                                        "tipo_de_fluido": tipo_de_fluido,
                                                        "nome_do_projeto": nome_do_projeto,
                                                        "cliente": cliente,
                                                        "data_atual": data_atual,
                                                        "FCA": FCA,
                                                        "TN": TN,
                                                        "QA6": QA6,
                                                        "E_6": vazao_de_agua_E_6,
                                                        "E_1": temperatura_quente_E_1,
                                                        "E_2": temperatura_fria_E_2,
                                                        "E_4": temperatura_do_bulbo_umido_E_4,
                                                        "E_5": pressao_barometrica_e_5,
                                                        "N": n,
                                                        "nome_da_torre": nome_da_torre,
                                                        "K1": K1,
                                                        "DD_E_10_E_11_1_VENTILADOR_MODELO": ventilador_modelo,
                                                        "VAL_DD_E_10_E_11_2_DIAMETRO_DO_VENTILADOR": diamtro_do_ventilador,
                                                        "IND": IND,
                                                        "PTC": PTC,
                                                        "rotacao": rotacao,
                                                        "VPR": VPR,
                                                        "VW": VW,
                                                        "V5": V5,
                                                        "modelo_da_bomba": modelo_da_bomba,
                                                        "vazo_da_bomba": vazao_da_bomba,
                                                        "potencia_nominal_da_bomba": potencia_nominal_da_bomba,
                                                        "PCB": PCB,
                                                        "codigo": codigo,
                                                        "e_8": e_8,
                                                        "W1": W1,
                                                        "datas": datas,
                                                        "motor_eletrico_tipo": motor_eletrico_tipo,
                                                        "calculoVentil": data,
                                                        "serie": serie,
                                                        "perda_pressao_estatica_do_ar": perda_pressao_estatica_do_ar,
                                                    }
                                                    variaveis_front_dict.append(
                                                        variaveis_views_dict)
                                                    variaveis_front_dict.append(
                                                        variaveis_print_dict)

                                                    if serie == '8E' or serie == '9EM2':
                                                        potencia_do_motor = float(
                                                            datas[0]['outros_dados'][2]['potencia_do_motor'])
                                                        porcentagem_potencia_cons = potencia_do_motor*0.91
                                                        porcentagem_potencia_cons_mais = porcentagem_potencia_cons+0.1
                                                        porcentagem_potencia_cons_menos = porcentagem_potencia_cons-0.1
                                                        if potencia_consumida_2 < porcentagem_potencia_cons_mais and potencia_consumida_2 > porcentagem_potencia_cons_menos:
                                                            return variaveis_front_dict
                                                        elif potencia_consumida_2 > porcentagem_potencia_cons_mais:
                                                            e_8 -= 0.01
                                                            calculo0 = True
                                                        else:
                                                            e_8 += 0.01
                                                            calculo0 = True
                                                    else:
                                                        calc_com_mais = Y5 * 0.02
                                                        calc_com_menos = Y5 * 0.02 * -1

                                                        if perda_pressao_estatica_do_ar - Y5 < calc_com_mais and perda_pressao_estatica_do_ar - Y5 > calc_com_menos:
                                                            return variaveis_front_dict
                                                        elif perda_pressao_estatica_do_ar - Y5 > 0:
                                                            e_8 += 0.01
                                                            calculo0 = True
                                                        else:
                                                            e_8 -= 0.01
                                                            calculo0 = True
                                                        variaveis_front_dict.append(
                                                            perda_pressao_estatica_do_ar)

                                                else:
                                                    e_8 += 0.5
                                                    serie = ''
                                                    perda_pressao_estatica_do_ar = ''
                                                    potencia_consumida_2 = ''
                                                    calculo0 = True
                                            except ValueError:

                                                print(
                                                    'Não foi possível converter a resposta em JSON')

                                        else:
                                            if Q8 > Q9:
                                                Y1 = -1
                                            else:
                                                Y1 = 1
                                            if J1 < 1:
                                                Y2 = Y1
                                            if Y2 == Y1:
                                                A6 = W1
                                            else:
                                                Y9 = Y9/2

                                            W1 = A6 + Y2 * Y9
                                            W2 = W1 - Z9

                                            if J1 > 50:
                                                muitos = calculaMuitos(
                                                    X1, Q8, M, H9, T9, U1, C9, P)
                                                A0 = muitos[4]
                                                T2 = muitos[5]
                                                L1 = muitos[8]
                                                F1 = muitos[9]
                                                R = muitos[14]
                                                X = muitos[15]
                                                H = muitos[16]
                                                R = muitos[21]
                                                X = muitos[22]
                                                H = muitos[23]
                                                X4 = muitos[24]
                                                V = muitos[26]
                                                W = muitos[28]
                                                X2 = muitos[30]

                                                mais_ainda = calculaY7Y6Y5H1H2W4N7W5W0V7A0V6S7S6S5S4V5(
                                                    R1, V8, n_de_corpos_e_11, G9, T_K0_19, T_k0_9, R_R6_2, T_k0_10, T_k0_11, T_k0_k1, e_8)
                                                Y7 = mais_ainda[0]
                                                Y6 = mais_ainda[1]
                                                Y5 = mais_ainda[2]

                                                W4 = mais_ainda[3]
                                                N7 = mais_ainda[4]
                                                W5 = mais_ainda[5]
                                                W0 = mais_ainda[6]
                                                V7 = mais_ainda[7]
                                                A0 = mais_ainda[8]
                                                V6 = mais_ainda[9]
                                                S7 = mais_ainda[10]
                                                S6 = mais_ainda[11]
                                                S5 = mais_ainda[12]
                                                S4 = mais_ainda[13]
                                                V5 = mais_ainda[14]
                                                Q6 = Q9*n
                                                A0 = abs(
                                                    temperatura_quente_E_1 - W1)

                                                vazao_massica_de_ar_por_torre = M/n_de_corpos_e_11
                                                vazao_volumetrica_de_ar_por_torre = V8/n_de_corpos_e_11

                                                url = "http://10.0.0.183:8001/backengenharia/calculoVentiladores/CalcularVentiladores2/"

                                                calculoVentil = {
                                                    "dados": dados,
                                                    "datas": datas,
                                                    "vazao_volumetrica_de_ar_por_torre": vazao_volumetrica_de_ar_por_torre,
                                                    "R1": R1,
                                                    "AlturaDoDifusor": AlturaDoDifusor,
                                                    "Y5": Y5,
                                                }

                                                response = requests.post(
                                                    url, json=calculoVentil)
                                                try:
                                                    data = response.json()
                                                    if data['data'][0]['nextScreen']:
                                                        serie = data['data'][0]['serie'][1]
                                                        perda_pressao_estatica_do_ar = data['data'][
                                                            0]['perda_pressao_estatica_do_ar']
                                                        potencia_consumida_2 = data['data'][0]['potencia_consumida_2']
                                                        viscosidade_dinamica = E9*3600
                                                        Comprimento_de_cada_tubo = T_k0_10/2*T_k0_k1 + \
                                                            (T_k0_10/2-1) * \
                                                            T_k0_11*math.pi/2/1000
                                                        R_R6_1 = float(
                                                            outros_dados[3]['diam_extern_ent_tub'])
                                                        potencia_consumida_do_ventilador = N7*1.36
                                                        potencia_consumida_do_ventiladores_um = N7*K1
                                                        potencia_consumida_do_ventiladores_dois = N7*1.36*1
                                                        EvaporacaoSimplificada = Q6 * 860 / 580
                                                        if V < EvaporacaoSimplificada:
                                                            VW = V/1000
                                                        else:
                                                            VW = EvaporacaoSimplificada/1000
                                                        variaveis_front_dict = []
                                                        variaveis_views_dict = {
                                                            "EvaporacaoSimplificada": EvaporacaoSimplificada,
                                                            "AlturaDoDifusor": AlturaDoDifusor,
                                                            "K1": K1,
                                                            "Q6": Q6,
                                                            "Q9": Q9,
                                                            "Q8": Q8,
                                                            "Q7": Q7,
                                                            "R1": R1,
                                                            "H1": H1,
                                                            "X1": X1,
                                                            "L7": L7,
                                                            "R7": R7,
                                                            "T2": T2,
                                                            "H2": H2,
                                                            "X2": X2,
                                                            "X4": X4,
                                                            "vazao_massica_de_ar_por_torre": vazao_massica_de_ar_por_torre,
                                                            "vazao_volumetrica_de_ar_por_torre": vazao_volumetrica_de_ar_por_torre,
                                                            "A0": A0,
                                                            "R5": R5,
                                                            "O1": O1,
                                                            "O2": O2,
                                                            "L9": L9,
                                                            "C9": C9,
                                                            "viscosidade_dinamica": viscosidade_dinamica,
                                                            "R9": R9,
                                                            "N9": N9,
                                                            "A9": A9,
                                                            "G9": G9,
                                                            "M0": M0,
                                                            "V9": V9,
                                                            "M1": M1,
                                                            "R0": R0,
                                                            "T9": T9,
                                                            "R8": R8,
                                                            "A8": A8,
                                                            "V": V,
                                                            "W": W,
                                                            "n": n,
                                                            "nome_da_torre": nome_da_torre,
                                                            "F8": F8,
                                                            "Comprimento_de_cada_tubo": Comprimento_de_cada_tubo,
                                                            "R_R6_1": R_R6_1,
                                                            "K9": K9,
                                                            "Y5": Y5,
                                                            "W0": W0,
                                                            "V5": V5,
                                                            "W4": W4,
                                                            "W5": W5,
                                                            "N7": N7,
                                                            "codigo": codigo,
                                                            "e_8": e_8,
                                                            "W1": W1,
                                                            "E_1": temperatura_quente_E_1,
                                                            "datas": datas,
                                                            "motor_eletrico_tipo": motor_eletrico_tipo,
                                                            "calculoVentil": data,
                                                            "serie": serie,
                                                            "perda_pressao_estatica_do_ar": perda_pressao_estatica_do_ar,
                                                        }
                                                        A0 = (
                                                            temperatura_quente_E_1 - W1)
                                                        if A0 < 0:
                                                            TN = int(
                                                                abs(A0*10))+200
                                                        else:
                                                            TN = int(
                                                                abs(A0*10))+100
                                                        QA6 = vazao_de_agua_E_6*1000 * \
                                                            (temperatura_quente_E_1 -
                                                                temperatura_fria_E_2)

                                                        R_R6_1 = float(
                                                            outros_dados[3]['diam_extern_ent_tub'])

                                                        ventilador_modelo = outros_dados[1]['modelo']
                                                        diamtro_do_ventilador = float(
                                                            outros_dados[1]['diametro'])
                                                        IND = tipo_de_acionamento_de_transmissao
                                                        potencia_nominal_por_ventilador = float(
                                                            potencia_do_motor)
                                                        PTC = potencia_nominal_por_ventilador/1.1
                                                        rotacao = float(
                                                            outros_dados[2]['rotacao_do_ventilador'])
                                                        T_K0_19 = (
                                                            math.pi*(diamtro_do_ventilador/1000)*rotacao)/60

                                                        VPR = rotacao*math.pi*diamtro_do_ventilador/60000
                                                        '''Medida provisoria para perda por evaporação uma vez que a evaporação não pode ser maior 
                                                        que a carga termica / pela entalpia de vaporização da água (580 á 40°C)'''
                                                        EvaporacaoSimplificada = Q6 * 860 / 580
                                                        if V < EvaporacaoSimplificada:
                                                            VW = V/1000
                                                        else:
                                                            VW = EvaporacaoSimplificada/1000
                                                        bomba_circuito_secundario = outros_dados[0]['potencia']
                                                        PCB = bomba_circuito_secundario/1.1

                                                        modelo_da_bomba = outros_dados[0]['modelo']
                                                        vazao_da_bomba = outros_dados[0]['vazao']
                                                        potencia_nominal_da_bomba = outros_dados[0]['potencia']

                                                        variaveis_print_dict = {
                                                            "EvaporacaoSimplificada": EvaporacaoSimplificada,
                                                            "AlturaDoDifusor": AlturaDoDifusor,
                                                            "potencia_nominal_por_ventilador": potencia_nominal_por_ventilador,
                                                            "FCA": FCA,
                                                            "TN": TN,
                                                            "QA6": QA6,
                                                            "E_6": vazao_de_agua_E_6,
                                                            "E_1": temperatura_quente_E_1,
                                                            "E_2": temperatura_fria_E_2,
                                                            "E_4": temperatura_do_bulbo_umido_E_4,
                                                            "E_5": pressao_barometrica_e_5,
                                                            "N": n,
                                                            "nome_da_torre": nome_da_torre,
                                                            "K1": K1,
                                                            "DD_E_10_E_11_1_VENTILADOR_MODELO": ventilador_modelo,
                                                            "VAL_DD_E_10_E_11_2_DIAMETRO_DO_VENTILADOR": diamtro_do_ventilador,
                                                            "IND": IND,
                                                            "PTC": PTC,
                                                            "rotacao": rotacao,
                                                            "VPR": VPR,
                                                            "VW": VW,
                                                            "V5": V5,
                                                            "modelo_da_bomba": modelo_da_bomba,
                                                            "vazo_da_bomba": vazao_da_bomba,
                                                            "potencia_nominal_da_bomba": potencia_nominal_da_bomba,
                                                            "PCB": PCB,
                                                            "codigo": codigo,
                                                            "e_8": e_8,
                                                            "W1": W1,
                                                            "datas": datas,
                                                            "motor_eletrico_tipo": motor_eletrico_tipo,
                                                            "calculoVentil": data,
                                                            "serie": serie,
                                                            "perda_pressao_estatica_do_ar": perda_pressao_estatica_do_ar,
                                                        }
                                                        variaveis_front_dict.append(
                                                            variaveis_views_dict)
                                                        variaveis_front_dict.append(
                                                            variaveis_print_dict)
                                                        if serie == '8E' or serie == '9EM2':
                                                            potencia_do_motor = float(
                                                                datas[0]['outros_dados'][2]['potencia_do_motor'])
                                                            porcentagem_potencia_cons = potencia_do_motor*0.91
                                                            porcentagem_potencia_cons_mais = porcentagem_potencia_cons+0.1
                                                            porcentagem_potencia_cons_menos = porcentagem_potencia_cons-0.1
                                                            if potencia_consumida_2 < porcentagem_potencia_cons_mais and potencia_consumida_2 > porcentagem_potencia_cons_menos:
                                                                return variaveis_front_dict
                                                            elif potencia_consumida_2 > porcentagem_potencia_cons_mais:
                                                                e_8 -= 0.01
                                                                calculo0 = True
                                                            else:
                                                                e_8 += 0.01
                                                                calculo0 = True
                                                        else:
                                                            calc_com_mais = Y5 * 0.02
                                                            calc_com_menos = Y5 * 0.02 * -1
                                                            if perda_pressao_estatica_do_ar - Y5 < calc_com_mais and perda_pressao_estatica_do_ar - Y5 > calc_com_menos:
                                                                return variaveis_front_dict
                                                            elif perda_pressao_estatica_do_ar - Y5 > 0:
                                                                e_8 += 0.01
                                                                calculo0 = True
                                                            else:
                                                                e_8 -= 0.01
                                                                calculo0 = True
                                                            variaveis_front_dict.append(
                                                                perda_pressao_estatica_do_ar)

                                                    else:
                                                        e_8 += 0.5
                                                        serie = ''
                                                        perda_pressao_estatica_do_ar = ''
                                                        potencia_consumida_2 = ''
                                                        calculo0 = True
                                                except ValueError:
                                                    print(
                                                        'Não foi possível converter a resposta em JSON')

                                            else:
                                                calculaum = True

                            else:
                                T5 = T9
                                calculaPartetres = True
    except Exception as e:
        print(f"Ocorreu um erro: {e}")
        traceback.print_exc()  # Exibe o rastreamento completo do erro
