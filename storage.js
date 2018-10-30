var Stack = function (){
    this.storage = [];
}




Stack.prototype.push = function(val){
    this.storage.push(val)
    localStorage.setItem('items', JSON.stringify(this.storage))
    return this.storage
}

Stack.prototype.get = function() {
    let data = JSON.parse(localStorage.getItem('items'))
    return data
}

// Stack.prototype.size = function(){
//     return counter
// }