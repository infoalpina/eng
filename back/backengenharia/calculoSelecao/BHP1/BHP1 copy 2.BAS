5 REM ESTE PROGRAMA CHAMA-SE  "BHP1"
10 REM
20 REM            
30 REM
40 REM                   JJ.BHP / JJ.SKALP
50 REM
60 REM                  3.TEIL   BERECHNUNG DER VENTILATORLEISTUNG
70 REM
80 REM
90 CC=0
92 DIM INDVA1(8,2),INDVA2(8,2),INDVA3(8,2),INDVA4(8,2),PCMAX(8,2),QMIN(8,2)
100 DIM E(20)
110 DIM ISW(20)
120 DIM ISZ(20)
130 DIM IIW(20)
140 DIM IIZ(20)
150 DIM SWI(20)
160 DIM SZ(20)
170 DIM VZI(20)
180 DIM VWI(20)
190 DIM YD(20)
200 DIM MN(20)
210 DIM XD(20)
220 DIM XM(20)
230 DIM MM(20)
240 DIM SDI(20)
250 DIM VDI(20)
260 DIM MIS(20)
270 DIM MI(20)
280 DIM FC(20)
290 DIM DM(20)
300 DIM S(22,5)


310 OPEN "I",#1,"BHP"
320 INPUT#1,S(J9,1),S(J9,2),D4,V5,R5,W,U7
330 CLOSE #1
340 REM MODELLNUMMERN (MODELO)
350 DATA 3,4,8,12,16,20,25,32,40,50,63,80,100,125,155,180,240,310,380,550
360 FOR I=1 TO 20
370 READ MN(I)
380 NEXT I
390 REM FREIE VENTILATORFLAECHE : (AREA LIVRE DO VENTILADOR)
400 DATA 0.14,0.14,0.2,0.28,0.43,0.43,0.54,0.54,1.08,1.08,1.55,2.21,2.21,3.42,3.42,4.33,5.45,6.78,8.7,10.94
410 FOR I=1 TO 20
420 READ FC(I)
430 NEXT I
440 REM DURCHMESSER DER VENTILATOREN (DIAMETRO DO VENTILADOR)
450 DATA 0.45,0.45,0.53,0.62,0.79,0.79,0.91,0.91,1.23,1.23,1.48,1.75,1.75,2.24,2.24,2.5,2.8,3.15,3.55,4.00
460 FOR I=1 TO 20
470 READ DM(I)
480 NEXT I
490 REM MOTOREN FUER SGM,A-12 CLASSE I
500 DATA 0.75,0.75,1.5,2,3,4,7.5,7.5,7.5,7.5,10,15,15,20,25,30,30,40,50,50
510 FOR I=1 TO 20
520 READ MI(I)
530 NEXT I
540 REM MOTOREN FUER SG CLASSE I
550 DATA 0.5,.5,1,1.5,2,3,4,5,5,5,7.5,10,10,12.5,12.5,20,25,30,40,50
560 FOR I=1 TO 20
570 READ MIS(I)
580 NEXT I
590 REM VENTILATOR DREHZAHLEN FUER SGM,A-12 CLASSE I (ROTACAO DO VENTILADOR)
600 DATA 1750,1750,1750,1750,1150,1150,1150,1150,850,850,684,555,555,437.5,437.5,389,389,350,287,230
610 FOR I=1 TO 20
620 READ VDI(I)
630 NEXT I
640 REM VENTILATOR DREHZAHLEN FUER SG CLASSE I (ROTACAO)
650 DATA 1750,1750,1750,1150,1150,1150,850,850,850,850,700,555,555,437.5,437.5,389,389,350,287,230
660 FOR I=1 TO 20
670 READ SDI(I)
680 NEXT I
690 REM MOTOREN FUER SGM,A-12 CLASSE II
700 DATA 0.75,0.75,0.75,1.5,3,3,5,5,4,4,7.5,7.5,10,10,12.5,15,20,25,30,40
710 FOR I=1 TO 20
720 READ MM(I)
730 NEXT I
740 REM MOTOREN FUER SG CLASSE II
750 DATA 0.5,0.5,0.5,0.75,1.5,1.5,2,3,2,2,3,5,5,7.5,7.5,10,10,15,15,20
760 FOR I=1 TO 20
770 READ XM(I)
780 NEXT I
790 REM DREHZAHLEN FUER SGM,A-12 CLASSE II (ROTACAO DO VENTILADOR)
800 DATA 1750,1750,1370,1150,941,941,850,850,684,684,555,460,460,328.5,328.5,287.5,256,230,230,189
810 FOR I=1 TO 20
820 READ XD(I)
830 NEXT I
840 REM DREHZAHLEN FUER SG CLASSE II (ROTACAO DO VENTILADOR)
850 DATA 1370,1370,1150,906,850,850,733,733,684,684,555,460,460,328.5,328.5,287.5,256,230,230,189
860 FOR I=1 TO 20
870 READ YD(I)
880 NEXT I
890 REM FLUEGELZAHL SGM,A-12 CLASSE I (NUMERO DE PAS)
900 DATA 10,10,5,5,12,12,8,8,8,8,10,10,10,10,10,10,10,10,10,10
910 FOR I=1 TO 20
920 READ VZI(I)
930 NEXT I
940 REM FLUEGELWINKEL SGM,A-12 CLASSE I (ANGULO ATAQUE DAS PAS)
950 DATA 35,35,40,35,30,35,40,40,0,0,0,0,0,0,0,0,0,0,0,0
960 FOR I=1 TO 20
970 READ VWI(I)
980 NEXT I
990 REM FLUEGELZAHL FUER SG CLASSE I
1000 DATA 5,5,5,10,6,6,8,16,8,8,10,10,10,10,10,10,10,10,10,10
1010 FOR I=1 TO 20
1020 READ SZ(I)
1030 NEXT I
1040 REM FLUEGELWINKEL SG CLASSE I
1050 DATA 35,35,35,45,30,35,45,45,0,0,0,0,0,0,0,0,0,0,0,0
1060 FOR I=1 TO 20
1070 READ SWI(I)
1080 NEXT I
1090 REM FLUEGELZAHL SGM,A-12 CLASSE II (NUMERO DE PAS)
1100 DATA 5,10,5,10,12,12,16,16,8,8,10,10,10,10,10,10,10,10,10,10
1110 FOR I=1 TO 20
1120 READ IIZ(I)
1130 NEXT I
1140 REM FLUEGELWINKEL SGM,A-12 CLASSE II (ANGULO DE ATAQUE DAS PAS)
1150 DATA 40,35,40,40,35,40,40,45,0,0,0,0,0,0,0,0,0,0,0,0
1160 FOR I=1 TO 20
1170 READ IIW(I)
1180 NEXT I
1190 REM FLUEGELZAHL SG CLASSE II
1200 DATA 5,5,10,10,6,6,8,16,8,8,10,10,10,10,10,10,10,10,10,10
1210 FOR I=1 TO 20
1220 READ ISZ(I)
1230 NEXT I
1240 REM FLUEGELWINKEL SG CLASSE II (ANGULO DE ATAQUE DAS PAS)
1250 DATA 40,40,35,45,35,40,35,40,0,0,0,0,0,0,0,0,0,0,0,0
1260 FOR I=1 TO 20
1270 READ ISW(I)
1280 NEXT I


