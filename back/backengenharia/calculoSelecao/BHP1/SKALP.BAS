5 REM ESTE PROGRAMA CHAMA-SE "SKALP"
10 REM
20 JJ=0
30 REM
40 REM                 KOMPAKTKUEHLERPROGRAMM
50 REM
60 REM               
70 REM
80 REM                BERECHNUNG SERIENKUEHLER  A L P I N A
90 REM
100 REM                JJ.SKALP
110 REM
120 REM                1.TEIL: EINGABE,AENDERN DER EINGABE
130 REM                        UMSETZEN DER EINGABE
140 REM
150 REM
160 DIM C(22)
170 DIM B(9)
180 DIM E(20)
190 DIM A(22)
200 DATA 0.419,0.42,0.7,1.05,1.56,2.06,2.719,2.72,3.379,3.38,4.2,5.02,6.00,8.12,10.56,13.16,16.4,18.3,24.4,30.5,38.1,54.9
210 FOR I=1 TO 22
220 READ A(I)
230 NEXT I
240 FOR I=1 TO 20
250 E(I)=0
260 NEXT I
270 DATA 11,12,13,14,15,22,23,24,25
280 FOR I=1 TO 9
290 READ B(I)
300 NEXT I
310 DATA 3,4,8,12,16,20,25,26,32,33,40,50,63,80,100,125,155,180,240,310,380,550
320 FOR I=1 TO 22
330 READ C(I)
340 NEXT I
350 GOSUB 1640 : REM EINGABE 
360 GOSUB 510 :REM AUSGABE DER EINGABE
370 GOSUB 1170 : REM UMSETZEN DER EINGABE
380 IF JJ=1 THEN 360
390 OPEN "O",#1,"DASG"
400 PRINT#1,M0;I9;T1;Z;T2;T3;P1;T4;P0;W0;F0;K1;N0;N1;D1;N2;D6
410 CLOSE #1
420 OPEN "O",#1,"ZEIN"
430 FOR I=1 TO 20
440 PRINT#1,E(I)
450 NEXT I
460 CLOSE #1
470 IF E(17)=1 THEN 490
480 CHAIN"HAUPT"
490 CHAIN"RTP"
500 END
510 REM---------------AUSGABE DER EINGABE--------------------------------------
520 JJ=0
530 CLS
540 PRINT TAB(10) "                                                             SKALP"
550 PRINT TAB(10) " 1 Vazao do produto ...................MP"E(1)"m3/h"
560 PRINT TAB(10) " 3 Temperatura agua quente ...........TP1"E(3)"'C"
570 PRINT TAB(10) " 4 Diferencial temp. ...................Z"E(4)"K"
580 PRINT TAB(10) " 5 Temperatura agua resfriada ........TP2"E(5)"'C"
590 PRINT TAB(10) " 6 Temp. do ar no bulbo seco .........TL1"E(6)"'C"
600 PRINT TAB(10) " 7 Umidade relativa do ar ...........PHI1"E(7)"%"
610 PRINT TAB(10) " 8 Temp. do ar no bulbo umido ........TF1"E(8)"'C"
620 PRINT TAB(10) " 9 Pressao atmosferica ................PB"E(9)"mbar"
630 IF YY=1 THEN 670
640 PRINT TAB(10) "10 Velocidade media do ar ............WLM"E(10)"m/s"
650 PRINT TAB(10) "11 Codigo do resfriador .............KTKZ"E(11)
660 PRINT TAB(10) "12 Codigo do enchimento .............KZEB"E(12)
670 REM
680 IF XX >=10 THEN 710
690 IF XX=8 THEN 710
700 GOTO 720
710 PRINT TAB(10) "13 Nr. faces disp. entrada do ar .....NLE"E(13)
720 PRINT TAB(10) "15 Nr. de resfriadores ................NK"E(15)
730 PRINT TAB(10) "16 Pressao estatica adicional ext. ...DPZ"E(16)"mmCA"
740 PRINT TAB(10) "20 Altitude local ....................HAO"E(20)"m"
750 PRINT
760 IF XX=0 THEN 850
770 IF C(XX)=26 THEN 810
780 IF C(XX)=33 THEN 830
790 PRINT TAB(10) "Modelo :       "C(XX)
800 GOTO 860
810 PRINT TAB(10) "Modelo :        25-ASP"
820 GOTO 860
830 PRINT TAB(10) "Modelo :        32-ASP"
840 GOTO 860
850 PRINT TAB(10) "Modelo sera procurado "
860 PRINT
870 REM--------------AENDERN DER EINGABE---------------------------------------
880 PRINT TAB(10) "Para modificacao indique codigo e valor novo :"
890 PRINT TAB(10) "Sem modificacao : 0,0"
900 INPUT A0,W9
910 IF A0=0 THEN 1160
920 IF A0=2 THEN 530
930 IF A0>20 THEN 530
940 IF YY=1 THEN 960
950 GOTO 970
960 IF A0>=10 AND A0<=13 THEN 530
970  REM IF A0=0 THEN 1170
980 IF A0=11 THEN 1030
990 IF A0=20 THEN 1060
1000 IF A0=9 THEN 1110
1010 E(A0)=W9
1020 GOTO 530
1030 E(A0)=W9
1040 XX=W9
1050 GOTO 530
1060 REM AENDERUNG DER HOEHE
1070 E(A0)=W9
1080 HH=W9/1000
1090 E(9)=1013.25*((288-6.5*HH)/288)^5.255
1100 GOTO 530
1110 REM AENDERUNG DES DRUCKES
1120 E(A0)=W9
1130 HH=(288/6.5-288/6.5*(E(A0)/1013.25)^(1/5.255))*1000
1140 E(20)=HH
1150 GOTO 530
1160 RETURN
1170 REM--------------UMSETZEN DER EINGABE--------------------------------------
1180 E(16)=E(16)*9.810001
1190 E(11)=FF
1200 M0=E(1)/3600*1000
1210 I9=E(2)
1220 T1=E(3)
1230 Z=E(4)
1240 T2=E(5)
1250 IF T1=0 THEN 1330
1260 IF T2=0 THEN 1300
1270 Z=T1-T2
1280 IF Z<0 THEN 1360
1290 GOTO 1440
1300 IF Z=0 THEN 1360
1310 T2=T1-Z
1320 GOTO 1440
1330 IF T2=0 THEN 1360
1340 T1=T2+Z
1350 GOTO 1440
1360 CLS
1370 PRINT TAB(10) "Erro na informacao de temperaturas da agua "
1380 PRINT TAB(10) "Apertar qualquer tecla para re-iniciar entrada",
1390 INPUT X$
1400 JJ=1
1410 E(16)=E(16)/9.810001
1420 E(11)=XX
1430 GOTO 1620
1440 T3=E(6)
1450 P1=E(7)
1460 T4=E(8)
1470 P0=E(9)
1480 W0=E(10)
1490 F0=E(11)
1500 K1=E(12)
1510 N0=E(13)
1520 N1=1
1530 IF N0=3 THEN 1580
1540 IF N0=2 THEN 1560
1550 GOTO 1590
1560 N1=3
1570 GOTO 1590
1580 N1=2
1590 D1=E(14)
1600 N2=E(15)
1610 D6=E(16)
1620 RETURN
1630 REM EINGABE 
1640 CLS
1650 PRINT "                                                                    SKALP"
1655 REM
1660 PRINT "DIMENSIONAMENTO DE TORRES COMPACTAS  A L P I N A "
1670 PRINT
1680 PRINT
1690 PRINT "Vazao de agua (m3/h) ..................",
1700 INPUT E(1)
1710 PRINT
1720 REM
1730 PRINT "No minimo dois valores devem ser indicados :"
1740 PRINT
1750 PRINT "Temp. agua quente ('C) ................"
1760 PRINT "Temp. agua resfriada ('C) ............."
1770 PRINT "Diferencial temperaturas (K) .........."
1780 PRINT TAB(42) " ";
1790 INPUT E(3),E(5),E(4)
1800 PRINT
1810 REM
1820 PRINT "No minimo dois valores devem ser indicados :"
1830 PRINT
1840 PRINT "Temp. ar no bulbo umido ('C) .........."
1850 PRINT "Umidade relativa do ar (%) ............"
1860 PRINT "Temp. ar no bulbo seco ('C) ..........."
1870 PRINT TAB(42) " ";
1880 INPUT E(8),E(7),E(6)
1890 PRINT "Altitude local (m) ....................",
1900 INPUT HH
1910 E(20)=HH
1920 IF HH < 0 THEN 1960
1930 HH=HH/1000
1940 E(9)=1013.25*((288-6.5*HH)/288)^5.255
1950 GOTO 2000
1960 PRINT "Pressao atmosferica (mbar) ............",
1970 INPUT E(9)
1980 HH=(288/6.5-288/6.5*(E(9)/1013.25)^(1/5.255))*1000
1990 E(20)=HH
2000 PRINT "Calcular com veloc. do ar pre-fixada"
2010 PRINT "Sim=1 , Nao=0                          ",
2020 INPUT YY
2030 IF YY=0 THEN 2050
2040 IF YY=1 THEN 2070
2050 PRINT "Veloc. media do ar (m/s) .............",
2060 INPUT E(10)
2070 CLS
2080 PRINT
2090 PRINT "Indicar codigo do resfriador :                                      JJ.SKALP"
2100 'PRINT "Se codigo=0 , o resfriador sera procurado "
2110 PRINT
2120 PRINT "  Modelo              Codigo               Modelo             Codigo"
2130 PRINT
2140 PRINT "    3 _________________  1                  50 ________________ 12"
2150 PRINT "    4 _________________  2                  63 ________________ 13"
2160 PRINT "    8 _________________  3                  80 ________________ 14"
2170 PRINT "   12 _________________  4                 100 ________________ 15"
2180 PRINT "   16 _________________  5                 125 ________________ 16"
2190 PRINT "   20 _________________  6                 155 ________________ 17"
2200 PRINT "   25 INS _____________  7                 180 ________________ 18"
2210 PRINT "   25 ASP _____________  8                 240 ________________ 19"
2220 PRINT "   32 INS _____________  9                 310 ________________ 20"
2230 PRINT "   32 ASP _____________ 10                 380 ________________ 21"
2240 PRINT "   40 _________________ 11                 550 ________________ 22"
2250 PRINT
2260 PRINT "Codigo do resfriador........",
2270 INPUT XX
2280 IF INT(XX)<>XX THEN 2070
2290 E(11)=XX
2300 IF XX<0 THEN 2070
2310 IF XX>22 THEN 2070
2320 IF XX=0 THEN 2070
2330 FOR I=1 TO 22
2340 IF XX=I THEN 2360
2350 NEXT I
2360 FF=A(I)
2370 GOTO  2410
2380 FF=0
2390 GOTO 3270
2400 REM
2410 CLS
2420 PRINT
2430 PRINT "Indicar codigo do enchimento :                                      SKALP"
2440 REM  PRINT "bei EBKZ=0 wird Einbau gesucht"
2450 PRINT
2460 PRINT "Os seguintes enchimentos sao possiveis :"
2470 PRINT
2480 PRINT "Enchimento                  Codigo"
2490 PRINT
2500 PRINT
2510 IF XX=0 THEN 3270
2520 IF XX=1 THEN 2570        : REM MODELL 3
2530 IF XX<=14 THEN 2630      : REM MODELL 4-80
2540 IF XX<=21 THEN 2770        : REM MODELL 100-380
2550 IF XX=22 THEN 2950
2560 PRINT
2570 REM MODELL 3
2580 PRINT "SG   1 Camada                 11"
2590 PRINT
2600 PRINT "A-19 2 Camadas                22"
2610 PRINT
2620 GOTO 3080
2630 REM MODELL 4-80
2640 IF XX >=10 THEN 2670
2650 IF XX=8 THEN 2670
2660 PRINT "SG   1 Camada                 11"
2670 PRINT "SG   2 Camadas                12"
2680 PRINT
2690 IF XX <=10 THEN 2710
2700 PRINT "A-19 2 Camadas                22"
2710 PRINT "A-19 3 Camadas                23"
2720 PRINT
2730 IF XX < 14 THEN 2760
2740 PRINT "RTP (14)                      33"
2750 PRINT
2760 GOTO 3080
2770 REM MODELL 100-380
2780 PRINT "SG   2 Camadas                12"
2790 PRINT "SG   3 Camadas                13"
2800 PRINT "SG   4 Camadas                14"
2810 PRINT
2820 PRINT "A-19 2 Camadas                22"
2830 PRINT "A-19 3 Camadas                23"
2840 PRINT "A-19 4 Camadas                24"
2850 PRINT "A-19 5 Camadas                25"
2860 PRINT
2870 IF XX>=18 THEN 2920
2880 IF XX>=15 THEN 2900
2890 GOTO 2930
2900 PRINT "RTP (18)                      32"
2910 GOTO 2930
2920 PRINT "RTP (22)                      31"
2930 PRINT
2940 GOTO 3080
2950 REM MODELL 550
2960 PRINT "SG   2 Camadas                12"
2970 PRINT "SG   3 Camadas                13"
2980 PRINT "SG   4 Camadas                14"
2990 PRINT "SG   5 Camadas                15"
3000 PRINT
3010 PRINT "A-19 2 Camadas                22"
3020 PRINT "A-19 3 Camadas                23"
3030 PRINT "A-19 4 Camadas                24"
3040 PRINT "A-19 5 Camadas                25"
3050 PRINT
3060 PRINT "RTP (22)                      31"
3070 PRINT
3080 PRINT "Codigo do enchimento ..............",
3090 INPUT E(12)
3100 IF INT(E(12))<>E(12) THEN 2410
3110 FOR I=1 TO 9
3120 IF E(12)=B(I) THEN 3190
3130 NEXT I
3140 IF E(12) > 33 THEN 3160
3150 IF E(12)>30 THEN 3170
3160 GOTO 2410
3170 E(17)=1
3180 GOTO 3210
3190 REM
3200 E(17)=0
3210 REM
3220 GOSUB 3370 :REM LUFTGESCHW.
3230 IF XX>=10 THEN 3270
3240 IF XX =8 THEN 3270
3250 E(13)=4
3260 GOTO 3290
3270 PRINT "Nr. faces entrada do ar (4,3 ou 2).",
3280 INPUT E(13)
3290 E(14)=100
3300 PRINT "Nr. de resfriadores ...............",
3310 INPUT E(15)
3320 IF INT(E(15))<>E(15) THEN 3300
3330 IF E(15)<=0 THEN 3300
3340 PRINT "Pressao est. adic. ext. (mmCA) ....",
3350 INPUT E(16)
3360 RETURN
3370 REM ZUORDNUNG DER LUFTGESCHWINDIGKEITEN
3380 IF E(17)=1 THEN 3400
3390 GOTO 3420
3400 KT=1
3410 GOTO 3500
3420 IF E(12)<20 THEN 3460
3430 REM TYP A
3440 KT=0
3450 GOTO 3550
3460 ' PRINT "Tipo    (SG = 1 , SGM = 2) ........",
3470 KT=2  :  REM  INPUT KT
3480 'IF KT<>1 AND KT<>2 THEN 3460
3490 'IF INT(KT)<>KT THEN 3460
3500 IF KT=1 THEN 3520
3510 GOTO 3550
3520 IF E(17)=1 THEN 3600
3530 IF E(11)=8 THEN 3600
3540 IF E(11)=10 THEN 3600
3550 PRINT "Standard = 1    Silencioso = 2  ...",
3560 INPUT SS
3570 IF SS<>1 AND SS<>2 THEN 3550
3580 IF INT(SS)<>SS THEN 3550
3590 GOTO 3610
3600 SS=1
3610 IF YY=0 THEN 3890
3620 REM BESTIMMUNG DER LUFTGESCHWINDIGKEIT
3630 IF SS=1 THEN 3770
3640 REM SILENCIOSO
3650 IF KT=0 THEN  3680
3660 IF KT=1 THEN 3710
3670 IF KT=2 THEN 3740
3680 REM A-12
3690 E(10)=2.25
3700 GOTO 3890
3710 REM SG
3720 E(10)=1.9
3730 GOTO 3890
3740 REM SGM
3750 E(10)=2.25
3760 GOTO 3890
3770 REM STANDARD
3780 IF KT=0 THEN 3810
3790 IF KT=1 THEN 3840
3800 IF KT=2 THEN 3870
3810 REM A-12
3820 E(10)=2.8
3830 GOTO 3890
3840 REM SG
3850 E(10)=2.5
3860 GOTO 3890
3870 REM SGM
3880 E(10)=2.8
3890 E(19)=KT
3900 E(18)=SS
3910 RETURN
4100 REM
29500 REM