const router = require("express").Router();
const {User} = require("../models")

router.post('/', async (req, res) => {
  console.log("Hitting the post request to log in")
  try {

    console.log("//////////////////////login attempting with: ", req.body)
    
    const userData = await User.findOne({ where: { user_email: req.body.email } });
    console.log(userData)
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    };



    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      console.log(" THE USER ID IS  ::::: " + req.session.user_id)
      
      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});



router.get("/welcom", (req,res) =>{
  res.render("login")
})


module.exports= router