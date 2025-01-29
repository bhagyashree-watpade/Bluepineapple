
#creating a language dictionary

'''
part1 : insertion
part2 : deletion
part3 : searching
part4 : display

'''

word_list = ["a","b","c","e","f","g"]
meaning = ["1st alpha ","2nd alpha","3rd alpha","5th alpha","6th alpha","7th alpha",]

#part 1:

'''
 # while inserting a new word consider the following points :
    1.check wether the word already exist in dictionary or not 
    1.1 :  if it exist then just show the msg that give word already exist in dictionary
    1.2 : else insert the word at its proper position by calling the function insert_word_in_order
'''

#function to find the existence of the word
def is_exist(word):
    is_found = -1
    for w in word_list:
        if(word==w):
            is_found = 1
            break
    return is_found


#function to insert the word and its meaning in dictionary at its proper position (in alphabetic order)

def insert_word_in_Order(new_word,word_meaning):
    #calling a function to check existence of the new word
    exist = is_exist(new_Word)
    if(exist != -1):
        print("\n"+new_Word + " already exist in the dictionary")
        return
    
    is_greater = 0
    is_smaller = 0
    for w in word_list:
        if(new_Word > w):
            is_greater +=1
            
        elif(new_Word < w):
            is_smaller +=1

    if(is_greater==0):
        word_list.append(new_Word)
        meaning.append(word_meaning)
        print("\n"+new_Word + " added to Dictionary")
    elif(is_greater!=0):
        word_list.insert(is_greater,new_Word)
        meaning.insert(is_greater,word_meaning)
        print("\n"+new_Word + " added to Dictionary")
    elif(is_smaller!=0):
        word_list.insert(is_smaller,new_Word)
        meaning.insert(is_smaller,word_meaning)
        print("\n"+new_Word + " added to Dictionary")
        
        
# part2 : deletion 

'''
steps : 
        1. find the existence of a word in dictionary
            if exist then just remove the word as well as its meaning  from the meaning dictionary 
            (for removing the word meaning find the index of the word and then remove the meaning of that word at that index )
            
            if word not exist, just show the msg that word does not exist in the dictionary
'''

def search_for_Word_meaning(word):
    exist = is_exist(word)
    if(exist == -1):
        print("\n"+new_Word + " does not exist in the dictionary")
        return
    #i=-1 -> to trace the index of the word so that we use to remove the word meaning 
    i = -1
    for w in word_list:
        i +=1
        if(w == word):
            dictionary = "\n".join("{}\t:\t  {}".format(x, y) for x, y in zip(word_list[i], meaning[i]))
            print("\n"+dictionary)
            break
            
            
#part 3 : searching 

def delete_word(word):
    exist = is_exist(word)
    if(exist == -1):
        print("\n"+new_Word + " not found in the dictionary")
        return
    
    i = -1
    for w in word_list:
        i +=1
        if(w == word):
            print("\n"+word_list[i] + " deleted successfully ")
            del word_list[i]
            del meaning[i]
            break
            


#print whole dictionary
def print_dictionary():
    print("\nDictionary is : \nWord\t:\tMeaning")
    dictionary = "\n".join("{}\t:\t  {}".format(x, y) for x, y in zip(word_list, meaning))
    print(dictionary)
    

# calling functions :

#print("Enter your choice : ")
while(True):
    print("\n\n******\t MENU \t******\n1.Insert a new word into dictionary \n2.Delete a word from dictionary\n3.search for meaning of a word\n4.Display Dictionary\n5.exit\n")
    ch = int(input("Enter your choice : "))
    if(ch==1):
        new_Word = input("\nEnter a word : ")
        word_meaning = input("ENter a word meaning : ")
        insert_word_in_Order(new_Word,word_meaning)
    elif(ch==2):
        new_Word = input("\nEnter a word to delete from dictionary : ")
        delete_word(new_Word)
    elif(ch==3):
        new_Word = input("\nEnter a word to search: ")
        search_for_Word_meaning(new_Word)
    elif(ch==4):
        print_dictionary()
    elif(ch==5):
        print("\nExiting !!!!\n")
        break
        
        

        
        
