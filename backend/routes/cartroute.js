import express from "express";
import Cart from "../model/Cartmodel.js";
const router = express.Router();
import {
  verifytokenauthor,
  verifytokenadmin,
  verifytoken,
} from "./verifytoken.js";

//create
router.post("/", verifytoken, async (req, res) => {
  const newcart = new Cart(req.body);

  try {
    const savecart = await newcart.save();
    res.status(200).json(savecart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update

router.put("/:id", verifytoken, async (req, res) => {
  try {
    const updatecart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatecart);   
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete

router.delete("/:id", verifytoken, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Success cart delete");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user Cart

router.get("/find/:userid", verifytoken ,async (req, res) => {
  try {
    const cart = await Cart.findOne({userid: req.params.userid});
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//getall cart 
router.get('/', verifytokenadmin, async(req, res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
    }
})


export default router;
