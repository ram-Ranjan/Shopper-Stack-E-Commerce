const product = []
module.exports = class product{

    constructor(t){
        this.title = t;
    }
    save(){
        products.push(this)
    }

    static fetchAll(){
        return products;

    }

}