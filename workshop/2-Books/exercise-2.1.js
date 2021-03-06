// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
    constructor (title, genre, author, isRead) {
        this.title = title || 'unknown';
        this.genre = genre || 'unknown';
        this.author = author|| 'unknown' ;
        this.isRead = isRead || false ;
    }
}

const book1=new Book('Harry Potter', 'Fantasy', 'J.K. Rowlings', true);
const book2=new Book('Ikigai', 'Health Mind & Body', 'Hector Garcia & Francesc Miralles', true);
const book3=new Book();
const book4=new Book();
const book5=new Book();

console.log(book1, book2, book3, book4, book5);
