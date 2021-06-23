const router = require("express").Router()
const { User } = require("../../../models")

router.post("/", async (req, res) => {
	console.log("this is being created " + req.body.name)
	try {
		const newuser = await User.create({
			user_name: req.body.name,
			user_email: req.body.email,
			user_password: req.body.password,
		})
		console.log(newuser.id)

		await req.session.save(() => {
			req.session.user_id = newuser.id
			req.session.logged_in = true
			res.json(newuser)
		})
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router
