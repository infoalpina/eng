from ..database.consulta_d_delta import consulta_d_delta
from ..database.consulta_hd_da import consulta_hd_da


def calcula_rendimento_difusor(diametro_do_ventilador, AlturaDoDifusor, densidade, vazao_volumetrica_por_torre, perda_pressao_estatica_do_ar_em_pascal):
    try:
        diametro_do_ventilador_int = int(diametro_do_ventilador)
        d_delta_consultado = consulta_d_delta(diametro_do_ventilador_int)
        C133 = float(d_delta_consultado[0]['DELTA'])

        C134 = diametro_do_ventilador + 2 * C133 / 1000

        C135 = AlturaDoDifusor / C134

        if C135 <= 0.1874:
            C147 = 1
            return [C147, d_delta_consultado, C133, C134, C135]
        else:

            hd_da_consultado = consulta_hd_da(C135)
            C140 = hd_da_consultado[0]['relcao_hd_da']
            C141 = hd_da_consultado[1]['relcao_hd_da']
            C142 = hd_da_consultado[0]['C']
            C143 = hd_da_consultado[1]['C']
            C144 = (C135 - C140) / (C141 - C140)
            C145 = (C143 - C142) * C144 + C142
            C146 = C145 * densidade * \
                (vazao_volumetrica_por_torre / C134**2)**2
            C147 = perda_pressao_estatica_do_ar_em_pascal / \
                (perda_pressao_estatica_do_ar_em_pascal - C146)
            print('teste')
            return [C147, d_delta_consultado, C133, C134, C135, hd_da_consultado, C140, C141, C142, C143, C144, C145, C146]

    except Exception as e:
        print(f"An error occurred: {e}")
        return None
