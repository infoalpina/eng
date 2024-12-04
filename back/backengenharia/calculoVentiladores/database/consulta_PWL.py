from calculoVentiladores.models import PWL
from django.db.models import F, Value
from django.db.models.functions import Abs
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned


def consulta_PWL(nome, numero_de_pas):
    try:
        print('nome:', nome)
        print('numero_de_pas:', numero_de_pas[1])

        # Perform the query
        resultados_pwl = PWL.objects.filter(
            n_de_pas=numero_de_pas[1],
            nome=nome
        )

        # Convert the QuerySet to a list of dictionaries
        resultados_formatados = [
            {
                'id': resultado.id,
                'n_de_pas': resultado.n_de_pas,
                'nome': resultado.nome,
                'resultado': resultado.resultado
            } for resultado in resultados_pwl
        ]

        return resultados_formatados
    except ObjectDoesNotExist:
        # Handle the case where no object is found
        return []
    except MultipleObjectsReturned:
        # Handle the case where multiple objects are found
        return []
    except Exception as e:
        # Handle any other exceptions
        print(f"An error occurred: {e}")
        return []

