const router = require('express').Router();

const createRoute = require("./create")
const deleterRoutes = require("./delete")
const readRoutes = require("./read")



router.use("/create", createRoute)
router.use("/delete", deleterRoutes )
router.use("/read" , readRoutes)



module.exports=router