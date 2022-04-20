import "./newProduct.css";

import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import app from "../../firebase";
import { addProducts } from "../../redux/apiCalls";

export default function NewProduct() {
  const [inputs, setinputs] = useState({});
  const [file, setfile] = useState(null);
  const [cat, setcat] = useState([]);
  const dispatch = useDispatch();

  const handlechange = (e) => {
    setinputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handlekat = (e) => {
    setcat(e.target.value.split(","));
  };

  const handleclik = (e) => {
    e.preventDefault();
    //todo

    const filename = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, filename);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const products = { ...inputs, img: downloadURL, categories: cat };
          addProducts(products, dispatch);
        });
      }
    );
  };

  console.log(inputs);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setfile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            onChange={handlechange}
            placeholder="Apple Airpods"
          />
        </div>
        <div className="addProductItem">
          <label>Descrption</label>
          <input
            name="desc"
            type="text"
            onChange={handlechange}
            placeholder="Description..."
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            onChange={handlechange}
            placeholder="100"
          />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <input type="text" placeholder="jeans" onChange={handlekat} />
        </div>
        <div className="addProductItem">
          <label>InStock</label>
          <select name="inStock" onChange={handlechange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button onClick={handleclik} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
