

document.addEventListener("DOMContentLoaded", function(event) { 
    

    //when click on submit button bring data
    submit_book = document.getElementById('submit_book')
    submit_book.addEventListener('click', (e) =>{
        e.preventDefault();
        //init book > we init here so we can get data when click otherwise it ll give us empty data
        const book_info = new Book();
        let book_object = book_info.getbook();
        
        if(book_object !== "Not complete"){
            //init publish class
            console.log(book_object)
        }
    })
 });