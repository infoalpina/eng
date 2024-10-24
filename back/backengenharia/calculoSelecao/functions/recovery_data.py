from ..models import SelecaoDadosPrincipais, SelecaoPilaretes, SelecaoCamadasDeEnchimento, charsTorre, charsEnchimento, charsMoteVent, CharsCamadasDeEnchimento


def recovery_dataBase():
    try:
        # Recupera todos os registros de cada model
        selecao_dados_principais = SelecaoDadosPrincipais.objects.all()
        selecao_pilaretes = SelecaoPilaretes.objects.all()
        selecao_camadas_de_enchimento = SelecaoCamadasDeEnchimento.objects.all()
        chars_torre = charsTorre.objects.all()
        chars_enchimento = charsEnchimento.objects.all()
        chars_mote_vent = charsMoteVent.objects.all()
        chars_camadas_de_enchimento = CharsCamadasDeEnchimento.objects.all()

        # Converte os QuerySets em listas de dicionários
        dados_principais_list = list(selecao_dados_principais.values())
        pilaretes_list = list(selecao_pilaretes.values())
        camadas_de_enchimento_list = list(
            selecao_camadas_de_enchimento.values())
        chars_torre_list = list(chars_torre.values())
        chars_enchimento_list = list(chars_enchimento.values())
        chars_mote_vent_list = list(chars_mote_vent.values())
        chars_camadas_de_enchimento_list = list(
            chars_camadas_de_enchimento.values())

        all_data = {
            'selecao_dados_principais': dados_principais_list,
            'selecao_pilaretes': pilaretes_list,
            'selecao_camadas_de_enchimento': camadas_de_enchimento_list,
            'chars_torre': chars_torre_list,
            'chars_enchimento': chars_enchimento_list,
            'chars_mote_vent': chars_mote_vent_list,
            'chars_camadas_de_enchimento': chars_camadas_de_enchimento_list,
        }

        return all_data
    except Exception as e:
        print(f"An error occurred: {e}")
        return None


