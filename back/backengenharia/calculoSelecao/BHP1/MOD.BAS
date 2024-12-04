5 REM ***   ESTE PROGRAMA CHAMA-SE  "MOD"
10 DIM E(20)
20 DIM B(9)
30 DIM A(22)
40 DATA 11,12,13,14,15,22,23,24,25
50 FOR I=1 TO 9
60 READ B(I)
70 NEXT I
80 DATA 0.419,0.42,0.7,1.05,1.56,2.06,2.719,2.72,3.379,3.38,4.2,5.02,6.00,8.12,10.56,13.16,16.40,18.30,24.40,30.50,38.10,54.90
90 FOR I=1 TO 22
100 READ A(I)
110 NEXT I
---------------------------------------------------//--------------------------

---------------------------------------------------//--------------------------
120 REM
130 REM               JJ.MOD / JJ.SKALP
140 REM
150 REM               8. TEIL  AENDERN DES MODELLS UND/ODER EINBAUS
160 REM     
170 REM
180 OPEN "I",#1,"ZEIN"
190 FOR I=1 TO 20
200 INPUT#1,E(I)
210 NEXT I
---------------------------------------------------//--------------------------
220 CLOSE #1
230 REM
240 OPEN "I",#1,"DASG"
250 INPUT#1,M0,I9,T1,Z,T2,T3,P1,T4,P0,W0,F0,K1,N0,N1,D1,N2,D6
260 CLOSE #1
270 REM AENDERUNGEN
---------------------------------------------------//--------------------------
280 GOSUB 540
290 W0=E(10)
300 K1=E(12)
310 E(11)=FF
320 F0=E(11)
330 N2=E(15)
340 OPEN "O",#1,"ZEIN"
350 FOR I=1 TO 20
360 PRINT#1,E(I)
370 NEXT I
380 CLOSE #1
---------------------------------------------------//--------------------------
390 REM
400 OPEN "O",#1,"DASG"
410 PRINT#1,M0;I9;T1;Z;T2;T3;P1;T4;P0;W0;F0;K1;N0;N1;D1;N2;D6
420 CLOSE #1
425 REM
---------------------------------------------------//--------------------------
430 PRINT "Calcular com dados novos ( sim = 1  , nao = 0 )  ";
440 INPUT GGG
450 IF GGG = 1 THEN 520
460 IF GGG = 0 THEN 480
470 GOTO 430
---------------------------------------------------//--------------------------
480 IF E(17)=0 THEN 510
490 CHAIN"RTP"
500 GOTO 530
510 CHAIN"HAUPT"
520 CHAIN"ZEIN"
530 END
---------------------------------------------------//--------------------------

