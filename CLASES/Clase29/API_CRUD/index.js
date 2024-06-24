const express = require ("express")
const cors = require ("cors") //es para habilitar el intercambio de recursos entre servidor y cliente de origen cruzado
const postRouter = require ("./routes/postRouter.js")
const app = express()  //se guarda en app todas las funciones de express
const port = 3030

app.use(cors()) //habilito el intercambio de información
app.use(express.json()) //analiza los request

app.get ("/", (req,res)=>{
    res.send("estas en el home")    
    }) //sin modularizar

app.use("/posteos",postRouter)  //modularizado  

app.listen (port,()=>{
    console.log(`Server ok en el puerto ${port}`);
})