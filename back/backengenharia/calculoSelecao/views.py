from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
from .functions.lerNindice import lerNindice
from .functions.CreateSelecao import CreateSelecao
from .functions.ReadSelecao import ReadSelecao
from .functions.ReadSelecaoAll import ReadSelecaoAll
from .functions.UpdateSelecao import UpdateSelecao
from .functions.searchTowers import searchTowers
from .functions.DisabledSelecao import DisabledSelecao
from .functions.ReadAllEnchimento import ReadAllEnchimento
from .functions.calculoSelecao import calculoSelecao


@csrf_exempt
@require_http_methods(["GET", "POST"])
def CalculoSelecao(request):
    try:
        if request.method == 'POST':
            data = json.loads(request.body.decode('utf-8'))
            calculoSelecao(data)

            return JsonResponse({'value': data}, status=200)

        else:
            return JsonResponse({'error': 'Invalid HTTP method'}, status=405)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)
    except KeyError as e:
        return JsonResponse({'error': f'Missing key: {str(e)}'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET", "POST"])
def filterTowers(request):
    try:
        data = json.loads(request.body.decode('utf-8'))

        # Verifique se os campos estão presentes
        id = data.get('id', '')
        nomeDaTorre = data.get('nomeDaTorre', '')
        nde = data['nde']
        nate = data['nate']

        if id == '' and nomeDaTorre == '':
            variaveis = ReadSelecao(nde, nate)
            return JsonResponse({'data': [variaveis]}, status=200)
        else:
            variaveis = searchTowers(data)
            return JsonResponse({'data': [variaveis]}, status=200)

    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)
    except KeyError as e:
        return JsonResponse({'error': f'Missing key: {str(e)}'}, status=400)
    except Exception as e:
        # Se ocorrer um erro, retorna uma resposta de erro
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def Create(request):
    try:
        data = json.loads(request.body.decode('utf-8'))
        print('data', data)

        respost = CreateSelecao(data)

        request_info = {
            'method': request.method,
            'path': request.path,
            'headers': dict(request.headers),
            'body': request.body.decode('utf-8'),
        }

        result = {'message': 'Data received successfully',
                  'received_data': respost, 'request_info': request_info}

        return JsonResponse({'data': result})
    except json.JSONDecodeError:
        return JsonResponse({'mensagem': 'Dados JSON inválidos'}, status=400)
    except Exception as e:
        return JsonResponse({'mensagem': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def Update(request):
    try:
        data = json.loads(request.body.decode('utf-8'))

        respost = UpdateSelecao(data)

        request_info = {
            'method': request.method,
            'path': request.path,
            'headers': dict(request.headers),
            'body': request.body.decode('utf-8'),
        }

        result = {'message': 'Data received successfully',
                  'received_data': respost, 'request_info': request_info}

        return JsonResponse({'data': result})
    except json.JSONDecodeError:
        return JsonResponse({'mensagem': 'Dados JSON inválidos'}, status=400)
    except Exception as e:
        return JsonResponse({'mensagem': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def Delete(request):
    try:
        data = json.loads(request.body.decode('utf-8'))

        respost = DisabledSelecao(data)

        request_info = {
            'method': request.method,
            'path': request.path,
            'headers': dict(request.headers),
            'body': request.body.decode('utf-8'),
        }

        result = {'message': 'Data received successfully',
                  'received_data': respost, 'request_info': request_info}

        return JsonResponse({'data': result})
    except json.JSONDecodeError:
        return JsonResponse({'mensagem': 'Dados JSON inválidos'}, status=400)
    except Exception as e:
        return JsonResponse({'mensagem': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET", "POST"])
def ReadNindice(request):
    variaveis = lerNindice()
    return JsonResponse({'data': variaveis})


@csrf_exempt
@require_http_methods(["GET", "POST"])
def Read(request):
    try:

        # Valor padrão de 0 se nde não estiver presente
        nde = int(request.GET.get('nde'))
        # Valor padrão de 10 se nate não estiver presente
        nate = int(request.GET.get('nate'))
        # Aqui você chama a função que obtém os dados necessários
        variaveis = ReadSelecao(nde, nate)

        # Retorna os dados em formato JSON
        return JsonResponse({'data': variaveis})
    except Exception as e:
        # Se ocorrer um erro, retorna uma resposta de erro
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET", "POST"])
def ReadAll(request):
    try:

        # Valor padrão de 0 se nde não estiver presente
        rec = int(request.GET.get('rec'))
        variaveis = ReadSelecaoAll(rec)

        # Retorna os dados em formato JSON
        return JsonResponse({'data': variaveis})
    except Exception as e:
        # Se ocorrer um erro, retorna uma resposta de erro
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET", "POST"])
def ReadEnchimento(request):
    try:
        if request.method == 'GET':
            variaveis = ReadAllEnchimento()
            # Retorna os dados em formato JSON
            return JsonResponse({'data': variaveis})

        elif request.method == 'POST':
            # Lógica para processar dados POST, se necessário
            return JsonResponse({'message': 'Método POST não implementado'})

    except Exception as e:
        # Se ocorrer um erro, retorna uma resposta de erro
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET", "POST"])
def filtroTorres(request):
    # variaveis = ReadSelecao()
    return JsonResponse({'data': 'variaveis'})
