const fs = require('fs')
const path = require('path')

module.exports = class product{

    constructor(t){
        this.title = t;
    }
    save(){
        const filePath = path.join((path.dirname(process.mainModule.filename)),'data','products.json')

        fs.readFile(filePath,(err,data) =>{
            let products=[]
            if(!err){
               
                products=JSON.parse(data);
            }
            console.log(this)
            products.push(this);

            fs.writeFile(filePath,JSON.stringify(products),(err) => {
                console.log(err);
            })

        })
        

    }

    static fetchAll(callback){
        const filePath = path.join((path.dirname(process.mainModule.filename)),'data','products.json')

        fs.readFile(filePath, (err,data) => {
            if(err) callback([])
            callback(JSON.parse(data))
            
              
        })

    }


}