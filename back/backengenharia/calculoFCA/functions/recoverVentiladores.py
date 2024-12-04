from ..database.ventiladores import recoverVentiladoresFilter


def recoverVentiladores(vars):
    padrao = True
    if vars['received_data'][1] == 'Engenhariaengenharia':
        padrao = False
    ventiladores = recoverVentiladoresFilter(vars['received_data'][0], padrao)
    return ventiladores
