from ..database.acionamentos import recoverAcionamentosFilter


def recoverAcionamentos(vars):
    padrao = False
    if vars['received_data'][1] == 'Engenhariaengenharia':
        padrao = True
    acionamentos = recoverAcionamentosFilter(vars['received_data'][0], padrao)

    return acionamentos
