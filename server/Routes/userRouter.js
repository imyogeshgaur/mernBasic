const express = require("express");
const router = express.Router();

const User = require("../Model/User");

router.get("/", (req, res) => {
  res.send("Hi from home page");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please Fill all the Fields !!!" });
  }

  try {
    const phonePromise = await User.findOne({ phone });
    if (phonePromise) {
      return res.status(422).json({ error: "Phone already Exist !!!" });
    }
    const emailPromise = await User.findOne({ email });
    if (emailPromise) {
      return res.status(422).json({ error: "Email already Exist !!!" });
    }
  } catch (error) {
    console.log(error);
  }
  
  const newUser = new User({ name, email, phone, work, password, cpassword });

  await newUser.save();

  res.status(201).send("Data Stored Sucessfully !!!");
});

router.get("/about", (req, res) => {
  res.send("Hi from about page");
});
router.get("/contact", (req, res) => {
  res.send("Hi from contact page");
});
router.post("/signin", async(req, res) => {
  
  const {email,password} = req.body;

  try {
    if(!email||!password){
      res.status(400).json({error:"Please fill all fields"});
    }
  
    const dataOfUser = await User.findOne({email});
  
    if(dataOfUser == null){
        res.status(400).json({error:"Invalid Credential"});
    }else{
      res.status(200).json({message:"User Login Sucessfully !!!"})
    }
  } catch (error) {
    console.log(error);
  }

});
router.get("/signup", (req, res) => {
  res.send("Hi from registration page");
});

module.exports = router;
