import fs from "fs";

export class ProductManager{
    constructor(path){
        this.path=path;
        
    };

    fileExist(){
        return fs.existsSync(this.path);
    }

    async addProduct(producto){
        let newID;
        try {
            if(this.fileExist()){
                const contenido= await fs.promises.readFile(this.path,"utf-8");
                const productos=JSON.parse(contenido);

                
                if(!productos.lenght){
                    newID=1
                }else{
                    newID=productos[productos.lenght-1].id+1
                }

                productos.push(producto,newID);


                await fs.promises.writeFile(this.path,JSON.stringify(productos,null,'\t'))
                console.log("producto creado");
            }else{
               
            
                console.log("producto no existente");
            }
        } catch (error) {
            console.log(error.message);
            return undefined;
        }
    };

    async getProduct(){
        try {
            if(this.fileExist()){
                const contenido= await fs.promises.readFile(this.path,"utf-8");
                const contenidoJson=JSON.parse(contenido);
                return contenidoJson ;
            }else{
                return console.log("El producto no existe")
            }
        } catch (error) {
            console.log(error.message);
            return undefined;
        }
    };

    async getProductById(){

    }

    async updateProduct(producto){ 
        try {
            if(this.fileExist()){
                const contenido= await fs.promises.readFile(this.path,"utf-8");
                const productos=JSON.parse(contenido);

                
                if(!productos.lenght){
                    newID=1
                }else{
                    newID=productos[productos.lenght-1].id+1
                }

                productos.push(producto,newID);


                await fs.promises.writeFile(this.path,JSON.stringify(productos,null,'\t'))
                console.log("producto creado");
            }else{
               
            
                console.log("producto no existente");
            }
        } catch (error) {
            console.log(error.message);
            return undefined;
        }

    }

    async deleteProduct(){
        try {
            if(this.fileExist()){
                const contenido= await fs.promises.readFile(this.path,"utf-8");
                const productos=JSON.parse(contenido);

                await fs.promises.unlink(this.path,JSON.stringify(producto,null,'\t'))
                console.log("producto creado");
            }else{
               
            
                console.log("producto no existente");
            }
        } catch (error) {
            console.log(error.message);
            return undefined;
        }

    }

};
module.exports={ProductManager}
