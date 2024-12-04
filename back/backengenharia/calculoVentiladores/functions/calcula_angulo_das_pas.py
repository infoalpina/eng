from ..database.info_ventiladores import cruzarDados


def calcula_performace_dos_ventiladores(ad_vazao, ad_pressao, ad_vazao_round, ad_pressao_round, serie, numero_de_pas):
    valoresCruzados = cruzarDados(
        ad_pressao_round, ad_vazao_round, serie, numero_de_pas)
    C23 = ad_vazao
    C24 = ad_pressao
    C94 = valoresCruzados[0]['resposta']
    C95 = valoresCruzados[1]['resposta']
    C92 = valoresCruzados[2]['resposta']
    C93 = valoresCruzados[3]['resposta']

    C101 = valoresCruzados[0]['angulo_da_pa']
    C102 = valoresCruzados[1]['angulo_da_pa']
    C99 = valoresCruzados[2]['angulo_da_pa']
    C100 = valoresCruzados[3]['angulo_da_pa']
    C89 = valoresCruzados[0]['PSI']
    C86 = valoresCruzados[0]['FI']
    C88 = valoresCruzados[3]['PSI']
    C87 = valoresCruzados[3]['FI']

    C90 = (C23-C86)/(C87-C86)
    C91 = (C24-C88)/(C89-C88)

    C96 = (C93-C92)*C90+C92
    C97 = (C95-C94)*C90+C94

    if C92 != 0 and C93 != 0 and C94 != 0 and C95 != 0:
        C98 = (C97-C96)*C91+C96
    else:
        C98 = 'fora'

    C103 = (C100-C99)*C90+C99
    C104 = (C102-C101)*C90+C101
    if C99 != 0 and C100 != 0 and C101 != 0 and C102 != 0:
        C105 = (C104-C103)*C91+C103
    else:
        C105 = 'fora'

    return [C23, C24, C86, C87, C88, C89, C90, C91, C92, C93, C94, C95, C96, C97, C98, C99, C100, C101, C102, C103, C104, C105]
