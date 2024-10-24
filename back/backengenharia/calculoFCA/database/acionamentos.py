from ..models import FCA, Acionamento
from django.db.models import Q
from django.forms.models import model_to_dict
from django.shortcuts import get_object_or_404


def selectCreateAcionamentos(dados, id):
    def parse_float(value):
        # Se o valor for vazio ou None, retorna 0
        if not value:
            return 0.0
        # Caso contrário, converte para float
        return float(str(value).replace(',', '.'))

    for acionamento in dados:
        modelo = acionamento.get('modelo', None)
        taxa_de_reducao = parse_float(acionamento['taxa_de_reducao'])
        potencia_do_motor = float(
            str(acionamento['potencia_do_motor']).replace(',', '.'))
        rotacao_do_motor = float(
            str(acionamento['rotacao_do_motor']).replace(',', '.'))
        rotacao_do_ventilador = float(
            str(acionamento['rotacao_do_ventilador']).replace(',', '.'))
        rendimento_do_redultor = float(
            str(acionamento['rendimento_do_redultor']).replace(',', '.'))
        motor_eletrico_tipo = acionamento.get('motor_eletrico_tipo', None)

        acionamento_criado = Acionamento.objects.create(
            rendimento_do_redultor=rendimento_do_redultor,
            tipo_de_acionamento_de_transmissao=acionamento['tipo_de_acionamento_de_transmissao'],
            modelo=modelo,
            taxa_de_reducao=taxa_de_reducao,
            potencia_do_motor=potencia_do_motor,
            rotacao_do_motor=rotacao_do_motor,
            rotacao_do_ventilador=rotacao_do_ventilador,
            motor_eletrico_tipo=motor_eletrico_tipo,
            id_calculoFCA_fca=id,
            modelo_padrao=acionamento['modelo_padrao'],
            status=acionamento['status']
        )
        acionamento_criado.save()

    return


def selectFilterAcionamentos(fca_id):
    todos_acionamentos = Acionamento.objects.filter(id_calculoFCA_fca=fca_id)
    return todos_acionamentos


def selectUpdateAcionamentos(dados, id):
    def parse_float(value):
        if not value:
            return 0.0
        return float(str(value).replace(',', '.'))

    for acionamentoDados in dados:
        try:
            if 'id' in acionamentoDados:

                id = acionamentoDados.get('id')
                acionamento_existente = Acionamento.objects.get(
                    id=id)
                acionamento_existente.modelo = acionamentoDados[
                    'modelo']
                acionamento_existente.taxa_de_reducao = acionamentoDados[
                    'taxa_de_reducao']
                acionamento_existente.potencia_do_motor = acionamentoDados['potencia_do_motor']
                acionamento_existente.rotacao_do_motor = acionamentoDados['rotacao_do_motor']
                acionamento_existente.rotacao_do_ventilador = acionamentoDados[
                    'rotacao_do_ventilador']

                acionamento_existente.tipo_de_acionamento_de_transmissao = acionamentoDados[
                    'tipo_de_acionamento_de_transmissao']
                acionamento_existente.motor_eletrico_tipo = acionamentoDados['motor_eletrico_tipo']
                acionamento_existente.id_calculoFCA_fca = acionamentoDados['id_calculoFCA_fca']
                acionamento_existente.status = acionamentoDados['status']
                acionamento_existente.modelo_padrao = acionamentoDados['modelo_padrao']
                acionamento_existente.rendimento_do_redultor = acionamentoDados[
                    'rendimento_do_redultor']
                acionamento_existente.save()

            else:
                modelo = acionamentoDados.get('modelo', None)
                taxa_de_reducao = parse_float(
                    acionamentoDados['taxa_de_reducao'])
                potencia_do_motor = float(
                    str(acionamentoDados['potencia_do_motor']).replace(',', '.'))
                rotacao_do_motor = float(
                    str(acionamentoDados['rotacao_do_motor']).replace(',', '.'))
                rotacao_do_ventilador = float(
                    str(acionamentoDados['rotacao_do_ventilador']).replace(',', '.'))
                rendimento_do_redultor = float(
                    str(acionamentoDados['rendimento_do_redultor']).replace(',', '.'))
                motor_eletrico_tipo = acionamentoDados.get(
                    'motor_eletrico_tipo', None)

                acionamento_criado = Acionamento.objects.create(
                    tipo_de_acionamento_de_transmissao=acionamentoDados[
                        'tipo_de_acionamento_de_transmissao'],
                    modelo=modelo,
                    taxa_de_reducao=taxa_de_reducao,
                    potencia_do_motor=potencia_do_motor,
                    rotacao_do_motor=rotacao_do_motor,
                    rotacao_do_ventilador=rotacao_do_ventilador,
                    rendimento_do_redultor=rendimento_do_redultor,
                    motor_eletrico_tipo=motor_eletrico_tipo,
                    id_calculoFCA_fca=id,
                    modelo_padrao=acionamentoDados['modelo_padrao'],
                    status=True
                )
        except Acionamento.DoesNotExist:
            print(f"Acionamento com ID {
                  acionamentoDados.get('id')} não encontrado.")
        except Exception as e:
            print(f"Erro ao processar o acionamento: {e}")

    return


def recoverAcionamentosFilter(fca_id, padrao):
    try:
        resultado = [model_to_dict(obj) for obj in Acionamento.objects.filter(
            id_calculoFCA_fca=fca_id)]
        return resultado
    except Exception as e:
        print(f"Erro ao recuperar os acionamentos: {e}")
        return []
