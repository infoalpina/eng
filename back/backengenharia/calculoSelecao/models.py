from django.db import models
from django.db.utils import ProgrammingError


class SelecaoDadosPrincipais(models.Model):
    Codigo = models.CharField(max_length=64, null=True)
    Serie = models.CharField(max_length=64, null=True)
    Tamanho = models.FloatField(null=True)
    VarCont = models.CharField(max_length=64, null=True)
    Estrutura = models.CharField(max_length=64, null=True)
    FreqRedeElet = models.FloatField(null=True)
    CompDasPas = models.FloatField(null=True)
    DiamVent = models.FloatField(null=True)
    AreaSecTrans = models.FloatField(null=True)
    ASP2Lados = models.CharField(max_length=64, null=True)
    ASP3Lados = models.CharField(max_length=64, null=True)
    INSASP4Lados = models.CharField(max_length=64, null=True)
    NVent = models.IntegerField(default=True)
    AltEntAgua = models.CharField(max_length=64, null=True)
    NumPasVentClasse1 = models.IntegerField(null=True)
    RotVentC1 = models.FloatField(null=True)
    PotMotEletC1 = models.FloatField(null=True)
    RotMotEletC1 = models.FloatField(null=True)
    DiamVentPadraoC1 = models.FloatField(null=True)
    NPasVentC2 = models.FloatField(null=True)
    RotDoVentC2 = models.FloatField(null=True)
    PotMotEletC2 = models.FloatField(null=True)
    RotMotEletC2 = models.CharField(max_length=64, null=True)  # Pode ser nulo
    DiamVentPadraoC2 = models.FloatField(null=True)
    status = models.BooleanField(default=True)

    class Meta:
        db_table = 'calculoSelecao_SelecaoDadosPrincipais'
        app_label = 'calculoSelecao'


class SelecaoPilaretes(models.Model):
    idDadosPrincipais = models.IntegerField(null=True)
    AltPilAdcmPTorreCA19CAte4W20e4SGArPor2l = models.IntegerField(null=True)
    AltPilAdcmPTorreCA19CAte4W20e4SGAPor3l = models.FloatField(null=True)
    AltPilAdcmPTorreCA19CAte4W20e4SGAPor4l = models.FloatField(null=True)
    AltPilAdcmCom5W20e5SGAPor2l = models.FloatField(null=True)
    AltPilAdcmCom5W20e5SGArPor3l = models.FloatField(null=True)
    AltPilAdcmCom5W20e5SGArPor4l = models.FloatField(null=True)

    class Meta:
        db_table = 'Selecao_SelecaoPilaretes'
        app_label = 'calculoSelecao'


class SelecaoCamadasDeEnchimento(models.Model):
    idDadosPrincipais = models.IntegerField(null=True)
    TorresComA19Nmax = models.CharField(
        max_length=64, null=True)  # Pode ser nulo
    TorresComA19Nmin = models.FloatField(null=True)
    TorresComSGeW20Nmax = models.FloatField(null=True)
    TorresComSGeW20Nmin = models.FloatField(null=True)
    TorresComRTNmax = models.CharField(
        max_length=64, null=True)  # Pode ser nulo
    TorresComRTNmin = models.FloatField(null=True)
    TorresComSGCNmax = models.FloatField(null=True)
    TorresComSGCNmin = models.FloatField(null=True)

    class Meta:
        db_table = 'Selecao_SelecaoCamadasDeEnchimento'
        app_label = 'calculoSelecao'


class charsTorre(models.Model):
    idDadosPrincipais_id = models.IntegerField(null=True)
    PressMaxEnt = models.FloatField(null=True)
    TipCuboVentil = models.FloatField(null=True)
    LargCell = models.FloatField(null=True)
    CompCell = models.FloatField(null=True)
    TipEstrtut = models.CharField(max_length=64, null=True)
    RevestLat = models.CharField(max_length=64, null=True)
    TipDistrib = models.CharField(max_length=64, null=True)

    class Meta:
        db_table = 'Selecao_charsTorre'
        app_label = 'calculoSelecao'


class charsEnchimento(models.Model):
    idDadosPrincipais_id = models.IntegerField(null=True)
    doisSGW202ou3A192l = models.FloatField(null=True)
    tresSGW204A192l = models.FloatField(null=True)
    quatroou5SGW20ou5A192l = models.FloatField(null=True)
    doisSGW202ou3A193l = models.FloatField(null=True)
    tresSGW204A193l = models.FloatField(null=True)
    quatroou5SGW20ou5A193l = models.FloatField(null=True)
    doisSGW202ou3A194l = models.FloatField(null=True)
    tresSGW204A194l = models.FloatField(null=True)
    quatroou5SGW20ou5A194l = models.FloatField(null=True)

    class Meta:
        db_table = 'Selecao_charsEnchimento'
        app_label = 'calculoSelecao'


class charsMoteVent(models.Model):
    idDadosPrincipais_id = models.IntegerField(null=True)
    TipoDeVentiladorC1 = models.CharField(max_length=64, null=True)
    TipoDeVentiladorC2 = models.CharField(max_length=64, null=True)
    DescricaoDoMotorEletricoC1 = models.CharField(max_length=64, null=True)
    DescricaoDoMotorEletricoC2 = models.CharField(max_length=64, null=True)
    tiposDePasDoVentiladorC1 = models.CharField(max_length=64, null=True)
    tiposDePasDoVentiladorC2 = models.CharField(max_length=64, null=True)
    tipoDeTransmissaoC1 = models.CharField(max_length=64, null=True)
    tipoDeTransmissaoC2 = models.CharField(max_length=64, null=True)
    rendimentoDeTransmissaoC1 = models.FloatField(null=True)
    rendimentoDeTransmissaoC2 = models.FloatField(null=True)

    class Meta:
        db_table = 'Selecao_charsMotoreVentilador'
        app_label = 'calculoSelecao'


class CharsCamadasDeEnchimento(models.Model):
    nome = models.CharField(max_length=255, null=True, blank=True)
    id_calculoSelecao_SelecaoDadosPrincipais = models.IntegerField(null=True)
    A1 = models.DecimalField(
        max_digits=20, decimal_places=10, null=True, blank=True)
    A2 = models.DecimalField(
        max_digits=20, decimal_places=10, null=True, blank=True)
    A3 = models.DecimalField(
        max_digits=20, decimal_places=10, null=True, blank=True)
    A4 = models.DecimalField(
        max_digits=20, decimal_places=10, null=True, blank=True)
    A5 = models.DecimalField(
        max_digits=20, decimal_places=10, null=True, blank=True)
    A6 = models.DecimalField(
        max_digits=20, decimal_places=10, null=True, blank=True)
    A7 = models.DecimalField(
        max_digits=20, decimal_places=10, null=True, blank=True)
    A8 = models.DecimalField(
        max_digits=20, decimal_places=10, null=True, blank=True)
    A9 = models.DecimalField(
        max_digits=20, decimal_places=10, null=True, blank=True)
    A10 = models.DecimalField(
        max_digits=20, decimal_places=10, null=True, blank=True)
    Codigo = models.CharField(
        max_length=255, null=True, blank=True)
    condicoesDeEntrada = models.CharField(max_length=64, null=True)
    ladosEnchimento = models.CharField(max_length=64, null=True)
    Valor = models.DecimalField(
        max_digits=20, decimal_places=10, null=True, blank=True)

    class Meta:
        db_table = 'chars_camadas_de_enchimento'
        app_label = 'calculoSelecao'
