from ..models import Ventiladores
from django.db.models import Q
from django.forms.models import model_to_dict


def selectSpecificVentiladores(dados):
    todas_ventiladores = Ventiladores.objects.filter(FCA=dados)
    return todas_ventiladores


def recoverVentiladoresFilter(fca_id, padrao):
    print('padrao', not padrao)
    if not padrao:
        return [model_to_dict(obj) for obj in Ventiladores.objects.filter(id_FCA_id=fca_id)]
    else:
        return [model_to_dict(obj) for obj in Ventiladores.objects.filter(id_FCA_id=fca_id, modelo_padrao=True)]


def selectListVentiladores(id_list):
    todas_ventiladores = Ventiladores.objects.filter(id_FCA_id__in=id_list)
    return todas_ventiladores


def filterVentiladores(dados):
    todas_Ventiladores = []

    # Use Q para criar uma condição de OU
    filter_condition = Q()
    if 'id' in dados and dados['id'] != '':
        filter_condition |= Q(id_FCA_id=dados['id'])

    # Aplicar a condição de filtro
    todas_Ventiladores = Ventiladores.objects.filter(filter_condition)

    # Você pode acessar os resultados como objetos FCA ou transformá-los em dicionários
    Ventiladores_data = [model_to_dict(obj) for obj in todas_Ventiladores]

    return Ventiladores_data


def selectFilterVentiladores(fca_id):
    todos_ventiladores = Ventiladores.objects.filter(id_FCA_id=fca_id)
    return todos_ventiladores


def selectAllVentiladores():
    todas_Ventiladores = Ventiladores.objects.all()
    return todas_Ventiladores


def selectCreateVentiladores(dados, id):
    for ventilador in dados:
        diametro_do_ventilador = float(
            str(ventilador['diametro_do_ventilador']).replace(',', '.'))
        modelo_das_pas = float(
            str(ventilador['modelo_das_pas']).replace(',', '.'))
        comprimento_das_pas = float(
            str(ventilador['comprimento_das_pas']).replace(',', '.'))
        material_das_pas = ventilador['material_das_pas']
        material_dos_cubos = ventilador['material_dos_cubos']
        numero_de_pas = float(
            str(ventilador['numero_de_pas']).replace(',', '.'))
        diametro = float(str(ventilador['diametro']).replace(',', '.'))
        A0 = float(str(ventilador['A0']).replace(',', '.'))
        A1 = float(str(ventilador['A1']).replace(',', '.'))
        A2 = float(str(ventilador['A2']).replace(',', '.'))
        A3 = float(str(ventilador['A3']).replace(',', '.'))
        n_de_ventilador_por_celula = ventilador['n_de_ventilador_por_celula']
        ventilador_criado = Ventiladores.objects.create(
            modelo=ventilador['modelo'],
            serie=ventilador['serie'],
            diametro_do_ventilador=diametro_do_ventilador,
            modelo_das_pas=modelo_das_pas,
            comprimento_das_pas=comprimento_das_pas,
            material_das_pas=material_das_pas,
            material_dos_cubos=material_dos_cubos,
            numero_de_pas=numero_de_pas,
            id_FCA_id=id,
            diametro=diametro,
            modelo_padrao=ventilador['modelo_padrao'],
            status=True,
            n_de_ventilador_por_celula=n_de_ventilador_por_celula,
            A0=A0,
            A1=A1,
            A2=A2,
            A3=A3,
        )

        ventilador_criado.save()


def selectUpdateVentiladores(dados, id):
    print('dados', dados)
    for Ventilador in dados:
        if 'id' in Ventilador:
            diametro_do_ventilador = float(
                str(Ventilador['diametro_do_ventilador']).replace(',', '.'))
            modelo = Ventilador['modelo']
            modelo_das_pas = float(
                str(Ventilador['modelo_das_pas']).replace(',', '.'))
            comprimento_das_pas = float(
                str(Ventilador['comprimento_das_pas']).replace(',', '.'))
            material_das_pas = Ventilador['material_das_pas']
            material_dos_cubos = Ventilador['material_dos_cubos']
            numero_de_pas = float(
                str(Ventilador['numero_de_pas']).replace(',', '.'))
            diametro = float(str(Ventilador['diametro']).replace(',', '.'))
            n_de_ventilador_por_celula = float(
                str(Ventilador['n_de_ventilador_por_celula']).replace(',', '.'))
            serie = Ventilador['serie']
            modelo_padrao = Ventilador['modelo_padrao']
            status = Ventilador['status']
            A0 = float(str(Ventilador['A0']).replace(',', '.'))
            A1 = float(str(Ventilador['A1']).replace(',', '.'))
            A2 = float(str(Ventilador['A2']).replace(',', '.'))
            A3 = float(str(Ventilador['A3']).replace(',', '.'))

            VentiladorExistente = Ventiladores.objects.get(id=Ventilador['id'])
            VentiladorExistente.modelo = modelo
            VentiladorExistente.diametro_do_ventilador = diametro_do_ventilador
            VentiladorExistente.comprimento_das_pas = comprimento_das_pas
            VentiladorExistente.material_das_pas = material_das_pas
            VentiladorExistente.material_dos_cubos = material_dos_cubos
            VentiladorExistente.numero_de_pas = numero_de_pas
            VentiladorExistente.serie = serie
            VentiladorExistente.modelo_das_pas = modelo_das_pas
            VentiladorExistente.diametro = diametro
            VentiladorExistente.modelo_padrao = modelo_padrao
            VentiladorExistente.status = status
            VentiladorExistente.n_de_ventilador_por_celula = n_de_ventilador_por_celula
            VentiladorExistente.A0 = A0
            VentiladorExistente.A1 = A1
            VentiladorExistente.A2 = A2
            VentiladorExistente.A3 = A3
            VentiladorExistente.save()
        else:
            diametro_do_ventilador = float(
                str(Ventilador['diametro_do_ventilador']).replace(',', '.'))
            modelo_das_pas = float(
                str(Ventilador['modelo_das_pas']).replace(',', '.'))
            comprimento_das_pas = float(
                str(Ventilador['comprimento_das_pas']).replace(',', '.'))
            material_das_pas = Ventilador['material_das_pas']
            material_dos_cubos = Ventilador['material_dos_cubos']
            numero_de_pas = float(
                str(Ventilador['numero_de_pas']).replace(',', '.'))
            diametro = float(str(Ventilador['diametro']).replace(',', '.'))
            n_de_ventilador_por_celula = float(
                str(Ventilador['n_de_ventilador_por_celula']).replace(',', '.'))
            A0 = float(str(Ventilador['A0']).replace(',', '.'))
            A1 = float(str(Ventilador['A1']).replace(',', '.'))
            A2 = float(str(Ventilador['A2']).replace(',', '.'))
            A3 = float(str(Ventilador['A3']).replace(',', '.'))

            ventilador_criado = Ventiladores.objects.create (
                modelo=Ventilador['modelo'],
                serie=Ventilador['serie'],
                diametro_do_ventilador=diametro_do_ventilador,
                modelo_das_pas=modelo_das_pas,
                comprimento_das_pas=comprimento_das_pas,
                material_das_pas=material_das_pas,
                material_dos_cubos=material_dos_cubos,
                numero_de_pas=numero_de_pas,
                id_FCA_id=id,
                diametro=diametro,
                modelo_padrao=Ventilador['modelo_padrao'],
                status=True,
                n_de_ventilador_por_celula=n_de_ventilador_por_celula,
                A0 = A0,
                A1 = A1,
                A2 = A2,
                A3 = A3,
            )
    return