1290 OPEN "I",#1,"ZEIN"
1300 FOR I=1 TO 20
1310 INPUT#1,E(I)
1320 NEXT I
1330 CLOSE #1
1340 OPEN "I",#1,"DASG"
1350 INPUT#1,M0,I9,T1,Z,T2,T3,P1,T4,P0,W0,F0,K1,N0,N1,D1,N2,D6
1360 CLOSE #1
1370 FOR I=1 TO 20



1380 IF S(J9,1)=MN(I) THEN 1410
1390 NEXT I
1400 STOP


function 1410() {   
    1410 REM MODELLNUMMER BESTIMMT
    1420 IF E(18)=1 THEN 1450
    1430 IF E(18)=2 THEN 1930
    1440 STOP
}


function 1450() {
    1450 REM CLASSE I
    1460 BB$="I"
    1470 IF E(19)=0 THEN 1510
    1480 IF E(19)=1 THEN 1670
    1490 IF E(19)=2 THEN 1510
    1500 STOP
}



function 1510(){
    1510 REM A ODER SGM
    1520 IF E(12)<20 THEN 1600
    1530 EB$="A-19"
    1540 CC=E(12)-20
    1550 UU=MI(I)
    1560 VV=VDI(I)
    1570 WW=VZI(I)
    1580 XX=VWI(I)
    1590 GOTO 2220
}



