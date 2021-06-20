const router = require("express").Router();
const {User} = require("../../../models")




router.post("/", async (req,res) => {
    console.log ("this is being created " + req.body.name)
        try {
          const newuser = await User.create({
            user_name: req.body.name,
            user_email: req.body.email,
            user_password: req.body.password,
          })
          res.json(newuser)
        } catch (err) {
          res.status(500).json(err)
        }
      } );
    


      module.exports= router