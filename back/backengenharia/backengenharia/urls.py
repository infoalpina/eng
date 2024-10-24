# seu_projeto/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('backengenharia/admin/', admin.site.urls),
    path('backengenharia/calculoFCA/', include('calculoFCA.urls')),
    path('backengenharia/login/', include('login.urls')),
    path('backengenharia/Selecao/', include('calculoSelecao.urls')),
    path('backengenharia/calculoVentiladores/',
         include('calculoVentiladores.urls')),
]
