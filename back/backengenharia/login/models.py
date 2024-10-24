# models.py
from django.db import models


class Usuario(models.Model):
    Nome = models.CharField(max_length=255)  # Mudança para 'Nome'
    Chapa = models.CharField(max_length=255)  # Mudança para 'Chapa'
    Horario_do_almoço = models.TimeField()  # Mantido como 'Horario_do_almoço'
    # Mudança para 'Departamento'
    Departamento = models.CharField(max_length=255)
    PN = models.CharField(max_length=255, null=True,
                          blank=True)  # Mudança para 'PN'
    # Mudança para 'Gestor'
    Gestor = models.CharField(max_length=255, null=True, blank=True)
    CPF = models.CharField(max_length=255, null=True,
                           blank=True)  # Mudança para 'CPF'
    rotaDaFoto = models.CharField(max_length=255)  # Mantido como 'rotaDaFoto'
    # Mudança para 'Usuario'
    Usuario = models.CharField(max_length=255, null=True, blank=True)
    Senha = models.CharField(max_length=255, null=True,
                             blank=True)  # Mantido como 'Senha'
    Email = models.CharField(max_length=255)  # Mudança para 'Email'
    status = models.BooleanField(default=True)  # Mantido como 'status'
    GestorCheck = models.BooleanField(
        default=False)  # Mudança para 'GestorCheck'
    EngenhariaComumEngenharia = models.BooleanField(
        default=False)  # Mudança para 'EngenhariaComumEngenharia'
    Engenhariaengenharia = models.BooleanField(
        default=False)  # Mantido como 'Engenhariaengenharia'
    OuvidoriaAdministraoRH = models.BooleanField(
        default=False)  # Mudança para 'OuvidoriaAdministraoRH'
    TITOOLSTI = models.BooleanField(default=False)  # Mantido como 'TITOOLSTI'
    ReembolsoComumreembolso = models.BooleanField(
        default=False)  # Mudança para 'ReembolsoComumreembolso'
    ReembolsoGestorreembolso = models.BooleanField(
        default=False)  # Mudança para 'ReembolsoGestorreembolso'
    ReembolsoContabilidadereembolso = models.BooleanField(
        default=False)  # Mudança para 'ReembolsoContabilidadereembolso'
    ReembolsoAdministraoreembolso = models.BooleanField(
        default=False)  # Mudança para 'ReembolsoAdministraoreembolso'
    id_departamento = models.BigIntegerField()  # Mantido como 'id_departamento'
    created_at = models.DateTimeField(
        auto_now_add=True)  # Mantido como 'created_at'
    updated_at = models.DateTimeField(
        auto_now=True)  # Mantido como 'updated_at'

    class Meta:
        db_table = 'users'
        app_label = 'login'
