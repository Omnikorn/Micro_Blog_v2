const router = require ("express").Router();


const createRoutes = require("./create")




router.use("/create" , createRoutes)




module.exports = router 