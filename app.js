
document.addEventListener("DOMContentLoaded", function(event) { 
    //we need to init here so it wont refresh everytime we click submit and delete info
    const storage = new Stack;
    //init publish class
    const publish = new Publish;
    let currentStorage = storage.get()
    console.log(currentStorage)
    //when click on submit button bring data
    submit_book = document.getElementById('submit_book')
    submit_book.addEventListener('click', (e) =>{
        e.preventDefault();
        //init book > we init here so we can get data when click otherwise it ll give us empty data
        const book_info = new Book();
        let book_object = book_info.getbook();
        
        if(book_object !== "Not complete"){
            //current element in the storage without refresh
            storage.push(book_object)
            let currentStorage = storage.get()
         
            //show current element in the storage
            publish.showBook(currentStorage)
            //reset form 
            document.getElementById("form").reset();
        }
    })

    //Delete button works when we have saved information
    // let close = document.getElementById('close');
    // close.addEventListener('click', () => {
    //     storage.pop()
    // })

 });