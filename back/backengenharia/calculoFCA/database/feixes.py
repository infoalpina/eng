from ..models import Feixes
from django.db.models import Q
from django.forms.models import model_to_dict


def recoverFeixesFilter(fca_id, valuePol, compactado):
    print('fca_id', fca_id)
    print('valuePol', valuePol)
    tolerance = 1e-5  # Ajuste a tolerância conforme necessário
    return [model_to_dict(obj) for obj in Feixes.objects.filter(
        id_torres=fca_id,
        diam_extern_ent_tub__range=(
            valuePol - tolerance, valuePol + tolerance),
        modelo=compactado
    )]


def parse_float(value):
    # Se o valor for vazio ou None, retorna 0
    if not value:
        return 0.0
    # Caso contrário, converte para float
    return float(str(value).replace(',', '.'))


def selectCreateFeixes(dados, id=1):
    print('dados', dados)
    for SpecificFeixes in dados:
        modelo = SpecificFeixes['modelo']
        diam_extern_ent_tub = float(
            str(SpecificFeixes['diam_extern_ent_tub']).replace(',', '.'))
        diam_intern_ent_tub = float(
            str(SpecificFeixes['diam_intern_ent_tub']).replace(',', '.'))
        exp_parede = float(str(SpecificFeixes['exp_parede']).replace(',', '.'))
        N_de_tub_hor = parse_float(SpecificFeixes.get('N_de_tub_hor'))
        N_de_tub_hor_compact = parse_float(
            SpecificFeixes.get('N_de_tub_hor_compact'))
        N_de_tub_vert_10 = parse_float(SpecificFeixes['N_de_tub_vert_10'])
        N_de_tub_vert_8 = parse_float(SpecificFeixes['N_de_tub_vert_8'])
        N_de_tub_vert_6 = parse_float(SpecificFeixes['N_de_tub_vert_6'])

        dist_ent_tub = float(
            str(SpecificFeixes['dist_ent_tub']).replace(',', '.'))
        condutib_termic_carbon = float(
            str(SpecificFeixes['condutib_termic_carbon']).replace(',', '.'))
        condutib_termic_inox = float(
            str(SpecificFeixes['condutib_termic_inox']).replace(',', '.'))
        comprimento_dos_feixes = float(
            str(SpecificFeixes['comprimento_dos_feixes']).replace(',', '.'))
        acionamento_criado = Feixes.objects.create(
            modelo=modelo,
            id_torres=id,
            diam_extern_ent_tub=diam_extern_ent_tub,
            diam_intern_ent_tub=diam_intern_ent_tub,
            exp_parede=exp_parede,
            N_de_tub_hor=N_de_tub_hor,
            N_de_tub_hor_compact=N_de_tub_hor_compact,
            N_de_tub_vert_10=N_de_tub_vert_10,
            N_de_tub_vert_8=N_de_tub_vert_8,
            N_de_tub_vert_6=N_de_tub_vert_6,
            dist_ent_tub=dist_ent_tub,
            condutib_termic_carbon=condutib_termic_carbon,
            condutib_termic_inox=condutib_termic_inox,
            comprimento_dos_feixes=comprimento_dos_feixes,
            modelo_padrao=SpecificFeixes['modelo_padrao'],
            status=True,
        )
        acionamento_criado.save()
    return


def selectFilterFeixes(fca_id):
    todos_Feixes = Feixes.objects.filter(id_torres=fca_id)
    return todos_Feixes


def selectUpdateFeixes(dados, id):
    for SpecificFeixes in dados:
        try:
            modelo = SpecificFeixes['modelo']
            diam_extern_ent_tub = float(
                str(SpecificFeixes['diam_extern_ent_tub']).replace(',', '.'))
            diam_intern_ent_tub = float(
                str(SpecificFeixes['diam_intern_ent_tub']).replace(',', '.'))
            N_de_tub_vert_6 = parse_float(SpecificFeixes['N_de_tub_vert_6'])
            N_de_tub_vert_8 = parse_float(SpecificFeixes['N_de_tub_vert_8'])
            N_de_tub_vert_10 = parse_float(SpecificFeixes['N_de_tub_vert_10'])
            N_de_tub_hor = parse_float(SpecificFeixes['N_de_tub_hor'])
            N_de_tub_hor_compact = parse_float(
                SpecificFeixes.get('N_de_tub_hor_compact'))
            dist_ent_tub = float(
                str(SpecificFeixes['dist_ent_tub']).replace(',', '.'))
            exp_parede = float(
                str(SpecificFeixes['exp_parede']).replace(',', '.'))
            condutib_termic_carbon = float(
                str(SpecificFeixes['condutib_termic_carbon']).replace(',', '.'))
            condutib_termic_inox = float(
                str(SpecificFeixes['condutib_termic_inox']).replace(',', '.'))
            modelo_padrao = SpecificFeixes['modelo_padrao']
            comprimento_dos_feixes = float(
                str(SpecificFeixes['comprimento_dos_feixes']).replace(',', '.'))
            status = SpecificFeixes['status']

            # Atualizar ou criar o registro
            if 'id' in SpecificFeixes:
                print('teste 1')
                # Busca pelo ID específico do registro, não apenas id_torres
                acionamento_existente = Feixes.objects.get(
                    id=SpecificFeixes['id'])
                # Atualiza os campos do objeto existente
                acionamento_existente.modelo = modelo
                acionamento_existente.diam_extern_ent_tub = diam_extern_ent_tub
                acionamento_existente.diam_intern_ent_tub = diam_intern_ent_tub
                acionamento_existente.N_de_tub_vert_6 = N_de_tub_vert_6
                acionamento_existente.N_de_tub_vert_8 = N_de_tub_vert_8
                acionamento_existente.N_de_tub_vert_10 = N_de_tub_vert_10
                acionamento_existente.N_de_tub_hor = N_de_tub_hor
                acionamento_existente.N_de_tub_hor_compact = N_de_tub_hor_compact
                acionamento_existente.dist_ent_tub = dist_ent_tub
                acionamento_existente.exp_parede = exp_parede
                acionamento_existente.condutib_termic_carbon = condutib_termic_carbon
                acionamento_existente.condutib_termic_inox = condutib_termic_inox
                acionamento_existente.comprimento_dos_feixes = comprimento_dos_feixes
                acionamento_existente.status = status
                acionamento_existente.modelo_padrao = SpecificFeixes['modelo_padrao']
                acionamento_existente.save()

            else:
                print('teste 2')
                # Cria um novo objeto com todos os campos necessários
                Feixes.objects.create(
                    id_torres=id,
                    modelo=modelo,
                    diam_extern_ent_tub=diam_extern_ent_tub,
                    diam_intern_ent_tub=diam_intern_ent_tub,
                    N_de_tub_vert_6=N_de_tub_vert_6,
                    N_de_tub_vert_8=N_de_tub_vert_8,
                    N_de_tub_vert_10=N_de_tub_vert_10,
                    dist_ent_tub=dist_ent_tub,
                    status=status,
                    modelo_padrao=modelo_padrao,
                    exp_parede=exp_parede,
                    condutib_termic_carbon=condutib_termic_carbon,
                    condutib_termic_inox=condutib_termic_inox,
                    comprimento_dos_feixes=comprimento_dos_feixes,
                    N_de_tub_hor=N_de_tub_hor,
                    N_de_tub_hor_compact=N_de_tub_hor_compact,
                )

        except Feixes.DoesNotExist:
            print(f"Acionamento com ID {SpecificFeixes.get(
                'id', 'desconhecido')} não encontrado.")
        except Exception as e:
            print(f"Erro ao processar o acionamento: {e}")

    return
