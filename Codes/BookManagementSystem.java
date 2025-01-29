
import java.util.Scanner;

// Book class : contains information of book
class Book {
    private String bookName;
    private String author;
    private String publication;

    // Constructor
    public Book(String name, String author, String publication) {
        this.bookName = name;
        this.author = author;
        this.publication = publication;
    }

   //accesing private variables of the class
    public String getBookName() {
        return bookName;
    }

    public String getAuthor() {
        return author;
    }

    public String getPublication() {
        return publication;
    }

    // display book details
    public void BookDetails() {
        System.out.println("Book Name: " + bookName);
        System.out.println("Author Name : " + author);
        System.out.println("Publication: " + publication);
    }
}

// Book Management System
public class BookManagementSystem {
    final int MAX_BOOKS = 100; 
    private Book[] booksArray = new Book[MAX_BOOKS];
    private int bookCount = 0;
    Scanner sc = new Scanner(System.in);

    // Add a book
    public void addBook() {
        if (bookCount >= MAX_BOOKS) {
            System.out.println("Book storage is full!! You cannot add more books...Try again");
            return;
        }
        System.out.println("Enter book name: ");
        String name = sc.nextLine();
        System.out.println("Enter author name: ");
        String author = sc.nextLine();
        System.out.println("Enter publication: ");
        String publication = sc.nextLine();
        booksArray[bookCount] = new Book(name, author, publication);
        bookCount++;
        System.out.println("Book added successfully!");
    }

    // Search book by name of book
    public void searchByName() {
        System.out.println("Enter book name to search: ");
        String name = sc.nextLine();
        for (int i = 0; i < bookCount; i++) {
            if (booksArray[i].getBookName().equalsIgnoreCase(name)) {
                System.out.println("Book found:");
                booksArray[i].BookDetails();
                return;
            }
        }
        System.out.println("No book found with the name: " + name);
    }

    // Search book by author name
    public void searchByAuthor() {
        System.out.println("Enter author name to search: ");
        String author = sc.nextLine();
        boolean found = false;
        for (int i = 0; i < bookCount; i++) {
            if (booksArray[i].getAuthor().equalsIgnoreCase(author)) {
                if (!found) {
                    System.out.println("Books by the author:");
                }
                booksArray[i].BookDetails();
                System.out.println();
                found = true;
            }
        }
        if (!found) {
            System.out.println("No books found ");
        }
    }

    // Display all books
    public void displayBooks() {
        if (bookCount == 0) {
            System.out.println("No books available.");
            return;
        }
        System.out.println("List of books:");
        for (int i = 0; i < bookCount; i++) {
            booksArray[i].BookDetails();
            System.out.println();
        }
    }

    // Remove a book by name
    public void removeBook() {
        System.out.println("Enter the name of the book to remove: ");
        String name = sc.nextLine();
        for (int i = 0; i < bookCount; i++) {
            if (booksArray[i].getBookName().equalsIgnoreCase(name)) {
                System.out.println("Removing the book:");
                booksArray[i].BookDetails();

                // Shift remaining books
                for (int j = i; j < bookCount - 1; j++) {
                    booksArray[j] = booksArray[j + 1];
                }
                
                System.out.println("Book removed successfully.");
                return;
            }
        }
        System.out.println( name + " - book not found " );
    }

    // Main menu
    public void menu() {
        while (true) {
            System.out.println("\n******* Book Management System ****** ");
            System.out.println("1. Add Book");
            System.out.println("2. Search a book by Book Name");
            System.out.println("3. Search  a book by Author Name");
            System.out.println("4. Display Books");
            System.out.println("5. Remove a Book");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");

            int choice = sc.nextInt();
            switch (choice) {
                case 1:
                    addBook();
                    break;
                case 2:
                    searchByName();
                    break;
                case 3:
                    searchByAuthor();
                    break;
                case 4:
                    displayBooks();
                    break;
                case 5:
                    removeBook();
                    break;
                case 6:
                    System.out.println("Exiting...");
                    return;
                default:
                    System.out.println("Please enter a valid choice ");
            }
        }
    }

    public static void main(String[] args) {
        BookManagementSystem Bs = new BookManagementSystem();
        Bs.menu();
    }
}
