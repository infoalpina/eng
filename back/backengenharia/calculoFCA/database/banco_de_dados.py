from ..models import FCA, Bomba, Ventiladores, Acionamento
from django.core.serializers import serialize
from django.http import JsonResponse
import json
from ..models import FCA
from ..models import Bomba
from ..models import Ventiladores
from ..models import Feixes
from django.db.models import Q


from django.db.models import Q


def valida_calculoFCA_cadastro(dados):
    todas_fcas_nome = FCA.objects.filter(
        Q(nome=dados['Nome']) &
        Q(areas_transversais=dados['Áreas_transversais']) &
        Q(largura=dados['largura_da_torre']) &
        Q(comprimento=dados['Comprimento_da_torre']) &
        Q(altura=dados['Altura_da_torre']) &
        Q(tower_is_standard=dados['tower_is_standard'])
    )
    if todas_fcas_nome.exists():
        return True
    return False


def valida_calculoFCA_update(dados):
    for bomba in dados['dadosFormulariosBombas']:
        bool = True  # Reinicializa bool para True em cada iteração
        if 'id' in bomba:
            todas_bombas = Bomba.objects.filter(id=bomba['id'])
            if todas_bombas.filter(modelo=bomba['modelo']).exists():
                bool = False
            if todas_bombas.filter(vazao=bomba['vazao']).exists():
                bool = False
            if todas_bombas.filter(potencia=bomba['potencia']).exists():
                bool = False
            if todas_bombas.filter(pressao=bomba['pressao']).exists():
                bool = False
            if todas_bombas.filter(rotacao=bomba['rotacao']).exists():
                bool = False
        else:
            return False  # Retorna False se 'id' não estiver presente

    for ventilador in dados['dadosFormulariosVentiladores']:
        bool = True  # Reinicializa bool para True em cada iteração
        if 'id' in ventilador:
            todas_ventiladores = Ventiladores.objects.filter(
                id=ventilador['id'])
            if todas_ventiladores.filter(modelo=ventilador['modelo']).exists():
                return False
            if todas_ventiladores.filter(diametro_do_ventilador=ventilador['diametro_do_ventilador']).exists():
                return False
            if todas_ventiladores.filter(serie=ventilador['serie']).exists():
                return False
            if todas_ventiladores.filter(modelo_das_pas=ventilador['modelo_das_pas']).exists():
                return False
            if todas_ventiladores.filter(rendimento_do_redultor=ventilador['rendimento_do_redultor']).exists():
                return False
            if todas_ventiladores.filter(numero_de_pas=ventilador['numero_de_pas']).exists():
                return False
            if todas_ventiladores.filter(comprimento_das_pas=ventilador['comprimento_das_pas']).exists():
                return False
            if todas_ventiladores.filter(material_das_pas=ventilador['material_das_pas']).exists():
                return False

        else:
            return False  # Retorna False se 'id' não estiver presente

    # Validação das FCAs
    todas_fcas_nome = FCA.objects.filter(
        Q(nome=dados['Nome']) &
        Q(areas_transversais=dados['Áreas_transversais']) &
        Q(largura=dados['largura_da_torre']) &
        Q(comprimento=dados['Comprimento_da_torre']) &
        Q(altura=dados['Altura_da_torre'])
    )

    if todas_fcas_nome.exists():
        return True

    return False


def database(modelfca, torre):
    # Filtrando a tabela FCA com base no campo 'nome'
    todas_fcas = FCA.objects.filter(nome=torre)

    # Inicializando uma lista para armazenar os resultados
    resultado_final = []

    # Iterando sobre os objetos FCA filtrados
    for fca in todas_fcas:

        # Convertendo os resultados para um formato desejado (pode ser um dicionário, por exemplo)
        resultado_atual = {
            'fca': {'id': fca.id, 'nome': fca.nome, 'outros_campos': fca.outros_campos},
            'chars_fca': [{'id': chars.id, 'campo1': chars.campo1, 'campo2': chars.campo2} for chars in todas_fcaschars]
        }

        # Adicionando o resultado atual à lista de resultados
        resultado_final.append(resultado_atual)
        print(resultado_final)

    # O resultado_final agora contém uma lista de dicionários, cada um representando um par FCA e CharsFCA relacionado
