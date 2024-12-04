from calculoVentiladores.models import DC_DV
from django.db.models import F, Value
from django.db.models.functions import Abs


def valores_dc_dv(C109, numero_de_pas):
    try:
        n_de_pas = float(numero_de_pas[1])

        # Calcular a faixa de tolerância
        tolerancia = 0.015
        tolerancia_next = 0.030
        valor_min = C109 - tolerancia
        valor_max = C109 + tolerancia
        valor_min_next = valor_min + tolerancia_next
        valor_max_next = valor_max + tolerancia_next

        # Lista para armazenar os resultados
        resultados_lista = []

        # Filtrar os registros com base na tolerância
        resultados = DC_DV.objects.filter(
            relacao_dc_dv__gte=valor_min,
            relacao_dc_dv__lte=valor_max,
            n_de_pas=n_de_pas
        ).annotate(
            diferenca=Abs(F('relacao_dc_dv') - Value(C109))
        ).order_by('diferenca')[:1]

        # Filtrar os registros com base na próxima faixa de tolerância
        resultados_nexts = DC_DV.objects.filter(
            relacao_dc_dv__gte=valor_min_next,
            relacao_dc_dv__lte=valor_max_next,
            n_de_pas=n_de_pas
        ).annotate(
            diferenca=Abs(F('relacao_dc_dv') - Value(C109))
        ).order_by('diferenca')[:1]

        # Verificar se há resultados e adicionar à lista
        if resultados.exists():
            resultado = resultados.first()
            resultado_dict = {
                'id': resultado.id,
                'n_de_pas': resultado.n_de_pas,
                'relacao_dc_dv': resultado.relacao_dc_dv,
                'resultado': resultado.resultado,
            }
            resultados_lista.append(resultado_dict)
        if resultados_nexts.exists():
            resultado_next = resultados_nexts.first()
            resultado_next_dict = {
                'id': resultado_next.id,
                'n_de_pas': resultado_next.n_de_pas,
                'relacao_dc_dv': resultado_next.relacao_dc_dv,
                'resultado': resultado_next.resultado,
            }
            resultados_lista.append(resultado_next_dict)

        return resultados_lista

    except Exception as e:
        print(f"An error occurred: {e}")
        return []
