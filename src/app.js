import express from "express";
import { ProductManager } from "./productManager.js";

const port = 8080;

const app = express();

app.listen(port,()=>console.log(`El servidor esta escuchando en el puerto${port}`));

const productService=new ProductManager("./productos.json")


app.get("/products",async(req,res)=>{
    try {
        const results= await productService.getProduct();

        const limit =req.query.id
       /*  res.send(results) */
        console.log("limite de productos",limit)
        if(!limit){
            
            res.send(results)
        }else{
            
            //Deberia de filtrar los productos con un id menor a 10 y mostrarlos
            const limitProducts= results.filter(result=>result.id < 10 )
            res.send(limitProducts)
        }
    } catch (error) {
        res.send(error.message)
    }
})

app.get("/products/:id",async(req,res)=>{
    const productId=parseInt(req.params.productID)
    try {
        const results=await productService.getProduct();
        res.send(results)
        const productDetail=results.find(elm=>elm.id === productId)
        
        if(!productDetail){
            res.send("Producto no existente")
        }else{
            res.send(productDetail)
        }
        
    } catch (error) {
        res.send(error.message)
    }
})