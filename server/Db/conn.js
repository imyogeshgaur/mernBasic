const mongoose = require("mongoose")
require('dotenv').config();

const connectDb = async () => {
  try {
    const DB = process.env.DATABASE;
    await mongoose.connect(DB, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Connected Sucessfully !!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
