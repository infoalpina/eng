from __future__ import absolute_import, unicode_literals
import os
from celery import Celery

# Define o módulo de configurações do Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backengenharia.settings')

# Cria a instância do Celery
app = Celery('backengenharia')

# Carrega configurações do Django
app.config_from_object('django.conf:settings', namespace='CELERY')

# Descobre tarefas automaticamente
app.autodiscover_tasks()
