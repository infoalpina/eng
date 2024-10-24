from .calculo_FCA import calculoGeral
from ..database.fca import filterFCA
from celery import shared_task
import re


@shared_task
def calculo_main(dados):
    diametro_do_tubo = dados['received_data']['diametro_de_tubo']
    tipo_de_fluido = dados['received_data']['tipo_de_fluido']
    cod_resfriador_TY = dados['received_data']['cod_resfriador_TY']
    valorSelectBomba = dados['received_data']['valorSelectBomba']
    valorSelectVentil = dados['received_data']['valorSelectVentil']
    calor_especifico_do_fluido = dados['received_data']['calor_especifico_do_fluido']
    valorSelectAcio = dados['received_data']['valorSelectAcio']
    valorSelectTubos = dados['received_data']['valorSelectTubos']
    valorSelectCalorEspecifico = dados['received_data']['valorSelectCalorEspecifico']
    valor_extrair = valorSelectCalorEspecifico.split('-')[-1].strip()
    match = re.search(r'^(\d+)-', valorSelectAcio)
    if match:
        id_acio = match.group(1)
    match = re.search(r'^(\d+)\s*-\s*', valorSelectVentil)
    if match:
        id_ventil = match.group(1)
    match = re.search(r'^(\d+)\s*-\s*', valorSelectBomba)
    if match:
        id_bomba = match.group(1)
    match = re.search(r'(\d+/\d+)', cod_resfriador_TY)
    if match:
        id_resfriador = match.group(1)
    match = re.search(r'id-(\d+)-(\d+)',
                      dados['received_data']['valorSelectTubos'])
    if match:
        id_feixes = match.group(1)
        numero_tubos = float(match.group(2))*2
    else:
        print('No match found')

    fca = dados['received_data']['FCA']
    data = filterFCA(id_resfriador, id_bomba, id_ventil, id_acio, id_feixes)
    return calculoGeral(
        dados, data, fca, numero_tubos, valor_extrair)
