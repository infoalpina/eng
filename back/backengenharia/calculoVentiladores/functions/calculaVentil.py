import math
from .calcula_angulo_das_pas import calcula_performace_dos_ventiladores
from .Acrescimo_por_DC_DV import calcula_acrescimo_por_dc_dv
from .calcula_rendimento_difusor import calcula_rendimento_difusor
from ..database.consulta_PWL import consulta_PWL


def calculaVentil(dados):
    nome = dados['received_data']['everyDatas'][0]['datas'][0]['outros_dados'][1]['serie']
    if nome == '8E' or nome == '9EM2':
        try:
            EveryDatas = dados['received_data']['everyDatas']

            densidade = float(dados['received_data']['Densidade'])
            vazao_volumetrica_por_torre = float(
                dados['received_data']['vazaoVolumetricaArPorTorre'])
            AlturaDoDifusor = float(dados['received_data']['AlturaDoDifusor'])
            perda_pressao_estatica_do_ar = float(
                dados['received_data']['perdaPressaoEstaticaDoAr'])
            perda_pressao_estatica_do_ar_em_pascal = perda_pressao_estatica_do_ar*9.8066

            database = dados['received_data']['Database']
            outros_dados = EveryDatas[0]['datas'][0]['outros_dados']
            database = database[0]
            bombas = outros_dados[0]
            ventiladores = outros_dados[1]
            diametro_do_ventilador = float(
                ventiladores['diametro_do_ventilador'])
            modelo_das_pas = ventiladores['modelo_das_pas']
            comprimento_das_pas = ventiladores['comprimento_das_pas']
            comprimento_das_pas_calculado = (
                comprimento_das_pas-diametro_do_ventilador+1)/1000
            diametro_do_cubo = diametro_do_ventilador - \
                (2*comprimento_das_pas_calculado)
            area_de_passagem_do_ar = (
                ((diametro_do_ventilador**2)-(diametro_do_cubo**2))*math.pi)/4
            velocidade_de_passagem_do_ar = vazao_volumetrica_por_torre / \
                ((math.pi)*((diametro_do_ventilador**2)-(diametro_do_cubo**2))/4)
            relacao_DC_DV = (diametro_do_ventilador-2 *
                             comprimento_das_pas_calculado)/diametro_do_ventilador
            rotacao = outros_dados[2]['rotacao_do_ventilador']
            velocidade_periferica = 3.1416*diametro_do_ventilador*rotacao/60
            adimensional_do_sistema = ((vazao_volumetrica_por_torre/area_de_passagem_do_ar)
                                       ** 2)*densidade/2/perda_pressao_estatica_do_ar_em_pascal
            adimensional_de_vazao = vazao_volumetrica_por_torre / \
                area_de_passagem_do_ar/velocidade_periferica

            adimensional_de_pressao = perda_pressao_estatica_do_ar_em_pascal / \
                (0.5*densidade*(velocidade_periferica**2))
            numero_de_pas = float(ventiladores['numero_de_pas'])

            serie = 'ventiladores', ventiladores['serie']
            numero_de_pas = 'ventiladores', ventiladores['numero_de_pas']
            print('teste')
            # primeiramente iremos passsar os valores de adimensional de vazao e de pressão inteiro para uma nova formula
            performace_dos_ventiladores = calcula_performace_dos_ventiladores(adimensional_de_vazao,
                                                                              adimensional_de_pressao,
                                                                              round(
                                                                                  adimensional_de_vazao, 2),
                                                                              round(
                                                                                  adimensional_de_pressao, 2),
                                                                              serie, numero_de_pas)
            performace_dos_ventiladores_vu = performace_dos_ventiladores[21]

            if (performace_dos_ventiladores_vu-int(performace_dos_ventiladores_vu)) < 0.25:
                angulo_das_pas = int(performace_dos_ventiladores_vu)
            elif (performace_dos_ventiladores_vu-int(performace_dos_ventiladores_vu)) < 0.75:
                angulo_das_pas = int(performace_dos_ventiladores_vu)+0.5
            else:
                angulo_das_pas = int(performace_dos_ventiladores_vu)+1

            rendimento_estatico_do_ventilador = performace_dos_ventiladores[14]

            acrescimo_por_dc_dv_calculado = calcula_acrescimo_por_dc_dv(
                relacao_DC_DV, numero_de_pas)

            acrescimo_por_dc_dv = acrescimo_por_dc_dv_calculado[6]

            calculado_rendimento_difusor = calcula_rendimento_difusor(
                diametro_do_ventilador, AlturaDoDifusor, densidade, vazao_volumetrica_por_torre, perda_pressao_estatica_do_ar_em_pascal)
            acrescimo_rendimento_no_difusor = calculado_rendimento_difusor[0]
            rendimento_dc_dv_difusor = rendimento_estatico_do_ventilador * \
                acrescimo_por_dc_dv*acrescimo_rendimento_no_difusor
            rendimento_do_redultor = float(
                outros_dados[2]['rendimento_do_redultor'])

            potencia_consumida = vazao_volumetrica_por_torre*perda_pressao_estatica_do_ar_em_pascal / \
                735.53/rendimento_dc_dv_difusor*100/rendimento_do_redultor*100/1.36

            potencia_consumida_2 = potencia_consumida*1.36

            nome = '8E'
            if serie[1] == '9EM2':
                nome = '9E'
                spl_do_ventilador = 10 * math.log10((velocidade_periferica ** 4) * potencia_consumida *
                                                    1.36 * float(numero_de_pas[1]) / diametro_do_ventilador) - 2

            PWL_value = consulta_PWL(nome, numero_de_pas)
            constante_a_para_calculo_em_PWL = PWL_value[0]['resultado']
            spl_do_ventilador = 10 * math.log10((velocidade_periferica ** 4) * potencia_consumida *
                                                1.36 * float(constante_a_para_calculo_em_PWL) / diametro_do_ventilador) - 5

            pwl = constante_a_para_calculo_em_PWL+10 * \
                math.log10(velocidade_periferica**4 *
                           potencia_consumida/diametro_do_ventilador)
            nome = "9EM"
            if modelo_das_pas < 4:
                nome += '2'
            else:
                nome += '3'

            nome += " " + str(round(modelo_das_pas, 2))
            nome += " KPF" + str(numero_de_pas[1]) + " "

            if diametro_do_ventilador != modelo_das_pas:
                nome += f"({diametro_do_ventilador})"
            else:
                nome += ""

            empuxo = (perda_pressao_estatica_do_ar_em_pascal + densidade * (vazao_volumetrica_por_torre /
                                                                            (math.pi * (diametro_do_ventilador ** 2) / 4)) ** 2 / 2) * math.pi * (diametro_do_ventilador ** 2) / 4

            distribuicao_de_PWL_para_9_em_231 = pwl - 34
            distribuicao_de_PWL_para_9_em_263 = distribuicao_de_PWL_para_9_em_231 + 14
            distribuicao_de_PWL_para_9_em_2125 = distribuicao_de_PWL_para_9_em_231 + 21
            distribuicao_de_PWL_para_9_em_2250 = distribuicao_de_PWL_para_9_em_231 + 27
            distribuicao_de_PWL_para_9_em_2500 = distribuicao_de_PWL_para_9_em_231 + 28
            distribuicao_de_PWL_para_9_em_21000 = distribuicao_de_PWL_para_9_em_231 + 29
            distribuicao_de_PWL_para_9_em_22000 = distribuicao_de_PWL_para_9_em_231 + 25
            distribuicao_de_PWL_para_9_em_24000 = distribuicao_de_PWL_para_9_em_231 + 20
            distribuicao_de_PWL_para_9_em_28000 = distribuicao_de_PWL_para_9_em_231 + 14
            return [{
                'database': database,
                'densidade': densidade,
                'vazao_volumetrica_por_torre': vazao_volumetrica_por_torre,
                'perda_pressao_estatica_do_ar': perda_pressao_estatica_do_ar,
                'perda_pressao_estatica_do_ar_em_pascal': perda_pressao_estatica_do_ar_em_pascal,
                'outros_dados': outros_dados,
                'bombas': bombas,
                'ventiladores': ventiladores,
                'diametro_do_ventilador': diametro_do_ventilador,
                'diametro_do_cubo': diametro_do_cubo,
                'modelo_das_pas': modelo_das_pas,
                'comprimento_das_pas': comprimento_das_pas,
                'comprimento_das_pas_calculado': comprimento_das_pas_calculado,
                'area_de_passagem_do_ar': area_de_passagem_do_ar,
                'velocidade_de_passagem_do_ar': velocidade_de_passagem_do_ar,
                'relacao_DC_DV': relacao_DC_DV,
                'rotacao': rotacao,
                'velocidade_periferica': velocidade_periferica,
                'adimensional_do_sistema': adimensional_do_sistema,
                'adimensional_de_vazao': adimensional_de_vazao,
                'adimensional_de_pressao': adimensional_de_pressao,
                'numero_de_pas': numero_de_pas[1],
                'serie': serie,
                'performace_dos_ventiladores': performace_dos_ventiladores,
                'performace_dos_ventiladores_vu': performace_dos_ventiladores_vu,
                'angulo_das_pas': angulo_das_pas,
                'rendimento_estatico_do_ventilador': rendimento_estatico_do_ventilador,
                'acrescimo_por_dc_dv_calculado': acrescimo_por_dc_dv_calculado,
                'acrescimo_por_dc_dv': acrescimo_por_dc_dv,
                'AlturaDoDifusor': AlturaDoDifusor,
                'calculado_rendimento_difusor': calculado_rendimento_difusor,
                'acrescimo_rendimento_no_difusor': acrescimo_rendimento_no_difusor,
                'rendimento_dc_dv_difusor': rendimento_dc_dv_difusor,
                'rendimento_do_redultor': rendimento_do_redultor,
                'potencia_consumida': potencia_consumida,
                'potencia_consumida_2': potencia_consumida_2,
                'spl_do_ventilador': spl_do_ventilador,
                'pwl': pwl,
                'constante_a_para_calculo_em_PWL': constante_a_para_calculo_em_PWL,
                'nome': dados['received_data']['everyDatas'][0]['datas'][0]['outros_dados'][1]['modelo'],
                'empuxo': empuxo,
                'distribuicao_de_PWL_para_9_em_231': distribuicao_de_PWL_para_9_em_231,
                'distribuicao_de_PWL_para_9_em_263': distribuicao_de_PWL_para_9_em_263,
                'distribuicao_de_PWL_para_9_em_2125': distribuicao_de_PWL_para_9_em_2125,
                'distribuicao_de_PWL_para_9_em_2250': distribuicao_de_PWL_para_9_em_2250,
                'distribuicao_de_PWL_para_9_em_2500': distribuicao_de_PWL_para_9_em_2500,
                'distribuicao_de_PWL_para_9_em_21000': distribuicao_de_PWL_para_9_em_21000,
                'distribuicao_de_PWL_para_9_em_22000': distribuicao_de_PWL_para_9_em_22000,
                'distribuicao_de_PWL_para_9_em_24000': distribuicao_de_PWL_para_9_em_24000,
                'distribuicao_de_PWL_para_9_em_28000': distribuicao_de_PWL_para_9_em_28000,
                'EveryDatas': EveryDatas,
                'nextScreen': True
            }]
        except:
            vazao_volumetrica_por_torre = float(
                dados['received_data']['vazaoVolumetricaArPorTorre'])
            return [{'nextScreen': False,
                     'message': 'As caracteristicas do ventilador estão influenciando de forma direta nos calculos e não é possivel chegar em uma solução, favor verificar os valores inseridos'}]
    else:
        return [{'nextScreen': False,
                 'message': 'O ventilador desse modelo ainda não foi cadastrado'}]
