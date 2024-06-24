const express = require ("express")
const app = express()  //se guarda en app todas las funciones de express
const port = 3300

app.get ("/", (req,res)=>{
    res.send("estas en el home")    
    })

app.listen (port,()=>{
    console.log(`Server ok en el puerto ${port}`);
})