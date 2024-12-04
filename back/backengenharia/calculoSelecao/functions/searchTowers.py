from ..database.dadosPrincipais import filterDadosPrincipais


def searchTowers(dados):

    id = dados['id']
    nome = dados['nomeDaTorre']

    print('teste')

    DadosPrincipais_data = filterDadosPrincipais(id, nome)

    torres = []

    for DadosPrincipais in DadosPrincipais_data:
        torre = {
            'dadosPrincipais': {
                'id': DadosPrincipais.id,
                'nome': DadosPrincipais.Serie,
                'status': DadosPrincipais.status,
            }
        }
        torres.append(torre)
    print('torre', torre)

    return [torre]
