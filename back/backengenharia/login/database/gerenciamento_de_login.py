from ..models import Usuario
from django.http import JsonResponse
from django.forms.models import model_to_dict
from django.contrib.auth.hashers import make_password, check_password
from bcrypt import checkpw
import requests


def login(dados):
    usuario = dados['usuario']
    senha = dados['senha']
    recaptchaResponse = dados['captcha']

    # Consulta aos dados do modelo Usuario no banco de dados secundário
    data_users = Usuario.objects.using(
        'ControlAccessExtern').filter(Usuario=usuario)
    data_users = [model_to_dict(obj) for obj in data_users]

    if len(data_users) > 0:
        setusuario = data_users[0]['Usuario']
        setsenha_hashed = data_users[0]['Senha']
        setacessoEngenhariaComum = data_users[0]['EngenhariaComumEngenharia']
        setacessoEngenhariaCompleto = data_users[0]['Engenhariaengenharia']
        recaptchaSecretKey = '6LfyLccpAAAAABmE20NgC6RrfkGlM2I0n3Oa0_UU'
        url = 'https://www.google.com/recaptcha/api/siteverify'
        data = {
            'secret': recaptchaSecretKey,
            'response': recaptchaResponse,
        }

        recaptcha_verify_response = requests.post(url, data=data)
        if not recaptcha_verify_response.json()['success']:
           return JsonResponse({
               'usuario': '',
               'acesso': '',
               'chave': '',
           })

        if setacessoEngenhariaCompleto:
            setacesso = setacessoEngenhariaCompleto
            setchave = 'Engenhariaengenharia'
        else:
            setacesso = setacessoEngenhariaComum
            setchave = 'EngenhariaComumEngenharia'

        if setusuario == usuario and checkpw(senha.encode('utf-8'), setsenha_hashed.encode('utf-8')):
            # Este é o bloco de código que será executado se a condição for verdadeira

            return {
                'usuario': setusuario,
                'acesso': setacesso,
                'chave': setchave
            }

        else:
            # Este é o bloco de código que será executado se a condição for falsa
            print('Credenciais inválidas')
            return {
                'usuario': '',
                'acesso': '',
                'chave': '',
            }

    else:
        print('Usuário não encontrado')
        return {
            'usuario': '',
            'acesso': '',
            'chave': '',
        }
