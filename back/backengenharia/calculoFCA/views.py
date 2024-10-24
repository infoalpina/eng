from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST, require_http_methods
import json
from .functions.calculo_main import calculo_main
from .functions.cadastroTorres import cadastroTorres
from .functions.recoverBombas import recoverBombas
from .functions.recoverTubos import recoverTubos
from .functions.recoverVentiladores import recoverVentiladores
from celery.result import AsyncResult
from .functions.lerTorres import lerTorres
from .functions.lerTorresFilter import lerTorresFilter
from .functions.editarTorres import editarTorres
from .functions.desativarTorres import desativarTorres
from .functions.editarTorres import editarTorres
from .functions.searchTowers import searchTowers
from .functions.lerTorresEspecificas import lerTorresEspecificas
from .functions.lerTorresMain import lerTorresMain
from .functions.recoverAcionamentos import recoverAcionamentos
from . functions.filterValuesTower import filterValuesTower


@csrf_exempt
@require_http_methods(["GET", "POST"])
def DeleteTorres(request):
    try:
        data = json.loads(request.body.decode('utf-8'))
        result = {'message': 'Data received successfully',
                  'received_data': data}
        desativarTorres(data)

        return JsonResponse(result)
    except json.JSONDecodeError as e:
        return JsonResponse({'error': 'Invalid JSON format in the request body'}, status=400)
    except Exception as e:
        print(f"Erro na view 'DeleteTorres': {str(e)}")
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET", "POST"])
def filtroLerTorres(request, dados):
    try:
        variaveis = lerTorresFilter(request, dados)
        return JsonResponse({'data': variaveis})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET", "POST"])
def FilterTower(request):
    try:
        data = json.loads(request.body.decode('utf-8'))
        valores = filterValuesTower(data)
        valores_lista = list(valores.values('id', 'nome'))
        result_list = []
        for dados in valores_lista:
            value = f"{dados['nome']} - {dados['id']}"
            result_list.append(value)
        return JsonResponse({'data': result_list})

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET", "POST"])
def receive_data(request):
    data = json.loads(request.body.decode('utf-8'))
    request_info = {
        'method': request.method,
        'path': request.path,
        'headers': dict(request.headers),
        'body': request.body.decode('utf-8'),
    }

    result = {
        'message': 'Data received successfully',
        'received_data': data,
        'request_info': request_info
    }

    # Enfileirar a tarefa assíncrona com o Celery
    task = calculo_main.delay(result)

    # Retornar o ID da tarefa para que o cliente possa consultar o status mais tarde
    return JsonResponse({
        'message': 'processando dados',
        'task_id': task.id
    })


@csrf_exempt
@require_http_methods(["GET", "POST"])
def AnalyzingSecondPlain(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)

        print('POST data:', data)  # Imprime os dados recebidos no POST

        # Verifica se 'task_id' está presente nos dados
        task_id = data.get('task_id', None)
        if task_id:
            print('task_id:', task_id)
        else:
            print('task_id not provided')

        result = AsyncResult(task_id)
        print('result.result', result.result)

        if result.ready():  # Se a tarefa estiver concluída
            return JsonResponse({
                'message': 'A tarefa terminou de ser processada',
                'result': result.result,  # Aqui estão os resultados da tarefa
                'Analyzingbool': True
            })
        else:
            return JsonResponse({
                'message': 'A tarefa esta sendo processada',
                'Analyzingbool': False,
                'result': None  # Nenhum resultado ainda
            })

    elif request.method == 'GET':
        data = request.GET
        print('GET data:', data)  # Imprime os dados recebidos no GET

        extracted_info = {
            'some_value': data.get('some_key', 'default_value'),
        }

        # Retorna a resposta para a requisição GET
        return JsonResponse({
            'message': 'Data retrieved successfully',
            'extracted_info': extracted_info,
        })

    # Se não for GET nem POST, retorna um erro 405
    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
@require_http_methods(["GET", "POST"])
def Create(request):
    data = json.loads(request.body.decode('utf-8'))

    request_info = {
        'method': request.method,
        'path': request.path,
        'headers': dict(request.headers),
        'body': request.body.decode('utf-8'),
    }

    variaveis = cadastroTorres(data)

    result = {'message': 'Data received successfully',
              'received_data': variaveis, 'request_info': request_info}

    return JsonResponse({'data': result})


