from ..database.bomba import selectUpdateBomba
from ..database.fca import selectUpdateFCA
from ..database.ventiladores import selectUpdateVentiladores
from ..database.acionamentos import selectUpdateAcionamentos
from ..database.feixes import selectUpdateFeixes
from django.forms.models import model_to_dict
from ..database.banco_de_dados import valida_calculoFCA_update


def editarTorres(dados):
    print('edição de dados:', dados)
    calculoFCA_fca = {
        'id': dados['id'],
        'Nome': dados['Nome'],
        'Áreas_transversais': dados['Áreas_transversais'],
        'largura_da_torre': dados['largura_da_torre'],
        'Comprimento_da_torre': dados['Comprimento_da_torre'],
        'Altura_da_torre': dados['Altura_da_torre'],
        'tower_is_standard': dados['tower_is_standard'],
        'forcOuInd': dados['forcOuInd'],
        'tipoDeCarcaca': dados['tipoDeCarcaca']
    }
    fcas = selectUpdateFCA(calculoFCA_fca)

    calculoFCA_acionamentos = dados['dadosFormulariosAcionamentos']

    acionamentos = selectUpdateAcionamentos(
        calculoFCA_acionamentos, dados['id'])

    dadosFormulariosFeixes = dados['dadosFormulariosFeixes']
    tubos = selectUpdateFeixes(
        dadosFormulariosFeixes, dados['id'])

    calculoFCA_bomba = dados['dadosFormulariosBombas']

    bombas = selectUpdateBomba(
        calculoFCA_bomba, dados['id'])

    calculoFCA_ventiladores = dados['dadosFormulariosVentiladores']

    ventiladores = selectUpdateVentiladores(
        calculoFCA_ventiladores, dados['id'])

    return False