def recovery_datas():
    # Inicializando as listas
    #
    S = [[0 for _ in range(3)] for _ in range(22)]
    #
    F = [[0 for _ in range(3)] for _ in range(22)]
    #
    K = [[0 for _ in range(8)] for _ in range(22)]
    #
    H = [[0 for _ in range(24)] for _ in range(22)]

    # Dados para S
    S = [
        (3, 1, 0.42),
        (4, 1, 0.42),
        (8, 1, 0.7),
        (12, 1, 1.05),
        (16, 1, 1.56),
        (20, 1, 2.06),
        (25, 1, 2.719),
        (25, 2, 2.72),
        (32, 1, 3.379),
        (32, 2, 3.38),
        (40, 2, 4.2),
        (50, 2, 5.02),
        (63, 2, 6),
        (80, 2, 8.12),
        (100, 2, 10.56),
        (125, 2, 13.16),
        (155, 2, 16.4),
        (180, 2, 18.3),
        (240, 2, 24.4),
        (310, 2, 30.5),
        (380, 2, 38.1),
        (550, 2, 54.9)
    ]

    F = [
        (0.1374, 0, 0),
        (0.1374, 0, 0),
        (0.1955, 0, 0),
        (0.2767, 0, 0),
        (0.4227, 0, 0),
        (0.4227, 0, 0),
        (0.5364, 0, 0),
        (2.62, 2.62, 2.36),
        (0.5364, 0, 0),
        (3.02, 3.02, 2.36),
        (4.1, 4.1, 3.76),
        (4.58, 4.42, 3.76),
        (5.06, 5.06, 4.64),
        (6.53, 6.53, 6.02),
        (8.84, 8.73, 8.73),
        (9.8, 10.0, 10.6),
        (10.8, 10.6, 10.6),
        (21.8, 15.6, 9.38),
        (24.9, 18.7, 12.45),
        (28.0, 20.2, 15.5),
        (31.0, 23.25, 20.2),
        (37.2, 27.9, 27.46)
    ]

    K = [
        (11, 22, 0, 0, 0, 0, 0, 0),
        (11, 12, 23, 0, 0, 0, 0, 0),
        (11, 12, 23, 0, 0, 0, 0, 0),
        (11, 12, 23, 0, 0, 0, 0, 0),
        (11, 12, 23, 0, 0, 0, 0, 0),
        (11, 12, 23, 0, 0, 0, 0, 0),
        (11, 12, 23, 0, 0, 0, 0, 0),
        (11, 12, 23, 0, 0, 0, 0, 0),
        (11, 12, 23, 0, 0, 0, 0, 0),
        (11, 12, 23, 0, 0, 0, 0, 0),
        (12, 22, 23, 0, 0, 0, 0, 0),
        (12, 22, 23, 0, 0, 0, 0, 0),
        (12, 22, 23, 0, 0, 0, 0, 0),
        (12, 22, 23, 0, 0, 0, 0, 0),
        (12, 13, 14, 22, 23, 24, 25, 0),
        (12, 13, 14, 22, 23, 24, 25, 0),
        (12, 13, 14, 22, 23, 24, 25, 0),
        (12, 13, 14, 22, 23, 24, 25, 0),
        (12, 13, 14, 22, 23, 24, 25, 0),
        (12, 13, 14, 22, 23, 24, 25, 0),
        (12, 13, 14, 22, 23, 24, 25, 0),
        (12, 13, 14, 15, 22, 23, 24, 25)
    ]

    A = [
        (0.765, 0.0788, -0.0049, 0.00006, 0.59,
         91.17, -70.125, 25.025, -2.93515, 1.025, 11),
        (1.4, 0.0464, -0.003099, 0.00005301, 0.54785,
         90.52, -49.5976, 15.7628, -1.6392, 1.3, 12),
        (1.12517, 0.0788, -0.0049, 0.00006, 0.60377,
         94.171184, -70.125, 25.025, -2.93515, 1.025, 13),
        (1.7312489, 0.12399, -0.00806, 0.00012, 0.65889,
         103.89, -70.896, 24.80478, -2.83353, 1.025, 14),
        (2.0179701, 0.14691, -0.009748, 0.00016, 0.68,
         110.647934, -72.6226, 25.3825989, -2.89711, 1.025, 15),
        (1.232, 0.040832, -0.00272712, 0.000046649, 0.54785,
         79.6576, -43.645888, 13.871264, -1.442496, 1.3, 22),
        (1.064, 0.035264, -0.00235524, 0.000040288, 0.54785,
         68.7952, -37.694176, 11.979728, -1.245792, 1.3, 23),
        (2.2046938, 0.10419, -0.00672, 0.000089, 0.63166,
         119.7632, -72.507721, 21.711, -1.94488, 1.5125, 24),
        (2.583, 0.1237, -0.00797, 0.0001, 0.632,
         112.3177, -58.8479, 17.493088, -1.53318, 1.5, 25)
    ]

    H = [
        (1.0, 1.0, 0, 0, 0, 0, 0, 0, 1.0, 1.0, 0,
         0, 0, 0, 0, 0, 1.0, 1.0, 0, 0, 0, 0, 0, 0),
        (1.5, 1.5, 1.5, 0, 0, 0, 0, 0, 1.5, 1.5, 1.5,
         0, 0, 0, 0, 0, 1.5, 1.5, 1.5, 0, 0, 0, 0, 0),
        (1.5, 1.5, 1.5, 0, 0, 0, 0, 0, 1.5, 1.5, 1.5,
         0, 0, 0, 0, 0, 1.5, 1.5, 1.5, 0, 0, 0, 0, 0),
        (1.6, 1.6, 1.6, 0, 0, 0, 0, 0, 1.6, 1.6, 1.6,
         0, 0, 0, 0, 0, 1.6, 1.6, 1.6, 0, 0, 0, 0, 0),
        (1.8, 1.8, 1.8, 0, 0, 0, 0, 0, 1.8, 1.8, 1.8,
         0, 0, 0, 0, 0, 1.8, 1.8, 1.8, 0, 0, 0, 0, 0),
        (1.8, 1.8, 1.8, 0, 0, 0, 0, 0, 1.8, 1.8, 1.8,
         0, 0, 0, 0, 0, 1.8, 1.8, 1.8, 0, 0, 0, 0, 0),
        (1.9, 1.9, 1.9, 0, 0, 0, 0, 0, 1.9, 1.9, 1.9,
         0, 0, 0, 0, 0, 1.9, 1.9, 1.9, 0, 0, 0, 0, 0),
        (1.3, 1.3, 1.3, 0, 0, 0, 0, 0, 1.5, 1.5, 1.5,
         0, 0, 0, 0, 0, 1.7, 1.7, 1.7, 0, 0, 0, 0, 0),
        (1.9, 1.9, 1.9, 0, 0, 0, 0, 0, 1.9, 1.9, 1.9,
         0, 0, 0, 0, 0, 1.9, 1.9, 1.9, 0, 0, 0, 0, 0),
        (1.3, 1.3, 1.3, 0, 0, 0, 0, 0, 1.5, 1.5, 1.5,
         0, 0, 0, 0, 0, 1.7, 1.7, 1.7, 0, 0, 0, 0, 0),
        (1.9, 1.9, 1.9, 0, 0, 0, 0, 0, 2.1, 2.1, 2.1,
         0, 0, 0, 0, 0, 2.4, 2.4, 2.4, 0, 0, 0, 0, 0),
        (1.9, 1.9, 1.9, 0, 0, 0, 0, 0, 2.1, 2.1, 2.1,
         0, 0, 0, 0, 0, 2.4, 2.4, 2.4, 0, 0, 0, 0, 0),
        (1.9, 1.9, 1.9, 0, 0, 0, 0, 0, 2.1, 2.1, 2.1,
         0, 0, 0, 0, 0, 2.4, 2.4, 2.4, 0, 0, 0, 0, 0),
        (2.0, 2.0, 2.0, 0, 0, 0, 0, 0, 2.2, 2.2, 2.2,
         0, 0, 0, 0, 0, 2.6, 2.6, 2.6, 0, 0, 0, 0, 0),
        (2.1, 2.5, 3.0, 2.1, 2.1, 2.5, 3.0, 0,
         2.3, 2.7, 3.2, 2.3, 2.3, 2.7, 3.2, 0),
        (2.8, 3.2, 3.7, 2.8, 2.8, 3.2, 3.7, 0),
        (2.1, 2.5, 3.0, 2.1, 2.1, 2.5, 3.0, 0,
         2.3, 2.7, 3.2, 2.3, 2.3, 2.7, 3.2, 0),
        (2.8, 3.2, 3.7, 2.8, 2.8, 3.2, 3.7, 0),
        (2.1, 2.5, 3.0, 2.1, 2.1, 2.5, 3.0, 0,
         2.3, 2.7, 3.2, 2.3, 2.3, 2.7, 3.2, 0),
        (2.8, 3.2, 3.7, 2.8, 2.8, 3.2, 3.7, 0),
        (3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 0,
         3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 0),
        (3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 0),
        (3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 0,
         3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 0),
        (3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 0),
        (3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 0,
         3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 0),
        (4.2, 4.2, 4.2, 4.2, 4.2, 4.2, 4.2, 0),
        (3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7,
         3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7),
        (4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5)
    ]

    return (S, F, K, H, A)