function 1600(){
    1600 EB$="SGM"
    1610 CC=E(12)-10
    1620 UU=MI(I)
    1630 VV=VDI(I)
    1640 WW=VZI(I)
    1650 XX=VWI(I)
    1660 GOTO 2220
}



function 1670(){
    1670 REM SG
    1680 IF E(17)=1 THEN 1700
    1690 GOTO 1800
    1700 IF K1=31 THEN 1740
    1710 IF K1=32 THEN 1760
    1720 IF K1=33 THEN 1780
    1730 STOP
}





function 1740() {
    1740 EB$=" RTP (22)"
    1750 GOTO 1810
    1760 EB$=" RTP (18)"
    1770 GOTO 1810
    1780 EB$=" RTP (14)"
    1790 GOTO 1810
    1800 EB$="SG"
    1810 CC=E(12)-10
    1820 IF K1 > 30 AND S(J9,1) <> 100 THEN 1880
    1830 IF K1 < 30 THEN 1880
    1840 IF K1 > 30 AND S(J9,1)=100 THEN 1860
    1850 STOP
}



function 1860() {
    1860 UU=12.5
    1870 GOTO 1890
    1880 UU=MIS(I)
    1890 VV=SDI(I)
    1900 WW=SZ(I)
    1910 XX=SWI(I)
    1920 GOTO 2220
}


function 1930() {
    1930 REM CLASSE II
    1940 BB$="II"
    1950 IF E(19)=0 THEN 1990
    1960 IF E(19)=1 THEN 2150
    1970 IF E(19)=2 THEN 1990
    1980 STOP
}


function 1990() {
    1990 REM SGM ODER A
    2000 IF E(12)<20 THEN 2080
    2010 EB$="A-19"
    2020 CC=E(12)-20
    2030 UU=MM(I)
    2040 VV=XD(I)
    2050 WW=IIZ(I)
    2060 XX=IIW(I)
    2070 GOTO 2220
}



function 2080() {
    2080 EB$="SGM"
    2090 CC=E(12)-10
    2100 UU=MM(I)
    2110 VV=XD(I)
    2120 WW=IIZ(I)
    2130 XX=IIW(I)
    2140 GOTO 2220
}



function 2150() {
    2150 REM SG
    2160 EB$="SG"
    2170 CC=E(12)-10
    while 
    2180 UU=XM(I)
    2190 VV=YD(I)
    2200 WW=ISZ(I)
    2210 XX=ISW(I)
    2220 REM AUSGABE DES MODELLS
    2230 CLS
    2231 REM
    2240 PRINT "JJ.BHP"
    2260 IF E(17)=0 THEN 2290
    2270 PRINT S(J9,1)"/"EB$"-"BB$;
    2280 GOTO 2300
}








function 2290() {
    2290 PRINT S(J9,1)"/"CC"-"EB$"-"BB$;
    2300 PRINT TAB(59) "Delta T = ";
    2310 PRINT USING "##.##";U7;
    2320 PRINT " K"
    2330 IF S(J9,1)>50 THEN 2430
    2340 REM BESTIMMUNG DIREKT INDIREKT (ACOPLAMENTO DIRETO OU INDIRETO ?)
    2350 IF VV=684 THEN 2400
    2360 IF VV=850 THEN 2400
    2370 IF VV=1150 THEN 2400
    2380 IF VV=1750 THEN 2400
    2390 GOTO 2430
}
    2400 REM DIREKT
    2410 IND=1
    2420 GOTO 2450
    2430 REM INDIREKT
    2440 IND=0


