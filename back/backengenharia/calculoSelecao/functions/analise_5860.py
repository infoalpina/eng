from .analise_4880 import analise_4880
from .analise_5200 import analise_5200


def analise_5860(Z, C0, L, H1, P0, J7, J9, R, A, N1, H, K, D1, T1, T2, D, Kv, Hvalue):

    # 6070
    T9 = T2
    T8 = T1
    D5 = D1
    D1 = 100
    U8 = T2
    U9 = D
    T7 = 0.4
    V9 = 1
    if D5 < 100:
        V9 = -1
    T7 = T7*V9
    while True:
        T1 = T1+T7
        T2 = T2+T7
        get_4880 = analise_4880(T1, T2, C0, L, H1, P0)
        Z = get_4880[0]
        N = get_4880[1]
        D9 = get_4880[2]
        D8 = get_4880[3]
        T0 = get_4880[4]
        H7 = get_4880[5]
        L9 = get_4880[6]
        L8 = get_4880[7]
        L6 = get_4880[8]
        L5 = get_4880[9]
        L2 = get_4880[10]
        L7 = get_4880[11]
        L4 = get_4880[12]
        H6 = get_4880[13]
        I4 = get_4880[14]
        Kv = get_4880[15]
        F8 = get_4880[16]
        get_5200 = analise_5200(K, J7, J9, R, A, N1, H, Z, D1, L, Hvalue)
        As = get_5200[0]
        K0 = get_5200[1]
        M = get_5200[3]

        # As,J6,K3
        D = Kv*100/(L**M*K0)
        # analisar D tem alguma ccoisa de errada no mesmo
        # print(D,Kv,L,M,K0)
        V8 = 1
        if D < 100:
            V8 = -1
        if V8 == V9:
            U8 = T2
            U9 = D
        else:
            U6 = (U8-T2)/(U9-D)
            U5 = U8-U6*U9
            U7 = U6*100+U5-T9
            T1 = T8
            T2 = T9
            D1 = D5
            get_4880 = analise_4880(T1, T2, C0, L, H1, P0)
            Z = get_4880[0]
            N = get_4880[1]
            D8 = get_4880[2]
            D9 = get_4880[3]
            T0 = get_4880[5]
            H7 = get_4880[6]
            L9 = get_4880[7]
            L8 = get_4880[8]
            L7 = get_4880[9]
            L6 = get_4880[10]
            L5 = get_4880[11]
            L2 = get_4880[12]
            get_5200 = analise_5200(K, J7, J9, R, A, N1, H, Z, D1, L, Hvalue)
            As = get_5200[0]
            K0 = get_5200[1]
            M = get_5200[3]
            D = Kv*100/(L**M*K0)
            return [D, D1, D5, D8, D9, H7, K, K0, L, L2, L5, L6, L7, L8, L9, M, N, T0, T1, T2, T7, T8, T9, V8, V9, Z, U6, U5, U7, As]
