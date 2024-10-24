from ..database.fca import selectFilterFCAid
from django.forms.models import model_to_dict
from ..database.fca import selectUpdateactiveFCA

def desativarTorres(dados):
    fcas = selectUpdateactiveFCA(dados)

    
    
