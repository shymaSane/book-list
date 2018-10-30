function Book(){
    this.book_title = document.getElementById('book_title');
    this.author_name = document.getElementById('author_name');
    this.isbn_number = document.getElementById('isbn_number');
}

Book.prototype.getbook = function(){
    // added chackvalidity and reportvalidity beacuse we added preventDefault
    if( this.book_title.checkValidity() && this.author_name.checkValidity() && this.isbn_number.checkValidity()){
        return {
            book: this.book_title.value,
            author: this.author_name.value,
            isbn: this.isbn_number.value
        }
    } else {
        this.book_title.reportValidity();
        this.isbn_number.reportValidity();
        this.author_name.reportValidity();
        return "Not complete"
    }
   
}