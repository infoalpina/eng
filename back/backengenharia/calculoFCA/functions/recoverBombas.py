from ..database.bomba import recoverBombasFilter
def recoverBombas(vars):
    padrao = True
    if vars['received_data'][1] == 'Engenhariaengenharia':
        padrao = False
    bombas = recoverBombasFilter(vars['received_data'][0],padrao)
    return bombas