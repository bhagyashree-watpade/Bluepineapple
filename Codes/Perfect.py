#program to print all perfect numbers between 1 to n 
#import math
'''
steps :
    1.accept the upper limit for the range 
    2.sum up all the divisors of the each number from 1 to n
    3.compar the sum with the number
    4. if num == sum then the number is perfect number
    5. append it to the list of perfect number
    
'''


#int(math.sqrt(i))

def divisors(n) :
    perfect_Number = []
    for i in range(1,n):
        sum = 0
        for j in range(1,i//2+1):
            if(i%j==0):
                sum+=j
             
        if(sum==i):
            perfect_Number.append(i)
    
    print("Perfect numbers in the range of " + str(1) + " to "+ str(num) + " are : ")
    for t in perfect_Number:
        print(t,end=", ")     

num = int(input("Enter the number : "))
#function call
divisors(num)