@csrf_exempt
@require_http_methods(["GET", "POST"])
def Update(request):
    data = json.loads(request.body.decode('utf-8'))

    request_info = {
        'method': request.method,
        'path': request.path,
        'headers': dict(request.headers),
        'body': request.body.decode('utf-8'),
    }

    validationUpdate = editarTorres(data)

    result = {'message': 'Data received successfully',
              'received_data': validationUpdate, 'request_info': request_info}

    return JsonResponse({'data': validationUpdate})


@csrf_exempt
@require_http_methods(["GET", "POST"])
def filterTowers(request):
    try:
        data = json.loads(request.body.decode('utf-8'))
        id = data.get('id', '')
        nomeDaTorre = data.get('nomeDaTorre', '')
        nde = data['nde']
        nate = data['nate']

        if id == '' and nomeDaTorre == '':
            variaveis = lerTorresMain(nde, nate)
            return JsonResponse({'data': [variaveis]}, status=200)
        else:
            variaveis = searchTowers(data)
            return JsonResponse({'data': [variaveis]}, status=200)

    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)
    except KeyError as e:
        return JsonResponse({'error': f'Missing key: {str(e)}'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET", "POST"])
def ReadMain(request):
    try:
        nde = int(request.GET.get('nde'))
        nate = int(request.GET.get('nate'))
        variaveis = lerTorresMain(nde, nate)
        return JsonResponse({'data': variaveis})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET", "POST"])
def Read(request):
    try:
        nde = int(request.GET.get('nde'))
        # Valor padrão de 10 se nate não estiver presente
        nate = int(request.GET.get('nate'))
        # Aqui você chama a função que obtém os dados necessários
        variaveis = lerTorres(nde, nate)

        # Retorna os dados em formato JSON
        return JsonResponse({'data': variaveis})
    except Exception as e:
        # Se ocorrer um erro, retorna uma resposta de erro
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET", "POST"])
def ReadProject(request):

    variaveis = lerTorresEspecificas()

    return JsonResponse({'data': variaveis})


@csrf_exempt
@require_http_methods(["GET", "POST"])
def get_tubos(request):

    data = json.loads(request.body.decode('utf-8'))

    request_info = {
        'method': request.method,
        'path': request.path,
        'headers': dict(request.headers),
        'body': request.body.decode('utf-8'),
    }

    result = {'message': 'Data received successfully',
              'received_data': data, 'request_info': request_info}

    tubos = recoverTubos(result)

    return JsonResponse({'data': tubos})


@csrf_exempt
@require_http_methods(["GET", "POST"])
def get_bomba(request):
    data = json.loads(request.body.decode('utf-8'))

    request_info = {
        'method': request.method,
        'path': request.path,
        'headers': dict(request.headers),
        'body': request.body.decode('utf-8'),
    }

    result = {'message': 'Data received successfully',
              'received_data': data, 'request_info': request_info}

    bombas = recoverBombas(result)

    return JsonResponse({'data': bombas})


@csrf_exempt
@require_http_methods(["GET", "POST"])
def get_acionamentos(request):
    data = json.loads(request.body.decode('utf-8'))

    request_info = {
        'method': request.method,
        'path': request.path,
        'headers': dict(request.headers),
        'body': request.body.decode('utf-8'),
    }

    result = {'message': 'Data received successfully',
              'received_data': data, 'request_info': request_info}

    acionamentos = recoverAcionamentos(result)

    return JsonResponse({'data': acionamentos})


@csrf_exempt
@require_http_methods(["GET", "POST"])
def get_ventiladores(request):
    data = json.loads(request.body.decode('utf-8'))

    request_info = {
        'method': request.method,
        'path': request.path,
        'headers': dict(request.headers),
        'body': request.body.decode('utf-8'),
    }

    result = {'message': 'Data received successfully',
              'received_data': data, 'request_info': request_info}

    ventiladores = recoverVentiladores(result)

    return JsonResponse({'data': ventiladores})
