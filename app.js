//Book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn
}

//Ui constructor
function UI(){

}

UI.prototype.add = function(book){
    //get tbody
    const list = document.getElementById('book_list');
    //creat new table row
    let row = document.createElement('tr');
    //append html to the new row
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `
    list.appendChild(row)
    
}

//clear fields
UI.prototype.clear = function () {
    document.getElementById('book_title').value = "";
    document.getElementById('author_name').value = "";
    document.getElementById('isbn_number').value = ""
}

//delete
UI.prototype.delete = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
} 


//local storage class
function Store(){}

Store.prototype.getBooks = function(){
    //init books variable
    let books;
    //if the store is empty then assign the books to an array
    if(localStorage.getItem('books') === null){
         books = []
    } 
    // if there is a stored books then bring thme but  you to need to pares the results
    else {
         books = JSON.parse(localStorage.getItem('books'))
    }
    //return the storage
    return books;
}

Store.prototype.addBooks = function(book){
    //get books from the storage
    const books = this.getBooks();
    //add the new book
    books.push(book);
    //save the books array in the storage again: note you have to stringify the books array
    localStorage.setItem('books', JSON.stringify(books));
}

Store.prototype.displayBooks = function(){
    //get books from the storage
    const books = this.getBooks();
    //init UI class
    const ui = new UI();
    //display books array using the UI class methods 
    books.forEach(book => {
        ui.add(book)
    });
}

Store.prototype.deleteBook = function(isbn){
   const books = this.getBooks()
   books.map((book,i) => {
        if(book.isbn === isbn){
            books.splice(i,1)
        }
   })

   localStorage.setItem('books', JSON.stringify(books));
}

//when document loaded show whatever in the local Store
document.addEventListener('DOMContentLoaded', () => {
    const store = new Store;
    store.displayBooks() 
})


//Event Listeners:
document.getElementById('form').addEventListener('submit', (e) =>{
    e.preventDefault();
    //bring input values
    const title = document.getElementById('book_title').value,
        author = document.getElementById('author_name').value,
        isbn = document.getElementById('isbn_number').value

    //init book class
    let book = new Book(title, author, isbn);
    //init UI class 
    let ui = new UI;
    ui.add(book)
    //store int in the sotrage
    let store = new Store()
    store.addBooks(book)
    //clear fields
    ui.clear()
})

//Event listner for delelte:
// we need delegation:
document.getElementById('book_list').addEventListener('click', (e) =>{
    //init UI class
    ui = new UI;
    //call delete method 
    ui.delete(e.target)
    console.log(e.target)
    //init store
    const store = new Store();
    //delete from store
    store.deleteBook(e.target.parentElement.previousElementSibling.textContent)
})

