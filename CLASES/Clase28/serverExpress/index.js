const express = require ("express")
const app = express()  //se guarda en app todas las funciones de express
const port = 3300

app.get ("/", (req,res)=>{
res.send("estas en el home con el servidor creado")    
})

app.get ("/conocenos",(req,res)=>{
    res.send("estas en la página conocenos")  
})

app.listen (port,()=>{
    console.log(`Server ok en el puerto ${port}`);
})

//npm i nodemon

// METODOS HTTP:
// GET - POST - PUT - DELETE

// CRUD
// CREATE : CREAR : POST
// READ : LEER : GET
// UPDATE : ACTUALIZAR : PUT
// DELETE : BORRAR : DELETE
