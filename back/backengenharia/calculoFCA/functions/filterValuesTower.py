from ..models import FCA


def filterValuesTower(dados):
    valuesInInterval = FCA.objects.filter(
        nome__icontains=dados).values('id', 'nome')
    return valuesInInterval
