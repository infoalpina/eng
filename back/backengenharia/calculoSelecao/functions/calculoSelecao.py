from .recovery_data import recovery_datas
from .recovery_data import recovery_dataBase
from .analise_2030 import analise_2030
'''
analise_2030 ok
'''
from .analise_770 import analise_770


def calculoSelecao(dados, K8=0, F8=0, H9=0):
    I3 = 0
    # final da programação na parte do ventilador
    PerdaDePressaoEstaticaAdicional = float(
        dados['PerdaDePressaoEstaticaAdicional'])
    Bacia = dados['Bacia']
    Motorizacao = dados['Motorizacao']
    checkedItemsMateriais = dados['checkedItemsMateriais']
    pilaretesNome = dados['pilaretesNome']
    checkedItems = dados['checkedItems']
    NumeroDeCelulasMinimo = int(dados['NumeroDeCelulasMinimo'])
    NumeroDeCelulasMaximo = int(dados['NumeroDeCelulasMaximo'])
    NumeroDeLadosLivresEntradaDeAr = float(
        dados['NumeroDeLadosLivresEntradaDeAr'])
    data = recovery_datas()
    # recoverydatasAll recupero todos os dados e vou percorrendo torre por torre 
    recoverydatasAll = recovery_dataBase()

    selecao_dados_principais = recoverydatasAll['selecao_dados_principais']
    selecao_pilaretes = recoverydatasAll['selecao_pilaretes']
    selecao_camadas_de_enchimento = recoverydatasAll['selecao_camadas_de_enchimento']
    chars_torre = recoverydatasAll['chars_torre']
    chars_enchimento = recoverydatasAll['chars_enchimento']
    chars_mote_vent = recoverydatasAll['chars_mote_vent']
    chars_camadas_de_enchimento = recoverydatasAll['chars_camadas_de_enchimento']

    S = data[0]
    Fdata = data[1]
    K = data[2]
    H = data[3]
    A = data[4]

    contagem = len(selecao_dados_principais)
    Z = float(dados['TemperaturaDaAguaQuente']) - \
        float(dados['TemperaturaDaAguaFria'])
    M0 = float(dados['VazaoDaAgua'])/3600*1000
    T1 = float(dados['TemperaturaDaAguaQuente'])
    T2 = float(dados['TemperaturaDaAguaFria'])
    T3 = 0
    T4 = float(dados['TemperaturaDoBulboUmido'])
    D1 = float(dados['VazaoDaAgua'])
    P1 = 70
    W0 = 2.8

    D6 = float(dados['AltitudeLocal'])
    P0 = 1013.25*((288-6.5*D6)/288) ** 5.255
    F0 = 8.12
    K1 = 12
    N0 = 4
    N1 = 1
    P0 = 1013.25

    for N2 in range(NumeroDeCelulasMinimo, NumeroDeCelulasMaximo+1):
        if K1 == 31:
            K1 = 12
        if K1 == 32:
            K1 = 22
        if K1 == 33:
            K1 = 23
        while True:
            L9 = T3
            L8 = T4
            L7 = P1
            L6 = P0
            L5 = H9
            get_2030 = analise_2030(L5, L6, L7, L8, L9)
            L2 = get_2030[0]
            L7 = get_2030[1]
            A1 = get_2030[2]
            L1 = get_2030[3]
            L3 = get_2030[4]
            L4 = get_2030[5]
            P5 = get_2030[6]
            P6 = get_2030[7]
            P7 = get_2030[8]
            P8 = get_2030[9]
            P9 = get_2030[10]
            T3 = L9
            T4 = L8
            P1 = L7
            P0 = L6
            H1 = L4
            X1 = L3
            R1 = L2
            C0 = 4.1868
            R0 = 1000
            G0 = M0*3600/(R0*N2)
            I8 = 1
            F0 = 0
            I7 = +1
            J9 = -1
            repeat_550 = 0
            while repeat_550 == 0:
                V6 = 0
                V7 = 0
                I3 = 0
                J9 = J9+I7
                if J9 < contagem or J9 >= 0:
                    W = W0
                    F = selecao_dados_principais[J9]['AreaSecTrans']
                    '''arrumar o banco de dados com todas as torres conforme necessario'''
                    R9 = 25
                    R8 = 6
                    R = G0/F
                    

                    if R < R9:

                        if R < R8:
                            repeat_550 = 1
                        else:
                            return_770 = analise_770(G0, F, W, R1, M0, N2, H1, C0, P0, K8, L3, F8, I3, K, J9, N1, H, A,
                                                     I8, D6, S, K1, Z, L2, T1, T2, D1, Fdata, selecao_dados_principais, selecao_pilaretes, selecao_camadas_de_enchimento, chars_torre, chars_enchimento, chars_mote_vent, chars_camadas_de_enchimento, NumeroDeLadosLivresEntradaDeAr)
                            if return_770 == 200:
                                repeat_550 = 1

                else:
                    repeat_550 = 1
            return
