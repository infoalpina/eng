from django.urls import path
from .views import (
    receive_data,
    Create,
    Read,
    filtroLerTorres,
    Update,
    DeleteTorres,
    filterTowers,
    ReadProject,
    get_bomba,
    get_ventiladores,
    get_acionamentos,
    ReadMain,
    get_tubos,
    FilterTower,
    AnalyzingSecondPlain
)


urlpatterns = [
    path('receive_data/', receive_data, name='receive_data'),
    path('Create/', Create, name='Create'),
    path('Read/', Read, name='Read'),
    path('ReadMain/', ReadMain, name='ReadMain'),
    path('DeleteTorres/', DeleteTorres, name='DeleteTorres'),
    path('filtroLerTorres/<str:dados>/',
         filtroLerTorres, name='filtroLerTorres'),
    path('filtroUpdateTorres/', Update, name='filtroUpdateTorres'),
    path('filterTowers/', filterTowers, name='filterTowers'),
    path('ReadProject/', ReadProject, name='ReadProject'),
    path('get_bomba/', get_bomba, name='get_bomba'),
    path('get_ventiladores/', get_ventiladores, name='get_ventiladores'),
    path('get_acionamentos/', get_acionamentos, name='get_acionamentos'),
    path('get_tubos/', get_tubos, name='get_tubos'),
    path('FilterTower/', FilterTower, name='FilterTower'),
    path('AnalyzingSecondPlain/', AnalyzingSecondPlain,
         name='AnalyzingSecondPlain'),
    # path('get_specific_values_FCA/', get_specific_values_FCA, name='get_specific_values_FCA'),
]
