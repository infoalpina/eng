from django.urls import path
from .views import *

urlpatterns = [
    path('CalcularVentiladores/', CalcularVentiladores, name='ReadNindice'),
    path('CalcularVentiladores2/', CalcularVentiladores2, name='ReadNindice2'),
]
