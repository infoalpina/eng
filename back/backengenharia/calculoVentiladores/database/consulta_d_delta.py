from calculoVentiladores.models import relacao_d_delta


def consulta_d_delta(diametro_do_ventilador_int):
    # Filtra os registros com base no diâmetro do ventilador
    relacoes = relacao_d_delta.objects.filter(D=diametro_do_ventilador_int)
    relacoes_next = relacao_d_delta.objects.filter(
        D=diametro_do_ventilador_int + 1)

    # Verifica se há registros encontrados
    if relacoes.exists() and relacoes_next.exists():
        # Cria uma lista de dicionários para cada relação encontrada
        resultado = [{'D': relacao.D, 'DELTA': relacao.DELTA}
                     for relacao in relacoes]

        # Adiciona o próximo registro à lista resultado
        resultado += [{'D': relacao.D, 'DELTA': relacao.DELTA}
                      for relacao in relacoes_next]

    else:
        # Retorna uma mensagem se nenhum registro for encontrado
        resultado = {
            'mensagem': 'Nenhuma relação encontrada para o diâmetro fornecido'}

    return resultado
