const express = require ("express")

//controladores

//configuración de rutas express // metodos de HTTP
const router = express.Router()

router.get ("/" ,enviarPosts)
 router.get ("/:id",enviarUnPost)

// router.get ("/", funcion que envia los posteos)
// router.get ("/:id", funcion que envia los posteos)
// router.post ("/", funcion que envia un posteo a la base de datos)
// router.put ("/:id", funcion que actualiza un posteo en la base de datos)
// router.delete ("/:id", funcion que borra un posteo de la base de datos)

module.exports = router