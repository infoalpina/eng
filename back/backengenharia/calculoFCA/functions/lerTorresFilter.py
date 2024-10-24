from ..database.bomba import selectFilterBomba
from ..database.fca import selectFilterFCAid
from ..database.ventiladores import selectFilterVentiladores
from ..database.acionamentos import selectFilterAcionamentos
from ..database.feixes import selectFilterFeixes
from django.http import JsonResponse
from django.forms.models import model_to_dict


def lerTorresFilter(request, id):
    try:
        # Obter dados dos diferentes filtros
        bombas = selectFilterBomba(id)
        fcas = selectFilterFCAid(id)
        ventiladores = selectFilterVentiladores(id)
        acionamentos = selectFilterAcionamentos(id)
        feixes = selectFilterFeixes(id)

        # Converter QuerySets para listas de dicionários
        bomba_data = [model_to_dict(obj) for obj in bombas]
        fca_data = [model_to_dict(obj) for obj in fcas]
        ventiladores_data = [model_to_dict(obj) for obj in ventiladores]
        acionamentos_data = [model_to_dict(obj) for obj in acionamentos]
        feixes_data = [model_to_dict(obj) for obj in feixes]

        # Criar a estrutura final de resposta
        torres = []
        for fca in fca_data:
            torre = {
                'fca': fca,
                # Considerar se é necessário filtrar ou relacionar os dados de bomba com fca
                'bomba': bomba_data,
                'ventiladores': ventiladores_data,
                'acionamentos': acionamentos_data,
                'feixes': feixes_data,
            }

            torres.append(torre)

        print('torres', torres)
        # Retornar como JsonResponse
        return torres

    except Exception as e:
        # Imprimir a exceção para fins de depuração
        print('Erro:', e)
        # Retornar um erro 500 em caso de exceção
        return JsonResponse({'error': 'Internal server error'}, status=500)
