class Stack{
    constructor(){
        this.items = [];
        this.top = 0;
    };

    push(item){
        this.top++;
        this.items[this.top] = item;
    }

    pop(){
        let deletedItem;
        if(this.top){
            deletedItem = this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return deletedItem;
        }
    }

    print(){
        let dataString = "";
        for(let i = 0; i<this.top; i++){
            dataString+= this.items[i];
        }
        console.log(dataString);
        return dataString;
    }

    getSize(){
        return this.top;
    }
}

module.exports = Stack;