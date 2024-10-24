from ..database.dadosPrincipais import selectFilterDadosPrincipais
from ..database.camadasDeEnchimento import selectFilterCamadasDeEnchimento
from ..database.charsTorre import selectFilterCharsTorre
from ..database.pilaretes import selectFilterPilaretes
from ..database.enchimento import selectFilterEnchimento
from ..database.motorEVentilador import selectFilterMotorEVentilador


def ReadSelecaoAll(rec):
    try:
        FilterDadosPrincipais_data = selectFilterDadosPrincipais(int(rec))
        FilterCamadasDeEnchimento_data = selectFilterCamadasDeEnchimento(
            int(rec))
        FilterCharsTorre_data = selectFilterCharsTorre(int(rec))
        FilterPilaretes_data = selectFilterPilaretes(int(rec))
        FilterEnchimento_data = selectFilterEnchimento(int(rec))
        FilterMotorEVentilador_data = selectFilterMotorEVentilador(int(rec))

        torres = []

        for obj in FilterDadosPrincipais_data:
            # Obtém os valores das chaves do objeto
            valores = obj.__dict__

            # Imprime os valores das chaves
            print("Objeto FilterDadosPrincipais_data:")
            for chave, valor in valores.items():
                print(f"{chave}: {valor}")

        for obj in FilterCamadasDeEnchimento_data:
            # Obtém os valores das chaves do objeto
            valores = obj.__dict__

            # Imprime os valores das chaves
            print("Objeto FilterCamadasDeEnchimento_data:")
            for chave, valor in valores.items():
                print(f"{chave}: {valor}")

        for obj in FilterCharsTorre_data:
            # Obtém os valores das chaves do objeto
            valores = obj.__dict__

            # Imprime os valores das chaves
            print("Objeto FilterCharsTorre_data:")
            for chave, valor in valores.items():
                print(f"{chave}: {valor}")

        for obj in FilterPilaretes_data:
            # Obtém os valores das chaves do objeto
            valores = obj.__dict__

            # Imprime os valores das chaves
            print("Objeto FilterPilaretes_data:")
            for chave, valor in valores.items():
                print(f"{chave}: {valor}")

        for obj in FilterEnchimento_data:
            # Obtém os valores das chaves do objeto
            valores = obj.__dict__

            # Imprime os valores das chaves
            print("Objeto FilterEnchimento_data:")
            for chave, valor in valores.items():
                print(f"{chave}: {valor}")

        for obj in FilterMotorEVentilador_data:
            # Obtém os valores das chaves do objeto
            valores = obj.__dict__

            # Imprime os valores das chaves
            print("Objeto FilterMotorEVentilador_data:")
            for chave, valor in valores.items():
                print(f"{chave}: {valor}")

        print('FilterDadosPrincipais_data', FilterDadosPrincipais_data)

        for DadosPrincipais, CamadasDeEnchimento, CharsTorre, Pilaretes, Enchimento, MotorEVentilador in zip(
            FilterDadosPrincipais_data, FilterCamadasDeEnchimento_data, FilterCharsTorre_data,
            FilterPilaretes_data, FilterEnchimento_data, FilterMotorEVentilador_data
        ):
            torre = {
                'DadosPrincipais': {
                    'id': DadosPrincipais.id,
                    'Codigo': DadosPrincipais.Codigo,
                    'Serie': DadosPrincipais.Serie,
                    'Tamanho': DadosPrincipais.Tamanho,
                    'VarCont': DadosPrincipais.VarCont,
                    'Estrutura': DadosPrincipais.Estrutura,
                    'FreqRedeElet': DadosPrincipais.FreqRedeElet,
                    'CompDasPas': DadosPrincipais.CompDasPas,
                    'DiamVent': DadosPrincipais.DiamVent,
                    'AreaSecTrans': DadosPrincipais.AreaSecTrans,
                    'ASP2Lados': DadosPrincipais.ASP2Lados,
                    'ASP3Lados': DadosPrincipais.ASP3Lados,
                    'INSASP4Lados': DadosPrincipais.INSASP4Lados,
                    'NVent': DadosPrincipais.NVent,
                    'AltEntAgua': DadosPrincipais.AltEntAgua,
                    'NumPasVentClasse1': DadosPrincipais.NumPasVentClasse1,
                    'RotVentC1': DadosPrincipais.RotVentC1,
                    'PotMotEletC1': DadosPrincipais.PotMotEletC1,
                    'RotMotEletC1': DadosPrincipais.RotMotEletC1,
                    'DiamVentPadraoC1': DadosPrincipais.DiamVentPadraoC1,
                    'NPasVentC2': DadosPrincipais.NPasVentC2,
                    'RotDoVentC2': DadosPrincipais.RotDoVentC2,
                    'PotMotEletC2': DadosPrincipais.PotMotEletC2,
                    'RotMotEletC2': DadosPrincipais.RotMotEletC2,
                    'DiamVentPadraoC2': DadosPrincipais.DiamVentPadraoC2,
                    'status': DadosPrincipais.status,
                },
                'Pilaretes': {
                    'idDadosPrincipais': Pilaretes.idDadosPrincipais,
                    'AltPilAdcmPTorreCA19CAte4W20e4SGArPor2l': Pilaretes.AltPilAdcmPTorreCA19CAte4W20e4SGArPor2l,
                    'AltPilAdcmPTorreCA19CAte4W20e4SGAPor3l': Pilaretes.AltPilAdcmPTorreCA19CAte4W20e4SGAPor3l,
                    'AltPilAdcmPTorreCA19CAte4W20e4SGAPor4l': Pilaretes.AltPilAdcmPTorreCA19CAte4W20e4SGAPor4l,
                    'AltPilAdcmCom5W20e5SGAPor2l': Pilaretes.AltPilAdcmCom5W20e5SGAPor2l,
                    'AltPilAdcmCom5W20e5SGArPor3l': Pilaretes.AltPilAdcmCom5W20e5SGArPor3l,
                    'AltPilAdcmCom5W20e5SGArPor4l': Pilaretes.AltPilAdcmCom5W20e5SGArPor4l
                },
                'CamadasDeEnchimento': {
                    'idDadosPrincipais': CamadasDeEnchimento.idDadosPrincipais,
                    'TorresComA19Nmax': CamadasDeEnchimento.TorresComA19Nmax,
                    'TorresComA19Nmin': CamadasDeEnchimento.TorresComA19Nmin,
                    'TorresComSGeW20Nmax': CamadasDeEnchimento.TorresComSGeW20Nmax,
                    'TorresComSGeW20Nmin': CamadasDeEnchimento.TorresComSGeW20Nmin,
                    'TorresComRTNmax': CamadasDeEnchimento.TorresComRTNmax,
                    'TorresComRTNmin': CamadasDeEnchimento.TorresComRTNmin,
                    'TorresComSGCNmax': CamadasDeEnchimento.TorresComSGCNmax,
                    'TorresComSGCNmin': CamadasDeEnchimento.TorresComSGCNmin,
                },
                'CharsTorre': {
                    'idDadosPrincipais_id': CharsTorre.idDadosPrincipais_id,
                    'PressMaxEnt': CharsTorre.PressMaxEnt,
                    'TipCuboVentil': CharsTorre.TipCuboVentil,
                    'LargCell': CharsTorre.LargCell,
                    'CompCell': CharsTorre.CompCell,
                    'TipEstrtut': CharsTorre.TipEstrtut,
                    'RevestLat': CharsTorre.RevestLat,
                    'TipDistrib': CharsTorre.TipDistrib,
                },
                'Enchimento': {
                    'idDadosPrincipais_id': Enchimento.idDadosPrincipais_id,
                    'doisSGW202ou3A192l': Enchimento.doisSGW202ou3A192l,
                    'tresSGW204A192l': Enchimento.tresSGW204A192l,
                    'quatroou5SGW20ou5A192l': Enchimento.quatroou5SGW20ou5A192l,
                    'doisSGW202ou3A193l': Enchimento.doisSGW202ou3A193l,
                    'tresSGW204A193l': Enchimento.tresSGW204A193l,
                    'quatroou5SGW20ou5A193l': Enchimento.quatroou5SGW20ou5A193l,
                    'doisSGW202ou3A194l': Enchimento.doisSGW202ou3A194l,
                    'tresSGW204A194l': Enchimento.tresSGW204A194l,
                    'quatroou5SGW20ou5A194l': Enchimento.quatroou5SGW20ou5A194l,
                },
                'MotorEVentilador': {
                    'idDadosPrincipais_id': MotorEVentilador.idDadosPrincipais_id,
                    'TipoDeVentiladorC1': MotorEVentilador.TipoDeVentiladorC1,
                    'TipoDeVentiladorC2': MotorEVentilador.TipoDeVentiladorC2,
                    'DescricaoDoMotorEletricoC1': MotorEVentilador.DescricaoDoMotorEletricoC1,
                    'DescricaoDoMotorEletricoC2': MotorEVentilador.DescricaoDoMotorEletricoC2,
                    'tiposDePasDoVentiladorC1': MotorEVentilador.tiposDePasDoVentiladorC1,
                    'tiposDePasDoVentiladorC2': MotorEVentilador.tiposDePasDoVentiladorC2,
                    'tipoDeTransmissaoC1': MotorEVentilador.tipoDeTransmissaoC1,
                    'tipoDeTransmissaoC2': MotorEVentilador.tipoDeTransmissaoC2,
                    'rendimentoDeTransmissaoC1': MotorEVentilador.rendimentoDeTransmissaoC1,
                    'rendimentoDeTransmissaoC2': MotorEVentilador.rendimentoDeTransmissaoC2,
                },
            }
            torres.append(torre)

            print('torres', torres)

        return [torres]

    except Exception as e:
        print(f"Ocorreu um erro: {e}")
        return None
