# Inicializações
J9 = 1
S = {(J9, 1): 0, (J9, 2): 0}
E = [0] * 20
ISW = [0] * 20
ISZ = [0] * 20
IIW = [0] * 20
IIZ = [0] * 20
SWI = [0] * 20
SZ = [0] * 20
VZI = [0] * 20
VWI = [0] * 20
YD = [0] * 20
MN = [0] * 20
XD = [0] * 20
XM = [0] * 20
MM = [0] * 20
SDI = [0] * 20
VDI = [0] * 20
MIS = [0] * 20
MI = [0] * 20
FC = [0] * 20
DM = [0] * 20
S_matrix = [[0] * 5 for _ in range(22)]

# Leitura do arquivo "BHP"
with open('BHP.txt', 'r') as file:
    line = file.readline().strip().split()
    S[(J9, 1)] = int(line[0])
    S[(J9, 2)] = int(line[1])
    D4, V5, R5, W, U7 = map(float, line[2:])

# MODELLNUMMERN (MODELO)
MN = [3, 4, 8, 12, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 155, 180, 240, 310, 380, 550]

# FREIE VENTILATORFLAECHE (AREA LIVRE DO VENTILADOR)
FC = [0.14, 0.14, 0.2, 0.28, 0.43, 0.43, 0.54, 0.54, 1.08, 1.08, 1.55, 2.21, 2.21, 3.42, 3.42, 4.33, 5.45, 6.78, 8.7, 10.94]

# DURCHMESSER DER VENTILATOREN (DIAMETRO DO VENTILADOR)
DM = [0.45, 0.45, 0.53, 0.62, 0.79, 0.79, 0.91, 0.91, 1.23, 1.23, 1.48, 1.75, 1.75, 2.24, 2.24, 2.5, 2.8, 3.15, 3.55, 4.00]

# MOTOREN FUER SGM,A-12 CLASSE I
MI = [0.75, 0.75, 1.5, 2, 3, 4, 7.5, 7.5, 7.5, 7.5, 10, 15, 15, 20, 25, 30, 30, 40, 50, 50]

# MOTOREN FUER SG CLASSE I
MIS = [0.5, 0.5, 1, 1.5, 2, 3, 4, 5, 5, 5, 7.5, 10, 10, 12.5, 12.5, 20, 25, 30, 40, 50]

# VENTILATOR DREHZAHLEN FUER SGM,A-12 CLASSE I (ROTACAO DO VENTILADOR)
VDI = [1750, 1750, 1750, 1750, 1150, 1150, 1150, 1150, 850, 850, 684, 555, 555, 437.5, 437.5, 389, 389, 350, 287, 230]

# VENTILATOR DREHZAHLEN FUER SG CLASSE I (ROTACAO)
SDI = [1750, 1750, 1750, 1150, 1150, 1150, 850, 850, 850, 850, 700, 555, 555, 437.5, 437.5, 389, 389, 350, 287, 230]

# MOTOREN FUER SGM,A-12 CLASSE II
MM = [0.75, 0.75, 0.75, 1.5, 3, 3, 5, 5, 4, 4, 7.5, 7.5, 10, 10, 12.5, 15, 20, 25, 30, 40]

# MOTOREN FUER SG CLASSE II
XM = [0.5, 0.5, 0.5, 0.75, 1.5, 1.5, 2, 3, 2, 2, 3, 5, 5, 7.5, 7.5, 10, 10, 15, 15, 20]

# DREHZAHLEN FUER SGM,A-12 CLASSE II (ROTACAO DO VENTILADOR)
XD = [1750, 1750, 1370, 1150, 941, 941, 850, 850, 684, 684, 555, 460, 460, 328.5, 328.5, 287.5, 256, 230, 230, 189]

# DREHZAHLEN FUER SG CLASSE II (ROTACAO DO VENTILADOR)
YD = [1370, 1370, 1150, 906, 850, 850, 733, 733, 684, 684, 555, 460, 460, 328.5, 328.5, 287.5, 256, 230, 230, 189]

# FLUEGELZAHL SGM,A-12 CLASSE I (NUMERO DE PAS)
VZI = [10, 10, 5, 5, 12, 12, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]

# FLUEGELWINKEL SGM,A-12 CLASSE I (ANGULO ATAQUE DAS PAS)
VWI = [35, 35, 40, 35, 30, 35, 40, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

# FLUEGELZAHL FUER SG CLASSE I
SZ = [5, 5, 5, 10, 6, 6, 8, 16, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]

# FLUEGELWINKEL SG CLASSE I
SWI = [35, 35, 35, 45, 30, 35, 45, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

# FLUEGELZAHL SGM,A-12 CLASSE II (NUMERO DE PAS)
IIZ = [5, 10, 5, 10, 12, 12, 16, 16, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]

# FLUEGELWINKEL SGM,A-12 CLASSE II (ANGULO DE ATAQUE DAS PAS)
IIW = [40, 35, 40, 40, 35, 40, 40, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

# FLUEGELZAHL SG CLASSE II
ISZ = [5, 5, 10, 10, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]

# FLUEGELWINKEL SG CLASSE II
ISW = [45, 45, 45, 35, 40, 40, 45, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

# Einlesung der Datei "ZEIN"
ZEIN_data = []
with open('ZEIN.txt', 'r') as file:
    for line in file:
        ZEIN_data.append(list(map(int, line.strip().split())))

# Einlesung der Datei "DASG"
DASG_data = []
with open('DASG.txt', 'r') as file:
    for line in file:
        DASG_data.append(list(map(float, line.strip().split())))

print("Data successfully loaded!")
