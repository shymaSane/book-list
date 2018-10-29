
document.addEventListener("DOMContentLoaded", function(event) { 
    //we need to init here so it wont refresh everytime we click submit and delete info
    const storage = new Stack;
    //init publish class
    const publish = new Publish;
    //when click on submit button bring data
    submit_book = document.getElementById('submit_book')
    submit_book.addEventListener('click', (e) =>{
        e.preventDefault();
        //init book > we init here so we can get data when click otherwise it ll give us empty data
        const book_info = new Book();
        let book_object = book_info.getbook();
        
        if(book_object !== "Not complete"){
            //current element in the storage without refresh
            let currentStorage = storage.push(book_object)
            console.log(currentStorage)
            //show current element in the storage
            publish.showBook(currentStorage)
            //reset form 
            document.getElementById("form").reset();
        }
    })

 });