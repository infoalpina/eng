from ..database.bomba import selectAllBomba
from ..database.fca import selectAllFCA
from ..database.ventiladores import selectAllVentiladores
from django.forms.models import model_to_dict


def lerTorres(nde, nate):
    bombas = selectAllBomba()
    fcas = selectAllFCA()
    ventiladores = selectAllVentiladores()

    # Converter QuerySets para listas de dicionários
    bomba_data = [model_to_dict(obj) for obj in bombas]
    fca_data = [model_to_dict(obj) for obj in fcas]
    ventiladores_data = [model_to_dict(obj) for obj in ventiladores]

    # Criar uma lista de torres
    torres = []

    # reconstruir a forma de se montar os dados(talvez seja necessario ou mais rapido se criar um novo endpoint)

    # Iterar sobre os dados e criar dicionários com as características da torre
    for bomba, charsFCA, fca, ventiladores in zip(bomba_data, charsFCA_data, fca_data, ventiladores_data):
        torre = {
            'bomba': {key: bomba[key] for key in bomba},
            'charsFCA': {key: charsFCA[key] for key in charsFCA},
            'fca': {key: fca[key] for key in fca},
            'ventiladores': {key: ventiladores[key] for key in ventiladores},
        }
        torres.append(torre)
    # Criar uma nova lista contendo apenas os dados do índice nde até o índice nate
    torres_selecionadas = torres[nde:nate]

    return torres_selecionadas
