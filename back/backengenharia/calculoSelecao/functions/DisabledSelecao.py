from ..database.dadosPrincipais import DisabledCreateDadosPrincipais

def DisabledSelecao(data):
    COD = data['COD']
    Status = data['Status']
    print(data)

    DisabledCreateDadosPrincipais(COD,Status)



    return 'DisabledSelecao'
