from ..models import CharsCamadasDeEnchimento
from django.db.models import Q
from django.forms.models import model_to_dict


def selectAllCharsCamadasDeEnchimento():
    try:
        # Query para selecionar nomes únicos da coluna 'nome'
        unique_names = CharsCamadasDeEnchimento.objects.values_list(
            'nome', flat=True).distinct()

        # Converte QuerySet para uma lista
        unique_names_list = list(unique_names)

        return unique_names_list

    except Exception as e:
        print(
            f"Erro ao selecionar nomes distintos de CharsCamadasDeEnchimento: {e}")
        return None
