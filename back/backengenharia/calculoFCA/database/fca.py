from django.db import connection
from ..models import FCA
from ..models import Bomba
from ..models import Ventiladores
from ..models import Acionamento
from ..models import Feixes
from django.db.models import Q
from django.forms.models import model_to_dict
from itertools import chain


def selectListFCA():
    todas_bombas = FCA.objects.all()
    return todas_bombas


def selectSpecificFCA(dados):
    todas_bombas = FCA.objects.filter(FCA=dados)
    return todas_bombas


def selectFilterFCAid(fca_id):
    todas_fcas = FCA.objects.filter(id=fca_id)
    return todas_fcas


def filterFCATable(id=None, nome=''):
    print('Nome buscado:', nome)
    if id:
        todas_fcas = FCA.objects.filter(id=id)
    else:
        todas_fcas = FCA.objects.filter(nome__icontains=str(nome))

    return todas_fcas


def filterFCA(id_resfriador, id_bomba, id_ventil, id_acio, id_feixes):
    todas_fcas = FCA.objects.filter(nome=id_resfriador)
    fcas_data = [model_to_dict(obj) for obj in todas_fcas]

    for fca in fcas_data:
        fca['outros_dados'] = list(chain(
            Bomba.objects.filter(id=id_bomba).values(),
            Ventiladores.objects.filter(id=id_ventil).values(),
            Acionamento.objects.filter(id=id_acio).values(),
            Feixes.objects.filter(id=id_feixes).values()
        ))
    return fcas_data


def selectFilterFCA(ty_str):
    todas_fcas = FCA.objects.filter(Cod=ty_str)
    return todas_fcas


def selectAllFCA():
    todas_FCA = FCA.objects.all()
    return todas_FCA


def selectCreateFCA(dados):
    # Convertendo valores numéricos para o padrão com ponto
    dados['Áreas_transversais'] = str(
        dados['Áreas_transversais']).replace(',', '.')
    dados['largura_da_torre'] = str(
        dados['largura_da_torre']).replace(',', '.')
    dados['Comprimento_da_torre'] = str(
        dados['Comprimento_da_torre']).replace(',', '.')
    dados['Altura_da_torre'] = str(dados['Altura_da_torre']).replace(',', '.')
    dados['tower_is_standard'] = str(
        dados['tower_is_standard'])
    dados['forcOuInd'] = str(
        dados['forcOuInd'])

    FCACriado = FCA.objects.create(
        nome=dados['Nome'],
        areas_transversais=dados['Áreas_transversais'],
        largura=dados['largura_da_torre'],
        comprimento=dados['Comprimento_da_torre'],
        altura=dados['Altura_da_torre'],
        tower_is_standard=dados['tower_is_standard'],
        forcOuInd=dados['forcOuInd'],
        tipoDeCarcaca=dados['tipoDeCarcaca'],
    )

    # Agora, você pode acessar o id do objeto criado
    id_do_novo_fca = FCACriado.id
    return id_do_novo_fca


def selectUpdateFCA(dados):
    dados['Áreas_transversais'] = str(
        dados['Áreas_transversais']).replace(',', '.')
    dados['largura_da_torre'] = str(
        dados['largura_da_torre']).replace(',', '.')
    dados['Comprimento_da_torre'] = str(
        dados['Comprimento_da_torre']).replace(',', '.')
    dados['Altura_da_torre'] = str(dados['Altura_da_torre']).replace(',', '.')
    dados['tower_is_standard'] = str(
        dados['tower_is_standard'])
    dados['forcOuInd'] = str(
        dados['forcOuInd'])

    # Recupera o objeto existente do banco de dados usando o ID ou outro campo único
    FCAExistente = FCA.objects.get(id=dados['id'])

    # Atualiza os campos necessários
    FCAExistente.nome = dados['Nome']
    FCAExistente.areas_transversais = dados['Áreas_transversais']
    FCAExistente.largura = dados['largura_da_torre']
    FCAExistente.comprimento = dados['Comprimento_da_torre']
    FCAExistente.altura = dados['Altura_da_torre']
    FCAExistente.tower_is_standard = dados['tower_is_standard']
    FCAExistente.forcOuInd = dados['forcOuInd']
    FCAExistente.tipoDeCarcaca = dados['tipoDeCarcaca']

    # Salva as alterações no banco de dados
    FCAExistente.save()

    return FCAExistente


def selectUpdateactiveFCA(dados):
    FCAExistente = FCA.objects.get(id=dados['id'])

    # Inverte o valor de ativado
    FCAExistente.ativado = not FCAExistente.ativado
    FCAExistente.save()
