const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDb = require('./Db/conn')

app.use(express.json())

app.use(require('./Routes/userRouter'))

connectDb();

app.listen(PORT, () => {
  console.log(`Listning at ${PORT}`);
});


