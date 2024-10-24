from ..database.fca import filterFCATable


def searchTowers(dados):
    id = dados['id']
    nome = dados['nomeDaTorre']
    print('id', id)
    print('nome', nome)

    fca_data = filterFCATable(id, nome)
    print('fca_data', fca_data)

    torres = []

    for fca in fca_data:
        torre = {
            'dadosPrincipais': {
                'id': fca.id,
                'nome': fca.nome,
                'status': fca.ativado,
            }
        }
        torres.append(torre)

    return torres
