from django.db import models


class Ventiladores(models.Model):
    nome_do_ventilador = models.CharField(max_length=100, null=True)
    numero_de_pas = models.IntegerField(default=0, null=True)
    PSI = models.FloatField(null=True)
    FI = models.FloatField(null=True)
    resposta = models.FloatField(null=True)
    angulo_da_pa = models.FloatField(null=True)

    class Meta:
        db_table = 'calculoVentiladores_ventiladores'
        app_label = 'calculoVentiladores'


class relacao_d_delta(models.Model):
    D = models.IntegerField(null=True)
    DELTA = models.FloatField(null=True)

    class Meta:
        db_table = 'relacao_d_delta'
        app_label = 'calculoVentiladores'


class DC_DV(models.Model):
    n_de_pas = models.IntegerField(null=True)
    relacao_dc_dv = models.FloatField(null=True)
    resultado = models.FloatField(null=True)

    class Meta:
        db_table = 'DC_DV'
        app_label = 'calculoVentiladores'


class HD_DA(models.Model):
    relcao_hd_da = models.FloatField(null=True)
    C = models.FloatField(null=True)

    class Meta:
        db_table = 'HD_DA'
        app_label = 'calculoVentiladores'


class PWL(models.Model):
    id = models.AutoField(primary_key=True)
    n_de_pas = models.IntegerField(null=True, blank=True)
    nome = models.CharField(max_length=255, null=True, blank=True)
    resultado = models.FloatField(null=True, blank=True)

    class Meta:
        db_table = 'PWL'
        app_label = 'calculoVentiladores'
