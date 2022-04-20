import express from "express";
import Product from "../model/Productmodel.js";
const router = express.Router();
import {
  verifytokenauthor,
  verifytokenadmin,
  verifytoken,
} from "./verifytoken.js";

//create
router.post("/", verifytokenadmin, async (req, res) => {
  const newprod = new Product(req.body);

  try {
    const saveprod = await newprod.save();
    res.status(200).json(saveprod);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update

router.put("/:id", verifytokenadmin, async (req, res) => {
  try {
    const updateproduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateproduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete

router.delete("/:id", verifytokenadmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Success  delete product");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get prod by id

router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get prod ALL

router.get("/", async (req, res) => {
  const qnew = req.query.new;
  const qcategory = req.query.category;
  try {
    let products;
    if (qnew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if(qcategory) {
        products = await Product.find({categories:{
            $in:[qcategory]
        }})
    }else{
        products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
