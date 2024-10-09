//Array of books
const books =[{title:"War and Peace", author:"Leo Tolstoy", isAvailable: true},
    {title:"Crime and Punishment", author:"Fyodor Dostoevsky", isAvailable: false},
    {title:"The master and Margarita", author:"Mikhail Bulgakov", isAvailable: true},
    {title:"The Idiot", author:"Fyodor Dostoevsky", isAvailable: false}
];
//Function to search for books by an author
function getBooksByAuthor(books,author) 
{return books
    .filter(book => book.author === author)
    .map(book => book.title);
}
//Alternative function to search for books by an author partial name
function getBooksByAuthorPartial(books, author){
    return books
    .filter(book => book.author.includes(author))
    .map(book =>book.title);}

//Function to count available books
function countAvailableBooks(books) {return books.filter(book => book.isAvailable).length;
}
//Function to lend a book
function lendBook(books, title) {
    const book = books.find(book => book.title === title);
if (book) {
    if (book.isAvailable){book.isAvailable = false;
        return `Book "${title}" successfully issued!`;
    }else{
        return`Book "${title}" currently unavailable`;
    }
}else{
    return`Book "${title}" not found in the library`;
}
}
//Function  testing
console.log(getBooksByAuthor(books, "Fyodor Dostoevsky")); // ["Crime and Punishment", "The Idiot"]
console.log(getBooksByAuthorPartial(books, "Fyodor")); // ["Crime and Punishment", "The Idiot"]
console.log(countAvailableBooks(books)); //2
console.log(lendBook(books, "War and Peace")); //"Book "War and Peace" successfully issued!"
console.log(lendBook(books, "War and Peace")); //"Book "War and Peace" currently unavailable!"
console.log(books.find(book => book.title === "War and Peace").isAvailable); //false
