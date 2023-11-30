// importing express module
const express = require("express");
// creating express instance
const app = express();
// injecting env variables
require("dotenv").config();
// importing mongoose module
const mongoose = require("mongoose");
// db connection
mongoose
.connect(process.env.DB_URL)
.then(() => {
  console.log("DB connected");
})
.catch((err) => {
  console.log(err);
});

app.use(express.json())
  app.use("/person", require("./Routes/Person-routes"));
  app.listen(8080, () => console.log("Server is running on port 8080"));
