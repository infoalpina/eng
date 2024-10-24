from ..models import Bomba
from django.db.models import Q
from django.forms.models import model_to_dict


def selectListBomba(id_list):
    todas_bombas = Bomba.objects.filter(id_FCA_id__in=id_list)
    return todas_bombas


def recoverBombasFilter(fca_id, padrao):
    return [model_to_dict(obj) for obj in Bomba.objects.filter(id_FCA_id=fca_id, modelo_padrao=not padrao)]


def filterBomba(dados):
    todas_Bomba = []

    # Use Q para criar uma condição de OU
    filter_condition = Q()
    if 'id' in dados and dados['id'] != '':
        filter_condition |= Q(id_FCA_id=dados['id'])

    # Aplicar a condição de filtro
    todas_Bomba = Bomba.objects.filter(filter_condition)

    # Você pode acessar os resultados como objetos FCA ou transformá-los em dicionários
    Bomba_data = [model_to_dict(obj) for obj in todas_Bomba]

    return Bomba_data


def selectFilterBomba(fca_id):
    try:
        todas_bombas = Bomba.objects.filter(id_FCA_id=fca_id)
        return todas_bombas
    except Exception as e:
        print(f'Erro ao filtrar bombas: {e}')
        return None


def selectAllBomba():
    todas_bombas = Bomba.objects.all()
    return todas_bombas


def selectCreateBomba(dados, id):
    for bomba in dados:
        vazao = float(str(bomba['vazao']).replace(',', '.'))
        potencia = float(str(bomba['potencia']).replace(',', '.'))
        pressao = float(str(bomba['pressao']).replace(',', '.'))
        rotacao = float(str(bomba['rotacao']).replace(',', '.'))

        bombaCriada = Bomba.objects.create(
            modelo=bomba['modelo'],
            vazao=vazao,
            potencia=potencia,
            pressao=pressao,
            rotacao=rotacao,
            id_FCA_id=id,
            modelo_padrao=bomba['modelo_padrao'],
            status=True
        )

        bombaCriada.save()


def selectUpdateBomba(dados, id):
    for bomba in dados:
        print('bomba', bomba)
        if 'id' in bomba:
            vazao = float(str(bomba['vazao']).replace(',', '.'))
            potencia = float(str(bomba['potencia']).replace(',', '.'))
            pressao = float(str(bomba['pressao']).replace(',', '.'))
            rotacao = float(str(bomba['rotacao']).replace(',', '.'))
            bombaExistente = Bomba.objects.get(id=bomba.get('id'))
            print('id', id)
            print('bomba', bomba.get('id'))
            print('bombaExistente', bombaExistente)
            bombaExistente.modelo = bomba['modelo']
            bombaExistente.vazao = vazao
            bombaExistente.potencia = potencia
            bombaExistente.pressao = pressao
            bombaExistente.rotacao = rotacao
            bombaExistente.id_FCA_id = id
            bombaExistente.status = bomba['status']
            bombaExistente.modelo_padrao = bomba['modelo_padrao']

            bombaExistente.save()
        else:
            vazao = float(str(bomba['vazao']).replace(',', '.'))
            potencia = float(str(bomba['potencia']).replace(',', '.'))
            pressao = float(str(bomba['pressao']).replace(',', '.'))
            rotacao = float(str(bomba['rotacao']).replace(',', '.'))

            bombaCriada = Bomba.objects.create(
                modelo=bomba['modelo'],
                vazao=vazao,
                potencia=potencia,
                pressao=pressao,
                rotacao=rotacao,
                id_FCA_id=id,
                modelo_padrao=bomba['modelo_padrao'],
                status=True
            )

            bombaCriada.save()

    return
