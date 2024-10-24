from .analise_2030 import analise_2030


def analise_4880(T1, T2, C0, L, H1, P0):
    try:
        F8 = 0
        Z = T1 - T2
        N = int((Z / 2 + 5) / 2) * 2 + 1
        D9 = Z / (N - 1)
        D8 = D9 * C0 / L
        K = 0
        for J in range(N):
            T0 = T2 + D9 * J
            H7 = H1 + D8 * J
            L9 = T0
            L8 = T0
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
            H6 = L4
            I4 = int((J + 2) / 2) - int((J + 1) / 2) + 4
            if J + 1 == 1 or J + 1 == N:
                I4 = 1
            else:
                if I4 != 5:
                    I4 = 1
                else:
                    I4 = 2

            if H6 <= H7:
                F8 = 1
            K = K + D9 * C0 / (H6 - H7) * I4

        # Prestar atenção nessa diferença
        K = K / 3 * 2
        return [Z, N, D9, D8, T0, H7, L9, L8, L6, L5, L2, L7, L4, H6, I4, K, F8]

    except Exception as e:
        print(f"An error occurred: {e}")
        return None
