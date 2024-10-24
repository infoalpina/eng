from ..models import SelecaoPilaretes
from django.db.models import Q
from django.forms.models import model_to_dict


def updatePilaretes(id, Dados):
    try:
        # Tenta atualizar os pilaretes com o ID fornecido
        rows_updated = SelecaoPilaretes.objects.filter(id=id).update(
            AltPilAdcmPTorreCA19CAte4W20e4SGArPor2l=Dados.get(
                'AltPilAdcmPTorreCA19CAte4W20e4SGArPor2l'),
            AltPilAdcmPTorreCA19CAte4W20e4SGAPor3l=Dados.get(
                'AltPilAdcmPTorreCA19CAte4W20e4SGAPor3l'),
            AltPilAdcmPTorreCA19CAte4W20e4SGAPor4l=Dados.get(
                'AltPilAdcmPTorreCA19CAte4W20e4SGAPor4l'),
            AltPilAdcmCom5W20e5SGAPor2l=Dados.get(
                'AltPilAdcmCom5W20e5SGAPor2l'),
            AltPilAdcmCom5W20e5SGArPor3l=Dados.get(
                'AltPilAdcmCom5W20e5SGArPor3l'),
            AltPilAdcmCom5W20e5SGArPor4l=Dados.get(
                'AltPilAdcmCom5W20e5SGArPor4l'),
        )

        if rows_updated == 0:
            print("Nenhum registro foi atualizado. Verifique o ID fornecido.")
        else:
            print(f"{rows_updated} registro(s) atualizado(s) com sucesso.")
    except Exception as e:
        print(f"Erro ao atualizar pilaretes: {e}")

    return


def selectFilterPilaretes(id):
    todos_Dados_Principais = SelecaoPilaretes.objects.filter(id=id)
    return todos_Dados_Principais


def selectAllPilaretes():
    todos_Pilaretes = SelecaoPilaretes.objects.all()
    return todos_Pilaretes


def verificarCamposExistentesPilaretes(dados):
    try:
        print('dados', dados)
        todos_Pilaretes = SelecaoPilaretes.objects.filter(
            Q(AltPilAdcmPTorreCA19CAte4W20e4SGArPor2l=dados['AltPilAdcmPTorreCA19CAte4W20e4SGArPor2l']) &
            Q(AltPilAdcmPTorreCA19CAte4W20e4SGAPor3l=dados['AltPilAdcmPTorreCA19CAte4W20e4SGAPor3l']) &
            Q(AltPilAdcmPTorreCA19CAte4W20e4SGAPor4l=dados['AltPilAdcmPTorreCA19CAte4W20e4SGAPor4l']) &
            Q(AltPilAdcmCom5W20e5SGAPor2l=dados['AltPilAdcmCom5W20e5SGAPor2l']) &
            Q(AltPilAdcmCom5W20e5SGArPor3l=dados['AltPilAdcmCom5W20e5SGArPor3l']) &
            Q(AltPilAdcmCom5W20e5SGArPor4l=dados['AltPilAdcmCom5W20e5SGArPor4l'])
        )
        print('teste2pilaretes')

        if todos_Pilaretes.exists():
            return False
        return True
    except Exception as e:
        print(f"Ocorreu um erro: {e}")
        return False


def selectCreatePilaretes(dados):
    try:

        dadosCadastrados = SelecaoPilaretes.objects.create(
            idDadosPrincipais=dados['idDadosPrincipais_id'],
            AltPilAdcmPTorreCA19CAte4W20e4SGArPor2l=dados['AltPilAdcmPTorreCA19CAte4W20e4SGArPor2l'],
            AltPilAdcmPTorreCA19CAte4W20e4SGAPor3l=dados['AltPilAdcmPTorreCA19CAte4W20e4SGAPor3l'],
            AltPilAdcmPTorreCA19CAte4W20e4SGAPor4l=dados['AltPilAdcmPTorreCA19CAte4W20e4SGAPor4l'],
            AltPilAdcmCom5W20e5SGAPor2l=dados['AltPilAdcmCom5W20e5SGAPor2l'],
            AltPilAdcmCom5W20e5SGArPor3l=dados['AltPilAdcmCom5W20e5SGArPor3l'],
            AltPilAdcmCom5W20e5SGArPor4l=dados['AltPilAdcmCom5W20e5SGArPor4l'],
        )

        print("Dados cadastrados com sucesso:",
              model_to_dict(dadosCadastrados))

    except KeyError as e:
        print(f"Erro: Campo obrigatório {e} faltando nos dados fornecidos.")
    except Exception as e:
        print(f"Erro ao cadastrar dados: {e}")

    return
