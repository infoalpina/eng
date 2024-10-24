from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST, require_http_methods
import json
from django.shortcuts import render
from .functions.verify_login import verify_login

# Create your views here.


@csrf_exempt
@require_http_methods(["GET", "POST"])
def resgatar_dados_login(request):
    try:
        # Extrair dados relevantes do objeto de solicitação
        metodo = request.method
        parametros = request.POST.dict() if request.method == 'POST' else request.GET.dict()
        data = json.loads(request.body.decode('utf-8'))
        result = verify_login(data)

        print(result)
        # Retornar os dados extraídos como uma resposta JSON, incluindo a mensagem "tudo ok até agora"
        return JsonResponse(result)
    except json.JSONDecodeError as e:
        # Lida com erros de decodificação JSON
        return JsonResponse({'error': 'Invalid JSON format in the request body'}, status=400)
    except Exception as e:
        # Lida com outros erros e imprime detalhes no console
        print(f"Erro na view 'updateTorres': {str(e)}")
        return JsonResponse({'error': str(e)}, status=500)
