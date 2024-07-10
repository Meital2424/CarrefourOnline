
const fs = require('fs');

function get(req, res) {
    fs.readFile("products.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("error read file student ")
        } else {
            res.send(JSON.parse(data));
        }

    })
}
//אפשרות ראשונה ליצא פונקציה מדף
exports.getById = (req, res) => {

    fs.readFile("products.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("error read file student ")
        } else {
            let id = req.params.id;

            data = JSON.parse(data);
            let product = data.find(st => st.id == id)

            if (product == undefined) {
                res.status(500).send("not found student by tz " + id);
            } else {
                res.send(product);
            }

        }


    })
}


exports.delete = (req, res) => {

    fs.readFile("products.json", "utf-8", (err, data) => {
        let id = req.params.id
        let products = JSON.parse(data);
        let newArrProduct = products.filter(i=> i.id != id)

        fs.writeFile("products.json", JSON.stringify(newArrProduct), (err) => {
            if (err) {
                res.status(500).send("error  in add products ");
            } else {
                res.send(id);
            }
        })
    })
}


exports.post = (req, res) => {

    fs.readFile("products.json", "utf-8", (err, data) => {
        //המרה של טקסט למערך
        let products = JSON.parse(data);
        //body =  לתוכן שנשלח בפונקציה פןסט 
        let product =req.body
        // מוסיף איידי למוצר החדש 
        product.id = products[products.length-1].id + 1;
        products.push(product);
        
        fs.writeFile("products.json", JSON.stringify(products), (err) => {
            if (err) {
                res.status(500).send("error  in add products ");
            } else {
                res.send(product);
            }
        })
    })
   
} 
exports.put=(req,res)=>{
    fs.readFile("products.json", "utf-8", (err, data) => {
        let id=Number(req.params.id)
        let product =req.body
        product.id=id
        let products = JSON.parse(data);
        let index= products.findIndex(x=>x.id==id)
        products.splice(index,1,product)
       // products[index]=product
        fs.writeFile("products.json", JSON.stringify(products), (err) => {
            if (err) {
                res.status(500).send("error  in add products ");
            } else {
                res.send(product);
            }
        })
    })
}



//אפשרות שניה ליצא פונקציה מדף
exports.get = get;
