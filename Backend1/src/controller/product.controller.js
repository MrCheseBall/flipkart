const productService=require("../services/product.service.js")

const createProduct=async(req,res)=>{
    try {
        // console.log('2')
        const product=await productService.createProduct(req.body)
       
        return res.status(201).send(product)
    } catch (error) {
        // console.log('3')
 
        return res.status(500).send({error:error})
    }
}

const deleteProduct=async(req,res)=>{
    const productId=req.params.id;
    try {
        const product=await productService.deleteProduct(productId)
        return res.status(201).send(product)
    } catch (error) {
        return res.send(500).send({error:error.message})
    }
}

const updateProduct=async(req,res)=>{
    const productId=req.params.id;
    try {
        const product=await productService.updateProduct(productId,req.body)
        return res.status(201).send(product)
    } catch (error) {
        return res.send(500).send({error:error.message})
    }
}

const findProductById=async(req,res)=>{
    const productId=req.params.id;
    try {
        // console.log("hello") 
        const product=await productService.findProductById(productId,req.body)
        return res.status(201).send(product)
    } catch (error) {
        return res.send(500).send({error:error.message})
    }
}
const getAllProducts=async(req,res)=>{
    const productId=req.params.id;
    console.log("product")   
    try {
        const product=await productService.getAllProducts(req.query)
        return res.status(201).send(product)
    } catch (error) {
        return res.send(500).send({error:error.message})
    }
}

const createMultipleProduct=async(req,res)=>{
    const productId=req.params.id;
    try {
        const product=await productService.createMultipleProduct(req.body)
        return res.status(201).send({message:"product created successfully"})
    } catch (error) {
        return res.send(500).send({error:error.message})
    }
}

module.exports={
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProducts,
    createMultipleProduct,
    findProductById
}