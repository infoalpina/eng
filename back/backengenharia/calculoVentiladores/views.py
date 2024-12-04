from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST, require_http_methods
from .functions.calculaVentil import calculaVentil
from .functions.calculaVentil2 import calculaVentil2
import json


@csrf_exempt
@require_http_methods(["GET", "POST"])
def CalcularVentiladores(request):
    try:
        
        data = json.loads(request.body.decode('utf-8'))

        request_info = {
          'method': request.method,
          'path': request.path,
          'headers': dict(request.headers),
          'body': request.body.decode('utf-8'),
        }

        result = {'message': 'Data received successfully',
              'received_data': data, 'request_info': request_info}

        respostas = calculaVentil(result)

        return JsonResponse({'data': respostas})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)



@csrf_exempt
@require_http_methods(["GET", "POST"])
def CalcularVentiladores2(request):
    try:
        
        data = json.loads(request.body.decode('utf-8'))

        request_info = {
          'method': request.method,
          'path': request.path,
          'headers': dict(request.headers),
          'body': request.body.decode('utf-8'),
        }

        result = {'message': 'Data received successfully',
              'received_data': data, 'request_info': request_info}

        respostas = calculaVentil2(result)

        return JsonResponse({'data': respostas})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
