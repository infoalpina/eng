def analise_2030(L5, L6, L7, L8, L9):
    if L6 == 0 and L5 != 0:
        L4 = ((288-6.5*L5/1000)/288)**5.255
        L6 = 1013.25*L4
    elif L5 == 0:
        L6 = 1013.25
    # calcula L9 == 0
    if L9 == 0:
        # 2240
        I5 = 0
        M8 = -50
        M9 = 100
        L9 = L8+2
        J = 0
        while J == 0:
            P8 = L9
            A1 = (7.4412-((67-P8)/420)**2)*P8/(P8+235)
            P9 = 6.1075*10**A1
            if P8 >= 67:
                A1 = (79.5-P8)**2/1.1-99
                P9 = P9+A1*9.807201*10**(-4)
            P5 = P9
            P8 = L8
            A1 = (7.4412-((67-P8)/420)**2)*P8/(P8+235)
            P9 = 6.1075*10**A1
            if P8 >= 67:
                A1 = (79.5-P8)**2/1.1-99
                P9 = P9+A1*9.807201*10**(-4)
            P6 = P9
            A1 = 0.667
            if L8 < 0:
                A1 = .573
            P7 = P6-A1*(L9-L8)*L6/1006.7
            L3 = 0.622*P7/(L6-P7)
            L1 = P7/P5*100
            A1 = 2501.6+1.86*L9
            L4 = 1.006*L9+L3*A1
            L2 = .3483*L6/(L9+273.15)-.1316*P7/(L9+273.15)
            if abs(L1-L7) > 0.01:
                if L7 > L1:
                    M9 = L9
                else:
                    M8 = L9
                L9 = (M9+M8)/2
                if L9 < L8:
                    L9 = L8+1
                I5 = I5+1
                D9 = M9-M8
            if I5 > 50 or D9 < .001 or abs(L1-L7) < .01:
                J = 1
            

    # calcula L8 == 0
    if L8 == 0:
        # 2480
        if L7 == 0:
            I5 = 0
            M8 = -50
            M9 = 100
            L9 = L8+2
            J = 0
            while J == 0:
                P8 = L9
                A1 = (7.4412-((67-P8)/420)**2)*P8/(P8+235)
                P9 = 6.1075*10**A1
                if P8 >= 67:
                    A1 = (79.5-P8)**2/1.1-99
                    P9 = P9+A1*9.807201*10**(-4)
                P5 = P9
                P8 = L8
                A1 = (7.4412-((67-P8)/420)**2)*P8/(P8+235)
                P9 = 6.1075*10**A1
                if P8 >= 67:
                    A1 = (79.5-P8)**2/1.1-99
                    P9 = P9+A1*9.807201*10**(-4)
                P6 = P9
                A1 = 0.667
                if L8 < 0:
                    A1 = .573
                P7 = P6-A1*(L9-L8)*L6/1006.7
                L3 = 0.622*P7/(L6-P7)
                L1 = P7/P5*100
                A1 = 2501.6+1.86*L9
                L4 = 1.006*L9+L3*A1
                L2 = .3483*L6/(L9+273.15)-.1316*P7/(L9+273.15)
                if abs(L1-L7) > 0.01:
                    if L7 > L1:
                        M9 = L9
                    else:
                        M8 = L9
                    L9 = (M9+M8)/2
                    if L9 < L8:
                        L9 = L8+1
                    I5 = I5+1
                    D9 = M9-M8

                if I5 > 50 or D9 < .001 or abs(L1-L7) < .01:
                    J = 1

        elif L7 != 0:
            I5 = 0
            M8 = -50
            M9 = L9
            L8 = L9-2
            while J == 0:
                P8 = L9
                A1 = (7.4412-((67-P8)/420)**2)*P8/(P8+235)
                P9 = 6.1075*10**A1
                if P8 >= 67:
                    A1 = (79.5-P8)**2/1.1-99
                    P9 = P9+A1*9.807201*10**(-4)
                P5 = P9
                P8 = L8
                A1 = (7.4412-((67-P8)/420)**2)*P8/(P8+235)
                P9 = 6.1075*10**A1
                if P8 >= 67:
                    A1 = (79.5-P8)**2/1.1-99
                    P9 = P9+A1*9.807201*10**(-4)
                P6 = P9
                A1 = 0.667
                if L8 < 0:
                    A1 = .573
                P7 = P6-A1*(L9-L8)*L6/1006.7
                L3 = 0.622*P7/(L6-P7)
                L1 = P7/P5*100
                A1 = 2501.6+1.86*L9
                L4 = 1.006*L9+L3*A1
                L2 = .3483*L6/(L9+273.15)-.1316*P7/(L9+273.15)
                if abs(L1-L7) > 0.01:
                    if L7 < L1:
                        M9 = L8
                    else:
                        M8 = L8
                    L9 = (M9+M8)/2
                    if L8 >= L9:
                        L8 = L9-1
                    D9 = M9-M8
                    I5 = I5+1
                    if D9 > .001:
                        I5 = I5+1
                    D9 = M9-M8

                if I5 > 50 or D9 < .001 or abs(L1-L7) < .01:
                    J = 1
                

    # calcula L9<L8
    if L9 < L8:
        # 2240
        I5 = 0
        M8 = -50
        M9 = 100
        L9 = L8+2
        J = 0
        while J == 0:
            P8 = L9
            A1 = (7.4412-((67-P8)/420)**2)*P8/(P8+235)
            P9 = 6.1075*10**A1
            if P8 >= 67:
                A1 = (79.5-P8)**2/1.1-99
                P9 = P9+A1*9.807201*10**(-4)
            P5 = P9
            P8 = L8
            A1 = (7.4412-((67-P8)/420)**2)*P8/(P8+235)
            P9 = 6.1075*10**A1
            if P8 >= 67:
                A1 = (79.5-P8)**2/1.1-99
                P9 = P9+A1*9.807201*10**(-4)
            P6 = P9
            A1 = 0.667
            if L8 < 0:
                A1 = .573
            P7 = P6-A1*(L9-L8)*L6/1006.7
            L3 = 0.622*P7/(L6-P7)
            L1 = P7/P5*100
            A1 = 2501.6+1.86*L9
            L4 = 1.006*L9+L3*A1
            L2 = .3483*L6/(L9+273.15)-.1316*P7/(L9+273.15)
            if abs(L1-L7) > 0.01:
                if L7 > L1:
                    M9 = L9
                else:
                    M8 = L9
                L9 = (M9+M8)/2
                if L9 < L8:
                    L9 = L8+1
                I5 = I5+1
                D9 = M9-M8

                if I5 > 50 or D9 < .001 or abs(L1-L7) < .01:
                    J = 1
    P8 = L9
    A1 = (7.4412-((67-P8)/420)**2)*P8/(P8+235)

    P9 = 6.1075*10**A1
    if P8 >= 67:
        A1 = (79.5-P8)**2/1.1-99
        P9 = P9+A1*9.807201*10**(-4)
    P5 = P9
    P8 = L8
    A1 = (7.4412-((67-P8)/420)**2)*P8/(P8+235)
    P9 = 6.1075*10**A1
    if P8 >= 67:
        A1 = (79.5-P8)**2/1.1-99
        P9 = P9+A1*9.807201*10**(-4)
    P6 = P9
    A1 = 0.667
    if L8 < 0:
        A1 = .573
    P7 = P6-A1*(L9-L8)*L6/1006.7
    
    
    
    L3 = 0.622*P7/(L6-P7)
    L1 = P7/P5*100
    A1 = 2501.6+1.86*L9
    L4 = 1.006*L9+L3*A1
    L2 = 0.3483*L6/(L9+273.15)-0.1316*P7/(L9+273.15)
    L7 = L1
    return [L2,L7,A1,L1,L3,L4,P5,P6,P7,P8,P9]