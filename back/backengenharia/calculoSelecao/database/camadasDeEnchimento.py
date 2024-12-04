from ..models import SelecaoCamadasDeEnchimento
from django.db.models import Q
from django.forms.models import model_to_dict


def updateCharsCamadasDeEnchimento(id, Dados):
    try:
        rows_updated = SelecaoCamadasDeEnchimento.objects.filter(id=id).update(
            TorresComA19Nmax=Dados.get('TorresComA19Nmax'),
            TorresComA19Nmin=Dados.get('TorresComA19Nmin'),
            TorresComSGeW20Nmax=Dados.get('TorresComSGeW20Nmax'),
            TorresComSGeW20Nmin=Dados.get('TorresComSGeW20Nmin'),
            TorresComRTNmax=Dados.get('TorresComRTNmax'),
            TorresComRTNmin=Dados.get('TorresComRTNmin'),
            TorresComSGCNmax=Dados.get('TorresComSGCNmax'),
            TorresComSGCNmin=Dados.get('TorresComSGCNmin'),
        )

        if rows_updated == 0:
            print("Nenhum registro foi atualizado. Verifique o ID fornecido.")
        else:
            print(f"{rows_updated} registro(s) atualizado(s) com sucesso.")
    except Exception as e:
        print(f"Erro ao atualizar camadas de enchimento: {e}")

    return


def selectFilterCamadasDeEnchimento(id):
    todos_Dados_Principais = SelecaoCamadasDeEnchimento.objects.filter(id=id)
    return todos_Dados_Principais


def selectAllCharsCamadasDeEnchimento():
    todos_Pilaretes = SelecaoCamadasDeEnchimento.objects.all()
    return todos_Pilaretes


def verificarCamposExistentesCharsCamadasDeEnchimento(dados):
    todas_CamadasDeEnchimento = SelecaoCamadasDeEnchimento.objects.filter(
        Q(TorresComA19Nmax=dados['TorresComA19Nmax']) &
        Q(TorresComA19Nmin=dados['TorresComA19Nmin']) &
        Q(TorresComSGeW20Nmax=dados['TorresComSGeW20Nmax']) &
        Q(TorresComSGeW20Nmin=dados['TorresComSGeW20Nmin']) &
        Q(TorresComRTNmax=dados['TorresComRTNmax']) &
        Q(TorresComRTNmin=dados['TorresComRTNmin']) &
        Q(TorresComSGCNmax=dados['TorresComSGCNmax']) &
        Q(TorresComSGCNmin=dados['TorresComSGCNmin'])
    )

    if todas_CamadasDeEnchimento.exists() and todas_CamadasDeEnchimento.exists():
        return False
    return True


def selectCreateCharsCamadasDeEnchimento(dados):

    try:
        dadosCadastrados = SelecaoCamadasDeEnchimento.objects.create(
            idDadosPrincipais=dados['idDadosPrincipais_id'],
            TorresComA19Nmax=dados['TorresComA19Nmax'],
            TorresComA19Nmin=dados['TorresComA19Nmin'],
            TorresComSGeW20Nmax=dados['TorresComSGeW20Nmax'],
            TorresComSGeW20Nmin=dados['TorresComSGeW20Nmin'],
            TorresComRTNmax=dados['TorresComRTNmax'],
            TorresComRTNmin=dados['TorresComRTNmin'],
            TorresComSGCNmax=dados['TorresComSGCNmax'],
            TorresComSGCNmin=dados['TorresComSGCNmin'],
        )
    except Exception as e:
        # Aqui você pode manipular a exceção da maneira que desejar
        print("Ocorreu um erro:", e)
        return None  # Ou qualquer outra ação que desejar tomar em caso de erro

    return dadosCadastrados