function 2450() {   
    2450 FFC=FC(I)
    2460 DDV=DM(I)
    2470 UFG=VV/60*3.14159*DDV
    2480 IF S(J9,1)<=32 THEN 6000
    2490 IF S(J9,1)<=550 THEN 2510
    2500 STOP
}

-----------------------------------------------------------------------------------------------------------

function 2510() {
    while True
    2510 REM KUEHLTURM 40-550
    2520 REM  PRINT
    2530 PRINT
    2540 PHI=V5/(FFC*UFG)
    2550 SIGMA=(V5/FFC)^2/2*R5/D4
    2560 PRINT "Ventilador ALPINA   9 E       "WW" Pas "
    2570 PRINT
    2580 PRINT "Phi   :";
    2590 PRINT USING "##.###";PHI;
    2600 PRINT TAB(30)"Sigma :";
    2610 PRINT USING "###.##";SIGMA
    2612 PRINT
    2614 '**** SO P/TORRES MENORES QUE A 32 : GOSUB 4900
    
    2618 IF I>10
        THEN  2626
    2620 ETA=RE8 : BETA=AN8(PY2,FY2)
        2622 GOTO 2630
}

-----------------------------------------------------------------------------------------------------------

function 2626() {
    2626 ETA=RE10 : BETA=AN(PY2,FY2)
    2630 PRINT "Eta  (%) ";
    2634 IF ETA=0 THEN INPUT ETA
    2636 PRINT USING"###.#";ETA
    2640 REM ****************************** INPUT ETA
    2650 PRINT "Beta (') ";
    2654 IF BETA=0 THEN INPUT BETA
    2656 PRINT USING"###.#";BETA
    2660 REM ****************************** INPUT BETA
    2670 PRINT
    2680 PP=V5*D4/1000/ETA*100*1.36
    2690 IF IND=1 THEN 2710
    2700 PP=PP*1.1
    2710 PRINT "Potencia do motor       :";
    2720 PRINT USING "###.#";UU;
    2730 PRINT " CV"
    2740 PRINT "Potencia cons. do vent. :";
    2750 PRINT USING "###.#";PP;
    2760 PRINT " CV"
    2770 KK=1
    2780 GOTO 3170
}

-----------------------------------------------------------------------------------------------------------


-----------------------------------------------------------------------------------------------------------
function 2804() {
    2804 IF I>10 OR I<1 OR E(18)>2 OR E(18)<1 OR V5<QMIN(I,E(18)) THEN 2810
    2805 SD=V5^3*INDVA1(I,E(18))+V5^2*INDVA2(I,E(18))+V5*INDVA3(I,E(18))+INDVA4(I,E(18))
    2810 PRINT
    2820 IF DDV<=.79 THEN 2850
    2830 PRINT "VA /"DDV*1000"/"WW"/"XX
    2840 GOTO 2860
}
 

-----------------------------------------------------------------------------------------------------------
function 2850 () {
    2850 PRINT "VAP/"DDV*1000"/"WW"/"XX
    2860 REM ANZEIGE VON DELTA P  UND LUFTVOLUMENSTROM
    2870 BETA=XX
    2880 PRINT
    2890 DP=INT(D4/9.810001*10+.5)/10
    2900 PRINT "Delta P          : ";
    2910 PRINT USING "###.#";DP;
    2920 PRINT TAB(28) " MMCA"
    2930 PRINT "Vazao do ar      : ";
    2940 PRINT USING "###.#";V5;
    2950 PRINT TAB(28)" M3/S"
    2960 PRINT "Rotacao          : ";
    2970 PRINT USING "#####";VV;
    2980 PRINT TAB(28)" RPM"
    2990 PRINT
    3000 PRINT "Potencia do motor: ";
    3001 IF UU >= 1 THEN 3010
    3002 PRINT USING "##.##";UU;
    3003 GOTO 3020
}


