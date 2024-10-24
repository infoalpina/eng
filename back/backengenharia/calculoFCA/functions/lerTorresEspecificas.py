from ..database.fca import selectListFCA
from ..database.bomba import selectListBomba
from ..database.ventiladores import selectListVentiladores
from django.http import JsonResponse
from django.forms.models import model_to_dict


def lerTorresEspecificas():

    ids = []

    fcas = selectListFCA()

    fca_data = [model_to_dict(obj) for obj in fcas]
    torres = [
        fca_data,
    ]

    print('torres', torres)

    return torres
