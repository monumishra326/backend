const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");
const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userController);
app.use("/products", productController);


app.listen(port, async function () {
  await connect();

  console.log("listening to port:", port);
});
