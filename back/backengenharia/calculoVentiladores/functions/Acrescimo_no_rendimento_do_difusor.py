from ..database.valores_dc_dv import valores_dc_dv


def calcula_acrescimo_por_dc_dv(relacao_DC_DV,numero_de_pas):
    if relacao_DC_DV/0.36 < 0.85:
        C109 = 0.85
    elif relacao_DC_DV/0.36 > 1.15:
        C109 = 1
    else:
        C109 = relacao_DC_DV/0.36
    C109 = C109

    valores_calculados_dc_dv = valores_dc_dv(C109,numero_de_pas)
    C116 = valores_calculados_dc_dv[0]['relacao_dc_dv']
    C117 = valores_calculados_dc_dv[1]['relacao_dc_dv']
    C118 = valores_calculados_dc_dv[0]['resultado']
    C119 = valores_calculados_dc_dv[1]['resultado']
    C120 = (C109-C116)/(C117-C116)
    C121 = (C119-C118)*C120+C118

    return [C109,C116,C117,C118,C119,C120,C121]
