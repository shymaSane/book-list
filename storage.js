var Stack = function (){
    this.storage ={}
    this.counter = 0
}


Stack.prototype.push = function(val){
    this.storage[this.counter++] = val
    return this.storage
}

Stack.prototype.pop = function() {
    var val = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter--;
    return val
}

Stack.prototype.size = function(){
    return counter
}