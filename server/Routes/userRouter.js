const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');

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
    if (password != cpassword) {
      return res.status(422).json({ error: "Password Do not Match !!!" });
    } else {
      const newUser = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });
      await newUser.save();
    }
  } catch (error) {
    console.log(error);
  }

  res.status(201).send("Data Stored Sucessfully !!!");
});

router.get("/about", (req, res) => {
  res.send("Hi from about page");
});
router.get("/contact", (req, res) => {
  res.send("Hi from contact page");
});
router.get("/signin",async(req,res)=>{
  res.send("Hi from Login Page");
})
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "Please Fill all the Fields !!!" });
  }

  try {
    const userLogin = await User.findOne({ email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();
      res.cookie("jwtToken",token,{
        expires:new Date(Date.now()+30000),
        httpOnly:true
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials !!!" });
      } else {
        res.status(200).json({ message: "User Login Sucessfully !!!" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials !!!" });
    }
  } catch (error) {
    console.log(error);
  }
});
router.get("/signup", (req, res) => {
  res.send("Hi from registration page");
});

module.exports = router;
