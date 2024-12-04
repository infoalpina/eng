from ..database.dadosPrincipais import selectAllDadosPrincipais


def ReadSelecao(nde, nate):
    try:
        dadosPrincipais_data = selectAllDadosPrincipais(nde, nate)

        # Criar uma lista de torres
        torres = []

        # Iterar sobre os objetos do tipo SelecaoDadosPrincipais
        for dadosPrincipais in dadosPrincipais_data:
            # Acessar os atributos do objeto e criar um dicionário com as características da torre
            torre = {
                'dadosPrincipais': {
                    'id': dadosPrincipais.id,
                    'nome': dadosPrincipais.Serie,
                    'status': dadosPrincipais.status,
                },
            }
            torres.append(torre)
        print(torres[nde:nate])

        # Criar uma nova lista contendo apenas os dados do índice nde até o índice nate
        torres_selecionadas = torres[nde:nate]

        return torres_selecionadas

    except Exception as e:
        print(f"Ocorreu um erro: {e}")
        return None
