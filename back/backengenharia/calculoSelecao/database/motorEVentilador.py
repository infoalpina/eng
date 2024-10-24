from ..models import charsMoteVent
from django.db.models import Q
from django.forms.models import model_to_dict


def updateCharsMoteVent(id, Dados):
    try:
        # Tenta atualizar os dados do motor e ventilador com o ID fornecido
        rows_updated = charsMoteVent.objects.filter(id=id).update(
            TipoDeVentiladorC1=Dados.get('TipVentilC1'),
            TipoDeVentiladorC2=Dados.get('TipVentilC2'),
            DescricaoDoMotorEletricoC1=Dados.get('DescMotEletC1'),
            DescricaoDoMotorEletricoC2=Dados.get('DescMotEletC2'),
            tiposDePasDoVentiladorC1=Dados.get('tipPasVentilC1'),
            tiposDePasDoVentiladorC2=Dados.get('tipPasVentilC2'),
            tipoDeTransmissaoC1=Dados.get('tipoTransmC1'),
            tipoDeTransmissaoC2=Dados.get('tipoTransmC2'),
            rendimentoDeTransmissaoC1=Dados.get('rendTransmC1'),
            rendimentoDeTransmissaoC2=Dados.get('rendTransmC2'),
        )

        if rows_updated == 0:
            print("Nenhum registro foi atualizado. Verifique o ID fornecido.")
        else:
            print(f"{rows_updated} registro(s) atualizado(s) com sucesso.")
    except Exception as e:
        print(f"Erro ao atualizar dados do motor e ventilador: {e}")

    return



def selectFilterMotorEVentilador(id):
    todos_Dados_Principais = charsMoteVent.objects.filter(id=id)
    return todos_Dados_Principais


def selectAllCharsMoteVent():
    todos_Pilaretes = charsMoteVent.objects.all()
    return todos_Pilaretes


def verificarCamposExistentesCharsMoteVent(dados):
    todas_charsMoteVent = charsMoteVent.objects.filter(
        Q(TipoDeVentiladorC1=dados['TipVentilC1']) &
        Q(TipoDeVentiladorC2=dados['TipVentilC2']) &
        Q(DescricaoDoMotorEletricoC1=dados['DescMotEletC1']) &
        Q(DescricaoDoMotorEletricoC2=dados['DescMotEletC2']) &
        Q(tiposDePasDoVentiladorC1=dados['tipPasVentilC1']) &
        Q(tiposDePasDoVentiladorC2=dados['tipPasVentilC2']) &
        Q(tipoDeTransmissaoC1=dados['tipoTransmC1']) &
        Q(tipoDeTransmissaoC2=dados['tipoTransmC2']) &
        Q(rendimentoDeTransmissaoC1=dados['rendTransmC1']) &
        Q(rendimentoDeTransmissaoC2=dados['rendTransmC2'])
    )

    if todas_charsMoteVent.exists() and todas_charsMoteVent.exists():
        return False
    return True


def selectCreateCharsMoteVent(dados):
    print(dados)

    try:
        dadosCadastrados = charsMoteVent.objects.create(
            idDadosPrincipais_id=dados['idDadosPrincipais_id'],
            TipoDeVentiladorC1=dados['TipVentilC1'],
            TipoDeVentiladorC2=dados['TipVentilC2'],
            DescricaoDoMotorEletricoC1=dados['DescMotEletC1'],
            DescricaoDoMotorEletricoC2=dados['DescMotEletC2'],
            tiposDePasDoVentiladorC1=dados['tipPasVentilC1'],
            tiposDePasDoVentiladorC2=dados['tipPasVentilC2'],
            tipoDeTransmissaoC1=dados['tipoTransmC1'],
            tipoDeTransmissaoC2=dados['tipoTransmC2'],
            rendimentoDeTransmissaoC1=dados['rendTransmC1'],
            rendimentoDeTransmissaoC2=dados['rendTransmC2'],
        )
    except Exception as e:
        # Aqui você pode manipular a exceção da maneira que desejar
        print("Ocorreu um erro:", e)
        return None  # Ou qualquer outra ação que desejar tomar em caso de erro

    return dadosCadastrados
