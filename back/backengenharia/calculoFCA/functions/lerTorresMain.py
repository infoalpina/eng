from ..database.fca import selectAllFCA
from django.forms.models import model_to_dict


def lerTorresMain(nde, nate):
    try:
        fca_data = selectAllFCA()

        torres = []

        for fca in fca_data:
            torre = {
                'dadosPrincipais': {
                    'id': fca.id,
                    'nome': fca.nome,
                    'status': fca.ativado,
                }
            }
            torres.append(torre)

        # Filtrar os valores com base nos índices nde e nate
        torres_selecionadas = torres[nde:nate]

        print('torre', torres_selecionadas)

        return torres_selecionadas
    except Exception as e:
        return None
