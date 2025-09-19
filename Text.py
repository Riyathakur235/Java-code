
#for i in range(2,101,2):
# print(i)
# sum of digits
#num=123
#total=0
#for digits in str(num):
 #   total+=int(digits)
#print("sum of digits:",total)    

#Reverse a string
#text="my name is riya"
#reversed=" "
#for ch in text:
 #   reversed=ch + reversed
#print("reversed",reversed)    

#Factorial
#n=7
#fact=1
#for i in range(1,n+1):
  #  fact=fact*i
#print("factorial",fact)    

#count voweel or consonents
# text="in this code we will count vowel or consonents"
# vowels="aeiouAEIOU"
# v_count =0
# c_count=0
# for ch in text:
#     if ch.isalpha():
#         if ch is vowels:
#             v_count+=1
#         else:
#             c_count+=1
# print("vowels",v_count ,"consonents",c_count)               

#table
# for i in range (1,12):
#     for j in range(1,11):
#         print(i,"*",j,"=",i*j)
# print()        

#largest number in a list
# number=[5,6,8,43,4]
# largest=number[0]
# for num in number:
#     if num>largest:
#         largest=num
# print("largest: ",largest)        

#prime no.check
num=29
is_prime=True
for i in range(2,num):
    if num%i==0:
        is_prime=False
        break
print(num,"is prime?",is_prime)    

