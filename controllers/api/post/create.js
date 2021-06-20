const router = require('express').Router();

const { Post } = require('../../../models');
const withAuth = require('../../../utils/auth');


router.post("/", withAuth, async (req, res) => {
    console.log(req.body)
    try {
      const postData = await Post.create({
      
        
          post_title: req.body.title,
          post_text: req.body.text,
          user_id: req.session.user_id,
        
      })
      res.json(postData)
    } catch (err) {
      res.status(500).json(err)
    }
  })





module.exports=router
