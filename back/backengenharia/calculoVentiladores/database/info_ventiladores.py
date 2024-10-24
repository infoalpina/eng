from decimal import Decimal
from calculoVentiladores.models import Ventiladores


def cruzarDados(PSI, FI, serie, numero_de_pas):
    nome = '8e'
    if serie[1] == '9EM2':
        if int(numero_de_pas[1]) == 8:
            nome = '9e8'
        else:
            nome = '9e10'

    # Filtrar os objetos da classe Ventiladores com os valores cruzados de PSI e FI
    ventiladores_cruzados = Ventiladores.objects.filter(
        nome_do_ventilador=nome, PSI=PSI, FI=FI)

    # Encontrar o próximo valor de FI acima do valor atualmente filtrado
    prox_fi_acima = Ventiladores.objects.filter(
        nome_do_ventilador=nome, PSI=PSI, FI__gt=FI).order_by('FI').first()

    # Encontrar o próximo valor de PSI acima do valor atualmente filtrado
    prox_psi_acima = Ventiladores.objects.filter(
        nome_do_ventilador=nome, PSI__gt=PSI, FI=FI).order_by('PSI').first()

    # Armazenar os dados dos ventiladores em formato de dicionário
    dados_ventiladores = []

    # Verificar se há algum objeto retornado
    if ventiladores_cruzados.exists():
        for ventilador in ventiladores_cruzados:
            dados_ventiladores.append({
                'nome_do_ventilador': ventilador.nome_do_ventilador,
                'numero_de_pas': ventilador.numero_de_pas,
                'PSI': float(ventilador.PSI),
                'FI': float(ventilador.FI),
                'resposta': ventilador.resposta,
                'angulo_da_pa': float(ventilador.angulo_da_pa)
            })

    if prox_fi_acima:
        dados_ventiladores.append({
            'nome_do_ventilador': prox_fi_acima.nome_do_ventilador,
            'numero_de_pas': prox_fi_acima.numero_de_pas,
            'PSI': float(prox_fi_acima.PSI),
            'FI': float(prox_fi_acima.FI),
            'resposta': prox_fi_acima.resposta,
            'angulo_da_pa': float(prox_fi_acima.angulo_da_pa)
        })

    if prox_psi_acima:
        dados_ventiladores.append({
            'nome_do_ventilador': prox_psi_acima.nome_do_ventilador,
            'numero_de_pas': prox_psi_acima.numero_de_pas,
            'PSI': float(prox_psi_acima.PSI),
            'FI': float(prox_psi_acima.FI),
            'resposta': prox_psi_acima.resposta,
            'angulo_da_pa': float(prox_psi_acima.angulo_da_pa)
        })

    if not dados_ventiladores:
        print("Nenhum ventilador encontrado com PSI =", PSI, "e FI =", FI)
        return dados_ventiladores

    novoFI = dados_ventiladores[1]['FI']

    prox_psi_acima_e_fi_acima = Ventiladores.objects.filter(
        nome_do_ventilador=nome, PSI__gt=PSI, FI=novoFI).order_by('PSI').first()

    if prox_psi_acima_e_fi_acima:
        dados_ventiladores.append({
            'nome_do_ventilador': prox_psi_acima_e_fi_acima.nome_do_ventilador,
            'numero_de_pas': prox_psi_acima_e_fi_acima.numero_de_pas,
            'PSI': float(prox_psi_acima_e_fi_acima.PSI),
            'FI': float(prox_psi_acima_e_fi_acima.FI),
            'resposta': prox_psi_acima_e_fi_acima.resposta,
            'angulo_da_pa': float(prox_psi_acima_e_fi_acima.angulo_da_pa)
        })
    return dados_ventiladores
