import express from "express";
import { ProductManager } from "./productManager.js";

const port = 8080;

const app = express();

app.listen(port,()=>console.log(`El servidor esta escuchando en el puerto${port}`));

const productService=new ProductManager("./products.json")


app.get("/products",async(req,res)=>{
    try {
        const result= await productService.getProducts();
        res.send(result)
    } catch (error) {
        res.send(error.message)
    }
})