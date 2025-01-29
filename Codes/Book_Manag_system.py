
#Book management system (using postgresql)
import psycopg2
import psycopg2.extras


#add new book 

def add_new_Book(cur):
    print("\nEnter details of book to be added : \n")
    id = input("Enter book id : ")
    name = input("Enter a book name : ")
    author_name = input("ENter author name : ")
    str1 = 'insert into Book(Book_id,Book_name,Author) values (%s,%s,%s)'
    rec = (id,name,author_name)
    cur.execute(str1,rec)
    print("\nBook added ...")

#remove a book

def remove_Book(cur):
    name = input("\nENter book name : ")
    str1 = 'delete from Book where Book_name = %s'  
    cur.execute(str1,(name,))
    print("Book Deleted ....") 


#Display all the records.
def display_Books(cur):
    cur.execute('select * from Book')
    data=cur.fetchall()
    for i in data:
        print(i)


conn=None
cur=None

conn=psycopg2.connect(host='localhost',
                      port='5432',
                      user='postgres',
                      password='a',
                      dbname='connections')
cur=conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
str0='drop table if exists Book'
cur.execute(str0)
cur.execute('create table Book(Book_id varchar(5) primary key,Book_name varchar(10),Author varchar(10))')
str1 = 'insert into Book(Book_id,Book_name,Author) values (%s,%s,%s)'
insert_records =[('1','Book1','Mr.ABC'),('2','Book2','Mr.ATC'),('3','Book3','Mr.PBC'),('4','Book4','Mr.TYH')]
for rec in insert_records:
    cur.execute(str1,rec)

'''print("\nBefore adding :\n")
display_Books(cur)
add_new_Book(cur)
print("\nAfter adding :\n")
display_Books(cur)
delete_Book(cur)
print("\nAfter deleting :\n")
display_Books(cur)'''

while(True):
    print("\n******* MENU *******\n1.Add Book \n2.Remove Book\n3.Display All Books\n4.Exit\n")
    choice = int(input("Enter your choice : "))
    if (choice == 1):
        add_new_Book(cur)
    elif(choice == 2):
        remove_Book(cur)
    elif(choice == 3):
        display_Books(cur)
    elif(choice == 4):
        print("Exiting...")
        break
    else:
        print("Invalid choice ...")

cur.close()
conn.commit()
conn.close()

