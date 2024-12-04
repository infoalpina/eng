#!/bin/bash

# Diretório de logs
LOG_DIR="/var/www/html/eng/engenharia/logs"
mkdir -p "$LOG_DIR"

# Encerrar o servidor frontend
PID_FRONTEND=$(ps aux | grep 'npm run frontend' | grep -v grep | awk '{print $2}')
if [ -n "$PID_FRONTEND" ]; then
    kill -9 "$PID_FRONTEND"
    echo "Servidor frontend (PID $PID_FRONTEND) encerrado com sucesso."
else
    echo "Servidor frontend não encontrado."
fi

# Encerrar o servidor Celery
PID_CELERY=$(ps aux | grep 'celery worker' | grep -v grep | awk '{print $2}')
if [ -n "$PID_CELERY" ]; then
    kill -9 "$PID_CELERY"
    echo "Servidor Celery (PID $PID_CELERY) encerrado com sucesso."
else
    echo "Servidor Celery não encontrado."
fi

# Encerrar o servidor backend (Gunicorn)
PID_BACKEND=$(ps aux | grep 'gunicorn' | grep -v grep | awk '{print $2}')
if [ -n "$PID_BACKEND" ]; then
    kill -9 "$PID_BACKEND"
    echo "Servidor backend (PID $PID_BACKEND) encerrado com sucesso."
else
    echo "Servidor backend não encontrado."
fi

echo "Todos os servidores foram encerrados com sucesso."
