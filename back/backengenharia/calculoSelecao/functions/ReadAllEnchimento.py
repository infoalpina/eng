from ..database.charsCamadasDeEnchimento import selectAllCharsCamadasDeEnchimento


def ReadAllEnchimento():
    try:
        allCharsEnchimento = selectAllCharsCamadasDeEnchimento()
        print("Antes do filtro:", allCharsEnchimento)

        # Lista para armazenar partes únicas dos nomes
        partes_unicas = set()

        # Filtrar apenas a parte antes do último '/'
        for nome in allCharsEnchimento:
            parte_anterior = nome.rsplit('/', 1)[0]  # Divide pelo último '/'
            partes_unicas.add(parte_anterior)

        # Converter de volta para uma lista
        nomes_unicos = list(partes_unicas)
        print("Depois do filtro:", nomes_unicos)

        return nomes_unicos

    except Exception as e:
        print(f"Erro em ReadAllEnchimento: {e}")
        return {'erro': 'Erro interno'}
