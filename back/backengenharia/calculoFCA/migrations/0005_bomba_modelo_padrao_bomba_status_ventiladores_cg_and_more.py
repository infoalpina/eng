# Generated by Django 5.0 on 2024-07-01 13:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calculoFCA', '0004_delete_departamento_delete_usuario'),
    ]

    operations = [
        migrations.AddField(
            model_name='bomba',
            name='modelo_padrao',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='bomba',
            name='status',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='ventiladores',
            name='CG',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='ventiladores',
            name='D1',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='ventiladores',
            name='Freq',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='ventiladores',
            name='Peso_pa',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='ventiladores',
            name='comprimento_das_pas',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='ventiladores',
            name='diametro_do_ventilador',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='ventiladores',
            name='material_das_pas',
            field=models.CharField(max_length=350, null=True),
        ),
        migrations.AddField(
            model_name='ventiladores',
            name='modelo_das_pas',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='ventiladores',
            name='modelo_padrao',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='ventiladores',
            name='numero_de_pas',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='ventiladores',
            name='rendimento_do_redultor',
            field=models.CharField(max_length=240, null=True),
        ),
        migrations.AddField(
            model_name='ventiladores',
            name='serie',
            field=models.CharField(max_length=240, null=True),
        ),
        migrations.AddField(
            model_name='ventiladores',
            name='status',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='ventiladores',
            name='diametro',
            field=models.CharField(max_length=350, null=True),
        ),
    ]