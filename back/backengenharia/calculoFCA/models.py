from django.db import models


class FCA(models.Model):
    nome = models.CharField(max_length=3600)
    areas_transversais = models.FloatField()
    largura = models.FloatField()
    comprimento = models.FloatField()
    altura = models.FloatField()
    ativado = models.BooleanField(default=False)
    tower_is_standard = models.BooleanField(default=False)
    forcOuInd = models.CharField(max_length=3600)
    tipoDeCarcaca = models.CharField(max_length=255)

    class Meta:
        db_table = 'calculoFCA_fca'
        app_label = 'calculoFCA'


class Feixes(models.Model):
    id = models.AutoField(primary_key=True)
    id_torres = models.IntegerField(null=True, blank=True)
    modelo = models.CharField(max_length=3600, null=True)
    diam_extern_ent_tub = models.FloatField(null=True, blank=True)
    diam_intern_ent_tub = models.FloatField(null=True, blank=True)
    exp_parede = models.FloatField(null=True, blank=True)
    N_de_tub_hor = models.FloatField(null=True, blank=True)
    N_de_tub_hor_compact = models.FloatField(null=True, blank=True)
    N_de_tub_vert_6 = models.FloatField(null=True, blank=True)
    N_de_tub_vert_8 = models.FloatField(null=True, blank=True)
    N_de_tub_vert_10 = models.FloatField(null=True, blank=True)
    dist_ent_tub = models.FloatField(null=True, blank=True)
    condutib_termic_carbon = models.FloatField(null=True, blank=True)
    condutib_termic_inox = models.FloatField(null=True, blank=True)
    comprimento_dos_feixes = models.FloatField(null=True, blank=True)
    modelo_padrao = models.BooleanField(default=False)
    status = models.BooleanField(default=False)

    class Meta:
        db_table = 'calculoFCA_feixes'
        app_label = 'calculoFCA'


class Bomba(models.Model):
    id_FCA_id = models.IntegerField(null=True, blank=True)
    modelo = models.CharField(max_length=3600)
    vazao = models.FloatField()
    potencia = models.FloatField()
    pressao = models.FloatField(default=8.0)
    rotacao = models.FloatField(default=3500)
    modelo_padrao = models.BooleanField(default=False)
    status = models.FloatField(null=True)

    class Meta:
        db_table = 'calculoFCA_bomba'
        app_label = 'calculoFCA'


class Acionamento(models.Model):
    id_calculoFCA_fca = models.IntegerField(null=True, blank=True)
    tipo_de_acionamento_de_transmissao = models.CharField(
        max_length=255, null=True, blank=True)
    modelo = models.CharField(max_length=3600)
    taxa_de_reducao = models.FloatField(null=True, blank=True)
    potencia_do_motor = models.FloatField(null=True, blank=True)
    rotacao_do_motor = models.FloatField(null=True, blank=True)
    rotacao_do_ventilador = models.FloatField(null=True, blank=True)
    rendimento_do_redultor = models.FloatField(null=True, blank=True)
    motor_eletrico_tipo = models.CharField(
        max_length=255, null=True, blank=True)
    status = models.BooleanField(default=True)
    modelo_padrao = models.BooleanField(default=False)

    class Meta:
        db_table = 'calculoFCA_acionamentos'
        app_label = 'calculoFCA'


class Ventiladores(models.Model):
    id_FCA_id = models.IntegerField(null=True, blank=True)
    modelo = models.CharField(max_length=3600)
    diametro_do_ventilador = models.FloatField(null=True)
    comprimento_das_pas = models.FloatField(null=True)
    material_das_pas = models.CharField(max_length=350, null=True)
    material_dos_cubos = models.CharField(max_length=350, null=True)
    numero_de_pas = models.FloatField(null=True)
    serie = models.CharField(max_length=240, null=True)
    modelo_das_pas = models.FloatField(null=True)
    diametro = models.CharField(max_length=350, null=True)
    modelo_padrao = models.BooleanField(default=False)
    status = models.FloatField(null=True)
    n_de_ventilador_por_celula = models.FloatField(null=True)
    A0 = models.FloatField()
    A1 = models.FloatField()
    A2 = models.FloatField()
    A3 = models.FloatField()

    class Meta:
        db_table = 'calculoFCA_ventiladores'
        app_label = 'calculoFCA'
