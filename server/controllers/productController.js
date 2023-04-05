// exports.createProduct = (req, res)=>{

const Product = require("../models/Product");

//     console.log(req.body); 
// }

exports.createProduct = async (req, res)=>{

    try{
        let product;

        product = new Product(req.body);
        await product.save();
        res.send(product);

    }catch(error){
        console.log(error);
        res.status(500).send('Server error');
    }

    // console.log(req.body);
    // res.status(200).send("Producto creado exitosamente");
  }

exports.obtainProduct = async(req, res) => {
    try{
        const product = await Product.find();
        res.json(product)
    }catch(error){
        console.log(error);
        res.status(500).send('Server error');
    }

}

exports.updateProduct = async(req, res) => {
    try{
        //destroctoring
        const {name,category, ubication, price } = req.body;
        let product = await Product.findById(req.params.id);//optain the product from the database

        if(!product){
            res.status(404).json({msg: 'Product did not exist in database.'})
        }
        product.name = name;
        product.category = category;
        product.ubication = ubication;
        product.price = price;

        product = await Product.findOneAndUpdate({_id: req.params.id}, product, {new:true});//3 parameters
        res.json(product);

    }catch(error){
        console.log(error);
        res.status(500).send('Server error');
    }

}

exports.updateOneProduct = async(req, res) => {
    try{
        //destroctoring
       
        let product = await Product.findById(req.params.id);//optain the product from the database

        if(!product){
            res.status(404).json({msg: 'Product did not exist in database.'})
        }
   
        res.json(product);

    }catch(error){
        console.log(error);
        res.status(500).send('Server error');
    }

}
exports.deleteProduct = async(req, res) => {
    try{
        //destroctoring
       
        let product = await Product.findById(req.params.id);//optain the product from the database

        if(!product){
            res.status(404).json({msg: 'Product did not exist in database.'})
        }
        await Product.findOneAndRemove({ _id:req.params.id })
        res.json({msg: 'elimination of product successfly' });

    }catch(error){
        console.log(error);
        res.status(500).send('Server error');
    }

}