-----------------------------------------------------------------------------------------------------------
function 3010() {
    3010 PRINT USING "###.#";UU;
    3020 PRINT TAB(28)" CV"
    3030 PRINT
    3040 PRINT "Pressao estatica (MMCA) do diagramma  : ";
    3050 IF V5<QMIN(I,E(18)) THEN INPUT SD : GOTO 3060
    3055 PRINT USING"##.#";SD
    3060 PRINT "Potencia consumida (BHP) do diagramma : ";
    3070 IF V5<QMIN(I,E(18)) THEN INPUT PP : GOTO 3080
    3075 PP=PCMAX(I,E(18)) : PRINT USING"##.#";PP
    3080 IF IND=1 THEN 3100
    3090 PP=PP*1.1
    3100 REM VA
    3110 IF SD=DP THEN 3160
    3120 W2=W*((SD/(D4/9.810001))^.5)
    3130 W2=(W2+W)/2
    3140 KK=0
    3150 GOTO 3170
}


-----------------------------------------------------------------------------------------------------------
function 3160(){
    3160 KK=0 : W2=W
    3170 PRINT
    3180 IF PP<UU THEN 3220
    3190 PRINT "Pot. cons. do ventilador e "INT((PP/UU-1)*100)" % maior";
    3200 PRINT " que a potencia do motor"
    3210 GOTO 3240
}


-----------------------------------------------------------------------------------------------------------
function 3220(){
    3220 PRINT "Pot. cons. do ventilador e "INT((UU/PP-1)*100)" % menor";
    3230 PRINT " que a potencia do motor"
    3240 REM ANHAENGEN DER ANDEREN PROGRAMMTEILE
    3250 PRINT
    3260 IF KK=0 THEN 3350
    3270 IF IND=0 THEN 3320
    3280 B1=UU/1.1
    3290 B2=PP
    3300 W2=W/((B2/B1)^(1/3))
    3310 GOTO 3350
}


-----------------------------------------------------------------------------------------------------------
function 3320(){
    3320 B1=UU/1.21
    3330 B2=PP/1.1
    3340 W2=W/((B2/B1)^(1/3))
    3350 REM 
    3360 PRINT "Velocidade do ar original          : ";
    3370 PRINT USING "##.##";W;
    3380 PRINT " M/S"
    3390 PRINT "Velocidade do ar sugerida          : ";
    3400 PRINT USING "##.##";W2;
    3410 PRINT " M/S"
    3420 PRINT
    3430 PRINT "Calculo com nova velocidade do ar (Sim=1,Nao=0)  ";
    3440 INPUT JN
    3450 IF JN=1 THEN 3480
    3460 IF JN=0 THEN 3640
    3470 GOTO 3430
}


-----------------------------------------------------------------------------------------------------------
function 3480() {
    3480 REM
    3490 W0=W2
    3500 E(10)=W2
    3510 OPEN "O",#1,"DASG"
    3520 PRINT#1,M0;I9;T1;Z;T2;T3;P1;T4;P0;W0;F0;K1;N0;N1;D1;N2;D6
    3530 CLOSE #1
    3540 OPEN "O",#1,"ZEIN"
    3550 FOR I=1 TO 20
    3560 PRINT#1,E(I)
    3570 NEXT I
    3580 CLOSE #1
    3590 IF E(17)=0 THEN 3620
    3600 CHAIN"RTP"
    3610 GOTO 3840
}


-----------------------------------------------------------------------------------------------------------
function 3620() {
    3620 CHAIN"HAUPT"
    3630 GOTO 3840
}


-----------------------------------------------------------------------------------------------------------
function 3640() {
    3640 REM
    3650 PRINT "Calculo com outra velocidade do ar (Nao=0)       ";
    3660 INPUT WN
    3670 IF WN<=0 THEN 3710
    3680 IF WN > 3.5 THEN 3640
    3690 W2=WN
    3700 GOTO 3480
}


-----------------------------------------------------------------------------------------------------------
function 3710() {
    3710 REM
    3720 PRINT "Saida via impressora  (Sim=1,Nao=0)              ";
    3730 INPUT JN
    3740 IF JN=0 THEN 3840
    3750 IF JN=1 THEN 3770
    3760 GOTO 3720
}

