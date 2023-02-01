const router = require("express").Router();
const User = require("../models/User")

router.get("/register", async (req,res)=>{
    const user = await new User({
        username:"vinla",
        email:"vinla@gmail.com",
        password:"123456789"
    })
    await user.save();
    res.send("hoku")
})

module.exports = router;