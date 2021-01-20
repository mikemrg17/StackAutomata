class Stack{
    constructor(){
        this.items = {};
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
}

module.exports = Stack;