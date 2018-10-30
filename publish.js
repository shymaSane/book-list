function Publish(){
    this.book_table = document.getElementById('saved_books')
};

//get data from storage
Publish.prototype.showBook = function(data){
    //show all books
    let output = ""
    console.log(data)

    for(key in data){
        output += `<tr>
                        <td>${data[key].book}</td>
                        <td>${data[key].author}</td>
                        <td>${data[key].isbn}</td>
                        <td><span id="close">&#10006;</span></td>
                    </tr>
                    
                    `
    }
    console.log(output)
    this.book_table.innerHTML = output;
}