# backengenharia/__init__.py

from __future__ import absolute_import, unicode_literals

# Importa o Celery
from .celery import app as celery_app

__all__ = ('celery',)