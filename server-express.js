const express = require('express');
const Contenedor = require('./server-express.js');
const app = express();

const PORT = 8080;

function getRandom(min,max){
    return Math.floor(Math.random()* (max +1-min)) + min;
}

app.get('/productos', async (req,res)=>{
    
    const productos = new Contenedor(`productos.json`);
    const prods = await productos.getAll();
    let id =1
    let id =2
    const sneaker = {
        title: 'Adidas Ozweego Tech',                                                     
        price:17600,                                                                                                                     
        Link : 'https://www.adidas.com.ar/zapatillas-ozweego-tech/EF4297.html?pr=recently_viewed&slot=1',             
    };
      const sneaker2 = {
        title: ' OZWEEG PURE',                                                           
        price:21800,                                             
        link: 'https://www.adidas.com.ar/zapatillas-ozweego-pure/H04263.html',   
      };
      console.log(`Servidor express escuchando en el puerto ${srv.address().port}`)     
      
      console.log(prods[id]);
      console.log(prod);
      res.send(Contenedor(prod.title, prod.price, prod.link)); 
});


const srv=("error", error => console.log(`Error en servidor ${error}`))
    
const prod= new Contenedor('productos.json');
console.log(`Servidor express escuchando en el puerto ${srv.address().port}`);





app.get("/productoRandom", async (req, res) => {
    const productos = new Contenedor(productos.json);
    const prods = await productos.getAll();
    const id = getRandom(1,prods.lenght)

    const prod = prods[id];
    console.log(id);
    console.log(prod);

    res.send(productos(prod.title,prod.price,prod.link));
  

})





const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});

server.on("error", (error) => console.log(error));