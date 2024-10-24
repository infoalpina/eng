#!/bin/bash

NAME="backengenharia"                               # Nome do projeto Django
DJANGODIR=/var/www/html/sistemaengenharia/back/backengenharia             # Diretório do seu projeto Django
SOCKFILE=/var/www/html/sistemaengenharia/back/backengenharia/gunicorn.sock  # Usaremos um socket Unix para comunicação

USER=projetosti                                       # O nome do usuário para executar as aplicações gunicorn
GROUP=projetosti                                      # O nome do grupo para executar as aplicações gunicorn
NUM_WORKERS=3                                        # Quantidade de processos de trabalhadores Gunicorn para iniciar

echo "Starting $NAME as `whoami`"

# Ativar o ambiente virtual
cd $DJANGODIR
source venv/bin/activate
export DJANGO_SETTINGS_MODULE=backengenharia.settings
export PYTHONPATH=$DJANGODIR:$PYTHONPATH

# Crie o diretório do pid se ele não existir
RUNDIR=$(dirname $SOCKFILE)
test -d $RUNDIR || mkdir -p $RUNDIR

# Inicie Gunicorn
exec gunicorn ${NAME}.wsgi:application \
  --name $NAME \
  --workers $NUM_WORKERS \
  --user=$USER \
  --group=$GROUP \
  --bind=unix:$SOCKFILE \
  --log-level=debug \
  --log-file=-
