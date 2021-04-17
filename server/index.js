const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDb = require('./Db/conn');


connectDb();

app.use(express.json())

app.use(require('./Routes/userRouter'))


app.listen(PORT, () => {
  console.log(`Listning at ${PORT}`);
});


