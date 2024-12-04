from ..models import SelecaoDadosPrincipais
from django.db.models import Q
from django.forms.models import model_to_dict


def updateDadosPrincipais(id, Dados):
    try:
        # Tenta atualizar os dados principais com o ID fornecido
        rows_updated = SelecaoDadosPrincipais.objects.filter(id=id).update(
            Codigo=Dados.get('Codigo'),
            Serie=Dados.get('Serie'),
            Tamanho=Dados.get('Tamanho'),
            VarCont=Dados.get('VarCont'),
            Estrutura=Dados.get('Estrutura'),
            FreqRedeElet=Dados.get('FreqRedeElet'),
            CompDasPas=Dados.get('CompDasPas'),
            DiamVent=Dados.get('DiamVent'),
            AreaSecTrans=Dados.get('AreaSecTrans'),
            ASP2Lados=Dados.get('ASP2Lados'),
            ASP3Lados=Dados.get('ASP3Lados'),
            INSASP4Lados=Dados.get('INSASP4Lados'),
            NVent=Dados.get('NVent'),
            AltEntAgua=Dados.get('AltEntAgua'),
            NumPasVentClasse1=Dados.get('NumPasVentClasse1'),
            RotVentC1=Dados.get('RotVentC1'),
            PotMotEletC1=Dados.get('PotMotEletC1'),
            RotMotEletC1=Dados.get('RotMotEletC1'),
            DiamVentPadraoC1=Dados.get('DiamVentPadraoC1'),
            NPasVentC2=Dados.get('NPasVentC2'),
            RotDoVentC2=Dados.get('RotDoVentC2'),
            PotMotEletC2=Dados.get('PotMotEletC2'),
            RotMotEletC2=Dados.get('RotMotEletC2'),
            DiamVentPadraoC2=Dados.get('DiamVentPadraoC2'),
        )

        if rows_updated == 0:
            print("Nenhum registro foi atualizado. Verifique o ID fornecido.")
        else:
            print(f"{rows_updated} registro(s) atualizado(s) com sucesso.")
    except Exception as e:
        print(f"Erro ao atualizar dados principais: {e}")

    return


def DisabledCreateDadosPrincipais(COD, Status):
    SelecaoDadosPrincipais.objects.filter(id=COD).update(status=Status)
    return


def filterDadosPrincipais(id=None, nome=None):
    query = Q()
    if id:
        query &= Q(id=id)
    if nome:
        query &= Q(nome=nome)

    # Filtrar as FCA's com base na consulta Q
    todas_fcas = SelecaoDadosPrincipais.objects.filter(query)

    return todas_fcas


def selectFilterDadosPrincipais(id):
    todos_Dados_Principais = SelecaoDadosPrincipais.objects.filter(id=id)
    return todos_Dados_Principais


def selectAllDadosPrincipais(nde, nate):
    todos_Dados_Principais = SelecaoDadosPrincipais.objects.all()
    return todos_Dados_Principais


def rescueValuesFromDatabase():
    total_linhas = SelecaoDadosPrincipais.objects.count()
    return total_linhas


def verificarCamposExistentesDadosPrincipais(dados):

    todos_Dados_Principais = SelecaoDadosPrincipais.objects.filter(
        Q(Serie=dados['Serie']) &
        Q(Tamanho=dados['Tamanho']) &
        Q(VarCont=dados['VarCont']) &
        Q(Estrutura=dados['Estrutura']) &
        Q(FreqRedeElet=dados['FreqRedeElet']) &
        Q(CompDasPas=dados['CompDasPas']) &
        Q(DiamVent=dados['DiamVent']) &
        Q(AreaSecTrans=dados['AreaSecTrans']) &
        Q(ASP2Lados=dados['ASP2Lados']) &
        Q(ASP3Lados=dados['ASP3Lados']) &
        Q(INSASP4Lados=dados['INSASP4Lados']) &
        Q(NVent=dados['NVent']) &
        Q(AltEntAgua=dados['AltEntAgua']) &
        Q(NumPasVentClasse1=dados['NumPasVentClasse1']) &
        Q(RotVentC1=dados['RotVentC1']) &
        Q(PotMotEletC1=dados['PotMotEletC1']) &
        Q(RotMotEletC1=dados['RotMotEletC1']) &
        Q(DiamVentPadraoC1=dados['DiamVentPadraoC1']) &
        Q(NPasVentC2=dados['NPasVentC2']) &
        Q(RotDoVentC2=dados['RotDoVentC2']) &
        Q(PotMotEletC2=dados['PotMotEletC2']) &
        Q(RotMotEletC2=dados['RotMotEletC2']) &
        Q(DiamVentPadraoC2=dados['DiamVentPadraoC2'])
    )

    if todos_Dados_Principais.exists() and todos_Dados_Principais.exists():
        return False
    return True


def selectCreateDadosPrincipais(dados):
    print('dados', dados)
    bool = verificarCamposExistentesDadosPrincipais(dados)
    print('bool', bool)

    dadosCadastrados = SelecaoDadosPrincipais.objects.create(
        Codigo=dados['Codigo'],
        Serie=dados['Serie'],
        Tamanho=dados['Tamanho'],
        VarCont=dados['VarCont'],
        Estrutura=dados['Estrutura'],
        FreqRedeElet=dados['FreqRedeElet'],
        CompDasPas=dados['CompDasPas'],
        DiamVent=dados['DiamVent'],
        AreaSecTrans=dados['AreaSecTrans'],
        ASP2Lados=dados['ASP2Lados'],
        ASP3Lados=dados['ASP3Lados'],
        INSASP4Lados=dados['INSASP4Lados'],
        NVent=dados['NVent'],
        AltEntAgua=dados['AltEntAgua'],
        NumPasVentClasse1=dados['NumPasVentClasse1'],
        RotVentC1=dados['RotVentC1'],
        PotMotEletC1=dados['PotMotEletC1'],
        RotMotEletC1=dados['RotMotEletC1'],
        DiamVentPadraoC1=dados['DiamVentPadraoC1'],
        NPasVentC2=dados['NPasVentC2'],
        RotDoVentC2=dados['RotDoVentC2'],
        PotMotEletC2=dados['PotMotEletC2'],
        RotMotEletC2=dados['RotMotEletC2'],
        DiamVentPadraoC2=dados['DiamVentPadraoC2'],
    )
    return dadosCadastrados.id
