from calculoVentiladores.models import HD_DA
from django.db.models import F, Value
from django.db.models.functions import Abs


def consulta_hd_da(C135):
    print('C135', C135)
    if C135 < 0.2:
        tolerancia_menor = 0.05
        tolerancia = 0.0
        tolerancia_next = 0.050

        valor_min = C135 - tolerancia_menor
        valor_max = C135 - tolerancia
        valor_max_next = valor_max + tolerancia_next
        valor_min_next = valor_min + tolerancia_next

        resultados_lista = []

        resultados = HD_DA.objects.filter(
            relcao_hd_da__gte=valor_min,
            relcao_hd_da__lte=valor_max,
        ).annotate(
            diferenca=Abs(F('relcao_hd_da') - Value(C135))
        ).order_by('relcao_hd_da')[:1]

        # Filtrar os registros com base na próxima faixa de tolerância
        resultados_nexts = HD_DA.objects.filter(
            relcao_hd_da__gte=valor_min_next,
            relcao_hd_da__lte=valor_max_next,
        ).annotate(
            diferenca=Abs(F('relcao_hd_da') - Value(C135))
        ).order_by('relcao_hd_da')[:1]

        # Verificar se há resultados e adicionar à lista
        if resultados.exists():
            resultado = resultados.first()
            resultado_dict = {
                'id': resultado.id,
                'relcao_hd_da': resultado.relcao_hd_da,
                'C': resultado.C,
            }
            resultados_lista.append(resultado_dict)

        if resultados_nexts.exists():
            resultado_next = resultados_nexts.first()
            resultado_next_dict = {
                'id': resultado_next.id,
                'relcao_hd_da': resultado_next.relcao_hd_da,
                'C': resultado_next.C,
            }
            resultados_lista.append(resultado_next_dict)

    elif C135 >= 0.2 and C135 < 0.4:
        tolerancia_maior = 0.1
        tolerancia = 0.0
        tolerancia_next = 0.050

        valor_min = 0.2
        valor_max = valor_min + tolerancia_maior
        valor_max_next = valor_max + tolerancia_next
        valor_min_next = valor_min + tolerancia_next

        resultados_lista = []

        resultados = HD_DA.objects.filter(
            relcao_hd_da__gte=valor_min,
            relcao_hd_da__lte=valor_max,
        ).annotate(
            diferenca=Abs(F('relcao_hd_da') - Value(C135))
        ).order_by('relcao_hd_da')[:1]

        # Filtrar os registros com base na próxima faixa de tolerância
        resultados_nexts = HD_DA.objects.filter(
            relcao_hd_da__gt=valor_max,
        ).annotate(
            diferenca=Abs(F('relcao_hd_da') - Value(C135))
        ).order_by('relcao_hd_da')[:1]

        # Verificar se há resultados e adicionar à lista
        if resultados.exists():
            resultado = resultados.first()
            resultado_dict = {
                'id': resultado.id,
                'relcao_hd_da': resultado.relcao_hd_da,
                'C': resultado.C,
            }
            resultados_lista.append(resultado_dict)

        if resultados_nexts.exists():
            resultado_next = resultados_nexts.first()
            resultado_next_dict = {
                'id': resultado_next.id,
                'relcao_hd_da': resultado_next.relcao_hd_da,
                'C': resultado_next.C,
            }
            resultados_lista.append(resultado_next_dict)
    else:
        tolerancia_maior = 0.0
        tolerancia_menor = 0.1
        tolerancia_next = 0.1

        valor_min = C135 - tolerancia_menor
        valor_max = C135 + tolerancia_maior
        valor_max_next = valor_max + tolerancia_next
        valor_min_next = valor_min + tolerancia_next

        resultados_lista = []

        resultados = HD_DA.objects.filter(
            relcao_hd_da__gte=valor_min,
            relcao_hd_da__lte=valor_max,
        ).annotate(
            diferenca=Abs(F('relcao_hd_da') - Value(C135))
        ).order_by('relcao_hd_da')[:1]

        # Filtrar os registros com base na próxima faixa de tolerância
        resultados_nexts = HD_DA.objects.filter(
            relcao_hd_da__gt=valor_max,
        ).annotate(
            diferenca=Abs(F('relcao_hd_da') - Value(C135))
        ).order_by('relcao_hd_da')[:1]

        # Verificar se há resultados e adicionar à lista
        if resultados.exists():
            resultado = resultados.first()
            resultado_dict = {
                'id': resultado.id,
                'relcao_hd_da': resultado.relcao_hd_da,
                'C': resultado.C,
            }
            resultados_lista.append(resultado_dict)

        if resultados_nexts.exists():
            resultado_next = resultados_nexts.first()
            resultado_next_dict = {
                'id': resultado_next.id,
                'relcao_hd_da': resultado_next.relcao_hd_da,
                'C': resultado_next.C,
            }
            resultados_lista.append(resultado_next_dict)

    return resultados_lista
