
from ..database.bomba import selectCreateBomba
from ..database.fca import selectCreateFCA
from ..database.ventiladores import selectCreateVentiladores
from ..database.acionamentos import selectCreateAcionamentos
from ..database.banco_de_dados import valida_calculoFCA_cadastro
from ..database.feixes import selectCreateFeixes


def cadastroTorres(dados):
    validation = valida_calculoFCA_cadastro(dados)

    if (validation):
        return True
    else:
        calculoFCA_fca = {
            'Nome': dados['Nome'],
            'Áreas_transversais': dados['Áreas_transversais'],
            'largura_da_torre': dados['largura_da_torre'],
            'Comprimento_da_torre': dados['Comprimento_da_torre'],
            'Altura_da_torre': dados['Altura_da_torre'],
            'tower_is_standard': dados['tower_is_standard'],
            'forcOuInd': dados['forcOuInd'],
            'tipoDeCarcaca': dados['tipoDeCarcaca']
        }

        id = selectCreateFCA(calculoFCA_fca)

        selectCreateFeixes(dados['dadosFormulariosFeixes'], id)

        selectCreateBomba(dados['dadosFormulariosBombas'], id)
        selectCreateVentiladores(
            dados['dadosFormulariosVentiladores'], id)
        selectCreateAcionamentos(
            dados['dadosFormulariosAcionamentos'], id)

        return False
