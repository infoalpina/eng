import math

def calculaP9N9A9(C9,E9,L9,R9,D1):
    P9=C9*1000*E9/L9
    N9=0.023*(R9**0.8)*(P9**0.4)
    A9=N9*L9/D1
    return [P9,N9,A9]
