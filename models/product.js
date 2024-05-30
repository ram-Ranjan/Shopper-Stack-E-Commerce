const fs = require('fs')
const path = require('path')
const filePath= path.join(path.dirname(process.mainModule.filename),'data','products.json')

const getProductsFromFile =(callback) => {
    fs.readFile(filePath,(err,data) =>{
        if(err)
            callback([]);
        else
            callback(JSON.parse(data));
    })
}

module.exports = class product{

    constructor(t){
        this.title = t;
    }
    save(){

            getProductsFromFile(products => {
                products.push(this);
                fs.writeFile(filePath,JSON.stringify(products),(err) => {
                    console.log(err);
                })

            })

           

        }
        
    

    static fetchAll(callback){
       getProductsFromFile(callback);

    }

}
