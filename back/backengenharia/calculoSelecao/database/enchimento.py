from ..models import charsEnchimento
from django.db.models import Q
from django.forms.models import model_to_dict


def updateCharsEnchimento(id, Dados):
    try:
        rows_updated = charsEnchimento.objects.filter(id=id).update(
            doisSGW202ou3A192l=Dados.get('doisSGW202ou3A192l'),
            tresSGW204A192l=Dados.get('tresSGW204A192l'),
            quatroou5SGW20ou5A192l=Dados.get('quatroou5SGW20ou5A192l'),
            doisSGW202ou3A193l=Dados.get('doisSGW202ou3A193l'),
            tresSGW204A193l=Dados.get('tresSGW204A193l'),
            quatroou5SGW20ou5A193l=Dados.get('quatroou5SGW20ou5A193l'),
            doisSGW202ou3A194l=Dados.get('doisSGW202ou3A194l'),
            tresSGW204A194l=Dados.get('tresSGW204A194l'),
            quatroou5SGW20ou5A194l=Dados.get('quatroou5SGW20ou5A194l'),
        )

        if rows_updated == 0:
            print("Nenhum registro foi atualizado. Verifique o ID fornecido.")
        else:
            print(f"{rows_updated} registro(s) atualizado(s) com sucesso.")
    except Exception as e:
        print(f"Erro ao atualizar dados de enchimento: {e}")

    return


def selectFilterEnchimento(id):
    todos_Dados_Principais = charsEnchimento.objects.filter(id=id)
    return todos_Dados_Principais


def selectAllCharsEnchimento():
    todos_Pilaretes = charsEnchimento.objects.all()
    return todos_Pilaretes


def verificarCamposExistentesCharsEnchimento(dados):
    todas_charsEnchimento = charsEnchimento.objects.filter(
        Q(doisSGW202ou3A192l=dados['doisSGW202ou3A192l']) &
        Q(tresSGW204A192l=dados['tresSGW204A192l']) &
        Q(quatroou5SGW20ou5A192l=dados['quatroou5SGW20ou5A192l']) &
        Q(doisSGW202ou3A193l=dados['doisSGW202ou3A193l']) &
        Q(tresSGW204A193l=dados['tresSGW204A193l']) &
        Q(quatroou5SGW20ou5A193l=dados['quatroou5SGW20ou5A193l']) &
        Q(doisSGW202ou3A194l=dados['doisSGW202ou3A194l']) &
        Q(tresSGW204A194l=dados['tresSGW204A194l']) &
        Q(quatroou5SGW20ou5A194l=dados['quatroou5SGW20ou5A194l'])
    )

    if todas_charsEnchimento.exists() and todas_charsEnchimento.exists():
        return False
    return True


def selectCreateCharsEnchimento(dados):
    print('dados', dados)

    dadosCadastrados = charsEnchimento.objects.create(
        idDadosPrincipais_id=dados['idDadosPrincipais_id'],
        doisSGW202ou3A192l=dados['doisSGW202ou3A192l'],
        tresSGW204A192l=dados['tresSGW204A192l'],
        quatroou5SGW20ou5A192l=dados['quatroou5SGW20ou5A192l'],
        doisSGW202ou3A193l=dados['doisSGW202ou3A193l'],
        tresSGW204A193l=dados['tresSGW204A193l'],
        quatroou5SGW20ou5A193l=dados['quatroou5SGW20ou5A193l'],
        doisSGW202ou3A194l=dados['doisSGW202ou3A194l'],
        tresSGW204A194l=dados['tresSGW204A194l'],
        quatroou5SGW20ou5A194l=dados['quatroou5SGW20ou5A194l'],
    )

    print('ok')

    return
