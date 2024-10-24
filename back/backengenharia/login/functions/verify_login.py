from ..database.gerenciamento_de_login import login


def verify_login(data):

    acesso = login(data)

    
    return acesso
