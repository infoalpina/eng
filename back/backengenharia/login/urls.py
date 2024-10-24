from django.urls import path
from .views import resgatar_dados_login

urlpatterns = [
    path('access/', resgatar_dados_login, name='resgatar_dados_login'),
]