540 REM AENDERUNGEN
550 CLS
555 REM
560 PRINT "                                                                     JJ.MOD"
570 PRINT "Calcular com velocidade do ar pre-fixado  (Sim=1,Nao=0) ";
580 INPUT YY
590 IF YY=1 THEN 640
600 IF YY=0 THEN 620
610 GOTO 550
620 PRINT "Informe velocidade media desejada (m/s)                 ";
630 INPUT E(10)
640 CLS
650 PRINT "                                                                     JJ.MOD"
660 PRINT "Codigos dos resfriadores :"
670 PRINT
680 PRINT " Modelo                KTKZ               Modelo               KTKZ"
690 PRINT
700 PRINT "    3 _________________  1                  50 ________________ 12"
710 PRINT "    4 _________________  2                  63 ________________ 13"
720 PRINT "    8 _________________  3                  80 ________________ 14"
730 PRINT "   12 _________________  4                 100 ________________ 15"
740 PRINT "   16 _________________  5                 125 ________________ 16"
750 PRINT "   20 _________________  6                 155 ________________ 17"
760 PRINT "   25 INS _____________  7                 180 ________________ 18"
770 PRINT "   25 ASP _____________  8                 240 ________________ 19"
780 PRINT "   32 INS _____________  9                 310 ________________ 20"
790 PRINT "   32 ASP _____________ 10                 380 ________________ 21"
800 PRINT "   40 _________________ 11                 550 ________________ 22"
810 PRINT
820 PRINT "Informe codigo do resfriador desejado  ";
830 INPUT XX
---------------------------------------------------//--------------------------
840 IF INT(XX)<>XX THEN 550
850 E(11)=XX
860 IF XX<=0 THEN 550
870 IF XX>22 THEN 550
880 FOR I=1 TO 22
890 IF XX=I THEN 910
900 NEXT I
910 FF=A(I)
---------------------------------------------------//--------------------------
920 REM
930 PRINT "Quantidade dos resfriadores    ";
940 INPUT E(15)
950 IF INT(E(15))<>E(15) THEN 550
960 IF E(15)<=0 THEN 930
970 CLS
980 PRINT "                                                                     JJ.MOD"
990 PRINT "Codigos dos enchimentos :"
1000 PRINT
1010 REM
1020 REM
1030 PRINT "Enchimento                   EBKZ"
1040 PRINT
1050 PRINT
1060 IF XX=1 THEN 1110        : REM MODELL 3
1070 IF XX<=14 THEN 1170      : REM MODELL 4-80
1080 IF XX<=21 THEN 1310        : REM MODELL 100-380
1090 IF XX=22 THEN 1490
1100 PRINT
1110 REM MODELL 3
1120 PRINT "SG   1 Camada                 11"
1130 PRINT
1140 PRINT "A-19 2 Camadas                22"
1150 PRINT
1160 GOTO 1620
1170 REM MODELL 4-80
1180 IF XX>=10 THEN 1210
1190 IF XX=8 THEN 1210
1200 PRINT "SG   1 Camada                 11"
1210 PRINT "SG   2 Camadas                12"
1220 PRINT
1230 IF XX<=10 THEN 1250
1240 PRINT "A-19 2 Camadas                22"
1250 PRINT "A-19 3 Camadas                23"
1260 PRINT
1270 IF XX < 14 THEN 1300
1280 PRINT "RTP (14)                      33"
1290 PRINT
1300 GOTO 1620
1310 REM MODELL 100-380
1320 PRINT "SG   2 Camadas                12"
1330 PRINT "SG   3 Camadas                13"
1340 PRINT "SG   4 Camadas                14"
1350 PRINT
1360 PRINT "A-19 2 Camadas                22"
1370 PRINT "A-19 3 Camadas                23"
1380 PRINT "A-19 4 Camadas                24"
1390 PRINT "A-19 5 Camadas                25"
1400 PRINT
1410 IF XX >=18 THEN 1460
1420 IF XX >=15 THEN 1440
1430 GOTO 1480
1440 PRINT "RTP (18)                      32"
1450 GOTO 1470
1460 PRINT "RTP (22)                      31"
1470 PRINT
1480 GOTO 1620
1490 REM MODELL 550
1500 PRINT "SG   2 Camadas                12"
1510 PRINT "SG   3 Camadas                13"
1520 PRINT "SG   4 Camadas                14"
1530 PRINT "SG   5 Camadas                15"
1540 PRINT
1550 PRINT "A-19 2 Camadas                22"
1560 PRINT "A-19 3 Camadas                23"
1570 PRINT "A-19 4 Camadas                24"
1580 PRINT "A-19 5 Camadas                25"
1590 PRINT
1600 PRINT "RTP (22)                      31"
1610 PRINT
1620 PRINT "Informe codigo do enchimento desejado  ";
1630 INPUT E(12)
1640 FOR I=1 TO 9
1650 IF E(12)=B(I) THEN 1720
1660 NEXT I
1670 IF E(12) > 33 THEN 1690
1680 IF E(12) > 30 THEN 1700
1690 GOTO 970
1700 E(17)=1
1710 GOTO 1740
1720 REM
1730 E(17)=0
1740 REM
1750 IF E(17)=1 THEN 1770
1760 GOTO 1790
1770 KT=1
1780 GOTO 1880
1790 IF E(12)<20 THEN 1830
1800 REM TYP A
1810 KT=0
1820 GOTO 1850
1830 'PRINT "Tipo  (SG = 1    SGM = 2)        ";
1840 KT=2  :  REM INPUT KT
1841 'IF KT <>1 AND KT <>2 THEN 1830
1850 PRINT "Standard = 1     Silencioso = 2  ";
1860 INPUT SS
1870 IF E(17)=0 THEN 1890
1880 SS=1
1890 IF YY=0 THEN 2170
1900 REM BESTIMMUNG DER LUFTGESCHWINDIGKEIT
1910 IF SS=1 THEN 2050
1920 REM SILENCIOSO
1930 IF KT=0 THEN  1960
1940 IF KT=1 THEN 1990
1950 IF KT=2 THEN 2020
1960 REM A-12
1970 E(10)=2.25
1980 GOTO 2170
1990 REM SG
2000 E(10)=1.9
2010 GOTO 2170
2020 REM SGM
2030 E(10)=2.25
2040 GOTO 2170
2050 REM STANDARD
2060 IF KT=0 THEN 2090
2070 IF KT=1 THEN 2120
2080 IF KT=2 THEN 2150
2090 REM A-12
2100 E(10)=2.8
2110 GOTO 2170
2120 REM SG
2130 E(10)=2.5
2140 GOTO 2170
2150 REM SGM
2160 E(10)=2.8
2170 E(19)=KT
2180 E(18)=SS
2190 RETURN