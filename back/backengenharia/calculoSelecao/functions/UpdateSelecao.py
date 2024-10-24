from ..database.dadosPrincipais import verificarCamposExistentesDadosPrincipais
from ..database.pilaretes import verificarCamposExistentesPilaretes
from ..database.camadasDeEnchimento import verificarCamposExistentesCharsCamadasDeEnchimento
from ..database.charsTorre import verificarCamposExistentesCharsTorre
from ..database.enchimento import verificarCamposExistentesCharsEnchimento
from ..database.motorEVentilador import verificarCamposExistentesCharsMoteVent


from ..database.dadosPrincipais import updateDadosPrincipais
from ..database.pilaretes import updatePilaretes
from ..database.camadasDeEnchimento import updateCharsCamadasDeEnchimento
from ..database.charsTorre import updateCharsTorre
from ..database.enchimento import updateCharsEnchimento
from ..database.motorEVentilador import updateCharsMoteVent


def UpdateSelecao(data):
    print('data', data)
    id = data['COD']
    DadosPrincipais = {
        'idDadosPrincipais_id': data['COD'],
        'Codigo': data['COD'],
        'Serie': data['Serires'],
        'Tamanho': data['TamanhoDaTorre'],
        'VarCont': data['VariavelDeControle'],
        'Estrutura': data['TipoDeEstrutra'],
        'FreqRedeElet': data['FrequenciaDaRedeEletrica'],
        'CompDasPas': data['ComprimentoDasPas'],
        'DiamVent': data['DiametroDoVentilador'],
        'AreaSecTrans': data['AreaDaSecaoTransversal'],
        'ASP2Lados': data['TorresASP2'][1],
        'ASP3Lados': data['TorresASP3'][1],
        'INSASP4Lados': data['TorresASP4'][1],
        'NVent': data['NumeroDeVentiladores'],
        'AltEntAgua': data['TipoDeAlturaDeEntradaDeAgua'],
        'NumPasVentClasse1': data['NumeroDePasDosVentiladores1'][1],
        'RotVentC1': data['RotacaoDoVentilador1'][1],
        'PotMotEletC1': data['PotenciaDoMotor1'][1],
        'RotMotEletC1': data['RotacaoDoMotor1'][1],
        'DiamVentPadraoC1': data['DiametroDoVentiladorPorpadrao1'][1],
        'NPasVentC2': data['NumeroDePasDosVentiladores2'][1],
        'RotDoVentC2': data['RotacaoDoVentilador2'][1],
        'PotMotEletC2': data['PotenciaDoMotor2'][1],
        'RotMotEletC2': data['RotacaoDoMotor2'][1],
        'DiamVentPadraoC2': data['DiametroDoVentiladorPorpadrao2'][1],
    }

    Pilaretes = {
        'idDadosPrincipais_id': data['COD'],
        'AltPilAdcmPTorreCA19CAte4W20e4SGArPor2l': data['A19C4W202Lados'][1],
        'AltPilAdcmPTorreCA19CAte4W20e4SGAPor3l': data['A19C4W203Lados'][1],
        'AltPilAdcmPTorreCA19CAte4W20e4SGAPor4l': data['A19C4W204Lados'][1],
        'AltPilAdcmCom5W20e5SGAPor2l': data['A19C5W202Lados'][1],
        'AltPilAdcmCom5W20e5SGArPor3l': data['A19C5W203Lados'][1],
        'AltPilAdcmCom5W20e5SGArPor4l': data['A19C5W204Lados'][1],
    }

    camadasDeEnchimento = {
        'idDadosPrincipais_id': data['COD'],
        'TorresComA19Nmax': data['A19NMax'][1],
        'TorresComA19Nmin': data['A19NMin'][1],
        'TorresComSGeW20Nmax': data['SGW20NMax'][1],
        'TorresComSGeW20Nmin': data['SGW20NMin'][1],
        'TorresComRTNmax': data['RTNMax'][1],
        'TorresComRTNmin': data['RTNMin'][1],
        'TorresComSGCNmax': data['SGCNMax'][1],
        'TorresComSGCNmin': data['SGCNMin'][1],
    }

    charsTorre = {
        'idDadosPrincipais_id': data['COD'],
        'PressMaxEnt': data['PressaoMaximaDeEntrada'],
        'TipCuboVentil': data['TipoDeCuboDeVentilador'],
        'LargCell': data['LarguraDaCelula'],
        'CompCell': data['ComprimentoDaCelula'],
        'TipEstrtut': data['TipoDeEstrutura'],
        'RevestLat': data['RevestimentoLateral'],
        'TipDistrib': data['TipoDeDistribuicao'],
    }

    charsEnchimento = {
        'idDadosPrincipais_id': data['COD'],
        'doisSGW202ou3A192l': data['paraTorresComAr2SG2l'][1],
        'tresSGW204A192l': data['paraTorresComAr3SG2l'][1],
        'quatroou5SGW20ou5A192l': data['paraTorresComAr4SG2l'][1],
        'doisSGW202ou3A193l': data['paraTorresComAr2SG3l'][1],
        'tresSGW204A193l': data['paraTorresComAr3SG3l'][1],
        'quatroou5SGW20ou5A193l': data['paraTorresComAr4SG3l'][1],
        'doisSGW202ou3A194l': data['paraTorresComAr2SG4l'][1],
        'tresSGW204A194l': data['paraTorresComAr3SG4l'][1],
        'quatroou5SGW20ou5A194l': data['paraTorresComAr4SG4l'][1],
    }

    charsMoteVent = {
        'idDadosPrincipais_id': data['COD'],
        'TipVentilC1': data['TipoDeVentiladorc1'][1],
        'TipVentilC2': data['TipoDeVentiladorc2'][1],
        'DescMotEletC1': data['DescricaoDoMotorEletricoc1'][1],
        'DescMotEletC2': data['DescricaoDoMotorEletricoc2'][1],
        'tipPasVentilC1': data['TipoDePasDoVentladorc1'][1],
        'tipPasVentilC2': data['TipoDePasDoVentladorc2'][1],
        'tipoTransmC1': data['TipoDeTransmissaoc1'][1],
        'tipoTransmC2': data['TipoDeTransmissaoc2'][1],
        'rendTransmC1': data['RendimentoDeTransmissaoc1'][1],
        'rendTransmC2': data['RendimentoDeTransmissaoc2'][1],

    }

    if (verificarCamposExistentesDadosPrincipais(DadosPrincipais) or verificarCamposExistentesPilaretes(Pilaretes) or verificarCamposExistentesCharsCamadasDeEnchimento(camadasDeEnchimento) or verificarCamposExistentesCharsTorre(charsTorre) or verificarCamposExistentesCharsEnchimento(charsEnchimento) or verificarCamposExistentesCharsMoteVent(charsMoteVent)):
        updateDadosPrincipais(id, DadosPrincipais)
        updatePilaretes(id, Pilaretes)
        updateCharsCamadasDeEnchimento(id, camadasDeEnchimento)
        updateCharsTorre(id, charsTorre)
        updateCharsEnchimento(id, charsEnchimento)
        updateCharsMoteVent(id, charsMoteVent)
        return True

    return False
