from ..models import charsTorre
from django.db.models import Q


def updateCharsTorre(id, Dados):
    try:
        # Tenta atualizar os dados da torre com o ID fornecido
        rows_updated = charsTorre.objects.filter(id=id).update(
            PressMaxEnt=Dados.get('PressMaxEnt'),
            TipCuboVentil=Dados.get('TipCuboVentil'),
            LargCell=Dados.get('LargCell'),
            CompCell=Dados.get('CompCell'),
            TipEstrtut=Dados.get('TipEstrtut'),
            RevestLat=Dados.get('RevestLat'),
            TipDistrib=Dados.get('TipDistrib'),
        )

        if rows_updated == 0:
            print("Nenhum registro foi atualizado. Verifique o ID fornecido.")
        else:
            print(f"{rows_updated} registro(s) atualizado(s) com sucesso.")
    except Exception as e:
        print(f"Erro ao atualizar dados da torre: {e}")

    return


def selectFilterCharsTorre(id):
    todos_Dados_Principais = charsTorre.objects.filter(id=id)
    return todos_Dados_Principais


def selectAllCharsTorre():
    todos_Pilaretes = charsTorre.objects.all()
    return todos_Pilaretes


def verificarCamposExistentesCharsTorre(dados):
    todas_charsTorre = charsTorre.objects.filter(
        Q(PressMaxEnt=dados['PressMaxEnt']) &
        Q(TipCuboVentil=dados['TipCuboVentil']) &
        Q(LargCell=dados['LargCell']) &
        Q(CompCell=dados['CompCell']) &
        Q(TipEstrtut=dados['TipEstrtut']) &
        Q(RevestLat=dados['RevestLat']) &
        Q(TipDistrib=dados['TipDistrib'])
    )

    if todas_charsTorre.exists() and todas_charsTorre.exists():
        return False
    return True


def selectCreateCharsTorre(dados):
    try:
        dadosCadastrados = charsTorre.objects.create(
            idDadosPrincipais_id=dados['idDadosPrincipais_id'],
            PressMaxEnt=dados['PressMaxEnt'],
            TipCuboVentil=dados['TipCuboVentil'],
            LargCell=dados['LargCell'],
            CompCell=dados['CompCell'],
            TipEstrtut=dados['TipEstrtut'],
            RevestLat=dados['RevestLat'],
            TipDistrib=dados['TipDistrib'],
        )
    except Exception as e:
        # Aqui você pode manipular a exceção da maneira que desejar
        print("Ocorreu um erro:", e)
        return None  # Ou qualquer outra ação que desejar tomar em caso de erro

    return dadosCadastrados
