from django.urls import path
from .views import ReadNindice
from .views import Read
from .views import Create
from .views import Update
from .views import Delete
from .views import filterTowers
from .views import ReadAll
from .views import ReadEnchimento
from .views import CalculoSelecao

urlpatterns = [
    path('ReadNindice/', ReadNindice, name='ReadNindice'),
    path('ReadAll/', ReadAll, name='ReadAll'),
    path('Read/', Read, name='Read'),
    path('Create/', Create, name='Create'),
    path('Update/', Update, name='Update'),
    path('Delete/', Delete, name='Delete'),
    path('filterTowers/', filterTowers, name='filterTowers'),
    path('ReadEnchimento/', ReadEnchimento, name='ReadEnchimento'),
    path('CalculoSelecao/', CalculoSelecao, name='CalculoSelecao'),
]
