#matrix multiplication


'''
STEPS : 
    1.accept the dimensions for two matrices :
    2. check wether the multiplication is possible or not
    3. if possible 
        3.1.Initialize both the matrix to 0 initially
        3.2 accept the matrix entries from user
        3.3 define a function to multiply this two matrices 
        3.4 print the resultant matrix
'''


#function to print the matrix

def printMatrix(result):
    
    for i in range(r1):
        for j in range(c2):
            print(result[i][j],end=" ")
        print("\n")
        
#function for multiplying two matrices

def Matrix_Multi(A,B,r1,c1,r2,c2):
    result =  [[0 for _ in range(r1)] for _ in range(c2)]
    for i in range(r1):
        for j in range(c1):
            for k in range(c2):
                result[i][j] += A[i][k]*B[k][j]
                
    print("\nA x B : ")
    printMatrix(result)
                
    
    
#function to accept the matrix
def acceptMatrix(mat,r,c):
    for i in range(r):
        for j in range(c):
            mat[i][j] = int(input())
        
 



#accept the dim for two matrix

r1 = int(input("Enter number of rows for first matrix :"))
c1 = int(input("Enter number of column for first matrix :"))

r2 = int(input("Enter number of rows for second matrix :"))
c2 = int(input("Enter number of column for second matrix :"))



A = []
B = []
#initializing matrix A,B to zero
for i in range(r1):
    r =[]
    for j in range(c1):
        r.append(0)
    A.append(r)
    

for i in range(r2):
    r =[]
    for j in range(c2):
        r.append(0)
    B.append(r)

'''
another way to initialize the matrix to 0 ( taken from geeks for geeks)
A = [[0 for _ in range(c1)] for _ in range(r1)]
B = [[0 for _ in range(c2)] for _ in range(r2)]
'''

if(r1==c2):
    print("Enter entries for first matrix : ")
    acceptMatrix(A,r1,c1)
    print("Enter entries for second matrix : ")
    acceptMatrix(B,r2,c2)
    print("Matrix A : ")
    printMatrix(A)
    print("Matrix B : ")
    printMatrix(B)
    Matrix_Multi(A,B,r1,c1,r2,c2)
    
else:
    print("Matrix multiplication not possible!!! ")

