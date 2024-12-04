from __future__ import absolute_import, unicode_literals
import os
from celery import Celery

# Define o m�dulo de configura��es do Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backengenharia.settings')

# Cria a inst�ncia do Celery
app = Celery('backengenharia')

# Define a URL do broker Redis
app.conf.broker_url = 'redis://162.240.102.146:6379/0'


# Carrega configura��es do Django
app.config_from_object('django.conf:settings', namespace='CELERY')

# Descobre tarefas automaticamente
app.autodiscover_tasks()