-----------------------------------------------------------------------------------------------------------
function 3770() {
    3770 CC=0
    3780 OPEN "O",#1,"BP"
    3790 PRINT#1,PP;BETA;DDV;WW;XX;UU;UFG;VV
    3800 CLOSE #1
    3810 IF CC=1 THEN 3830
    3820 CHAIN"SKAUS"
    3830 CHAIN"SKAUS"
    3840 CLS
    3850 PRINT "                                                                    JJ.BHP"
    3860 PRINT
    3870 PRINT "Codigos das operacoes :"
    3880 PRINT
    3890 PRINT "Novo modelo , novo enchimento .............. 1"
    3900 PRINT "Novo calculo ............................... 2"
    3910 PRINT "Novos dados com o mesmo modelo ............. 3"
    3920 PRINT "Saida via impressora ....................... 4"
    3930 PRINT "Fim ........................................ 5"
    3940 PRINT
    3950 PRINT "Informe codigo da operacao desejada ";
    3960 INPUT OP
    3970 IF INT(OP)<>OP THEN 3840
    3980 IF OP>=1 AND OP <=5 THEN 4000
    3990 GOTO 3840 
}


-----------------------------------------------------------------------------------------------------------
function 4000() {
    4000 IF OP=1 THEN 4050
    4010 IF OP=2 THEN 4060
    4020 IF OP=3 THEN 4070
    4030 IF OP=4 THEN 4080
    4040 IF OP=5 THEN 4090
    4050 CHAIN"MOD"
    4060 CHAIN"SKALP"
    4070 CHAIN"ZEIN"
    4080 CC=0 : GOTO 3780
    4090 END
}


function 6000() {
    6000 '****  COMECO DA ROTINA ***********
    6300 ' DADOS DOS VENTILADORES VAP P/EQUACAO E POTENCIA MAX CONSUMIDA
    6310 ' MODELOS 3 ATE 32  - CLASSE I
    6320 DATA -6.924121,6.518816,8.003197,14.77475,0.65,0.7
    6330 DATA -6.924121,6.528816,8.003197,14.77475,0.65,0.7
    6340 DATA 9.767746,-70.87596,159.0908,-92.15337,1.0,1.4
    6350 DATA 3.038037,-31.40483,97.38659,-65.24182,1.8,1.8
    6360 DATA -0.6172139,5.93138,-23.23133,63.09909,2.7,3.3
    6370 DATA -0.4100487,4.352521,-17.12177,54.19853,3.5,4.4
    6380 DATA 0.1239426,-3.944538,35.15052,-66.43436,6.75,5.25
    6400 DATA 0.1239426,-3.944538,35.15052,-66.43436,6.75,5.25
    6420 ' MODELOS 3 ATE 32 ASP - CLASSE II
    6430 DATA 25.46254,-118.7491,169.803,-61.07321,0.5,.88
    6440 DATA -6.924121,6.528816,8.003197,14.77475,0.65,0.7
    6450 DATA 13.49765,-75.55321,131.5445,-59.90331,0.5,1.1
    6460 DATA 1.923795,-21.04984,63.07926,-39.54035,1.1,1.8
    6470 DATA -0.4910716,4.202569,-13.26359,35.06947,1.92,3.6
    6480 DATA -0.6744705,8.197171,-35.90345,75.21599,2.4,4.25
    6490 DATA 2.245973E-02,-1.920561,17.50959,-19.70236,4.0,3.8
    6510 DATA 3.811298E-02,-2.275704,22.29525,-37.83498,4.6,5.75
    6530 '
    6540 FOR QU1=1 TO 2
    6550 FOR QU2=1 TO 8
    6560 READ INDVA1(QU2,QU1)
    6561 READ INDVA2(QU2,QU1)
    6562 READ INDVA3(QU2,QU1)
    6563 READ INDVA4(QU2,QU1)
    6564 READ PCMAX(QU2,QU1)
    6566 READ QMIN(QU2,QU1)
    6570 NEXT QU2
    6580 NEXT QU1
    6600 RETURN
}