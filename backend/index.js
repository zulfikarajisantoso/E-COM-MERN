import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import Userroute from "./routes/user.js";
import productroute from "./routes/productroute.js";
import cartrout from "./routes/cartroute.js";
import orderrout from "./routes/orderroute.js";
import stripe from "./routes/stripe.js";
import authroute from "./routes/authroute.js";

dotenv.config();

const app = express();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("database connect"))
  .catch((error) => console.log("error database", error));

app.use(cors());
app.use(express.json());

app.use("/auth", authroute);
app.use("/user", Userroute);
app.use("/products", productroute);
app.use("/cart", cartrout);
app.use("/orders", orderrout);
app.use("/checkout", stripe);

app.listen(process.env.PORT || 5000, () => console.log("Jalan boouuss...."));
