from .analise_2030 import analise_2030
import math


def analise_4580(K9, P0, Analise=0):

    A2 = 1
    K8 = K9/1.5-6
    if K9 > 2:
        I5 = 0
        L8 = K9**0.15*46-63
        L9 = (P0/1013)**0.5
        A1 = 95*(P0/1013)**0.3
        K8 = L8*L9
        if K8 > A1:
            K8 = A1
        while Analise == 0:
            I5 = I5+1
            if I5 < 50:
                L8 = K8
                L9 = K8
                L7 = 100
                L6 = P0
                L5 = 0

                get_2030 = analise_2030(L5, L6, L7, L8, L9)
                L2 = get_2030[0]
                L7 = get_2030[1]
                A1 = get_2030[2]
                L1 = get_2030[3]
                L3 = get_2030[4]
                L4 = get_2030[5]
                P5 = get_2030[6]
                P6 = get_2030[7]
                P7 = get_2030[8]
                P8 = get_2030[9]
                P9 = get_2030[10]
                A1 = 1.2+0.0105*(K9+50)
                A2 = abs(K9-L4)/4

                if K9 > 11:
                    A3 = 0.33+math.log(K9)*0.21
                    A1 = ((L4+K9)/26+1.8)**A3
                    A2 = abs(1-K9/L4)

                K8 = K8+(K9-L4)/A1
                if A2 < 0.0001:
                    break
            else:
                break
        
    return [K8, K9, I5, L1, L2, L3, L4, L5, L6, L7, L8, L9, P5, P6, P7, P8, P9, A1, A2, A3]
