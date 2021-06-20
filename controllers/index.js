const router= require("express").Router();

const homeRoutes = require("./homeroutes")
const dashRoutes = require("./dashroutes")
const apiRoutes = require("./api")
const loginRoutes = require("./loginroute")
const logoutRoutes = require("./logoutroutes")



router.use("/", homeRoutes)
router.use("/dashboard" , dashRoutes)
router.use("/api", apiRoutes)
router.use("/login" , loginRoutes)
router.use("/logout", logoutRoutes)

module.exports= router