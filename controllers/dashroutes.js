const router = require("express").Router();

const {Post,Comment, User} = require("../models");
const withAuth = require ("../utils/auth.js")


router.get("/",withAuth, async(req,res) => {
    
    
    try{
        const userdata = await User.findByPk(req.session.user_id, {
            attributes:{ exclude:["user_password"]},
            include:[{model: Post}],
        });

        const user=userdata.get({plain:true});
        const user2 = JSON.stringify(user)
        
        res.render("dashboard",{
            ...user,
          
        });

        
    } catch (err) {console.log("this is the error" + err)
        res.status(500).json(err);
        
    }
});



module.exports= router