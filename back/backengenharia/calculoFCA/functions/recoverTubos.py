from ..database.feixes import recoverFeixesFilter


def recoverTubos(vars):
    compactado = vars['received_data'][3]
    pol = vars['received_data'][2]
    padrao = True
    if pol == '3/4pol':
        valuePol = 0.01905
    else:
        valuePol = 0.0254
    if vars['received_data'][1] == 'Engenhariaengenharia':
        padrao = False
    Tubos = recoverFeixesFilter(vars['received_data'][0], valuePol, compactado)
    return Tubos
