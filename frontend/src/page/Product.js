import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Pengumuman from "../components/Pengumuman";
import { useLocation } from "react-router-dom";
import { publicReq } from "../requestmetode";
import { addProducts } from "../redux/cartredux";
import { useDispatch } from "react-redux";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setproduct] = useState({});
  const [quantity, setquantiti] = useState(1);
  const [color, setcolor] = useState("");
  const [sizez, setsize] = useState("");
  const dispatch = useDispatch();

  const jumlah = (type) => {
    if (type === "dec") {
      quantity > 1 && setquantiti(quantity - 1);
    } else {
      setquantiti(quantity + 1);
    }
  };

  useEffect(() => {
    const getprod = async () => {
      try {
        const res = await publicReq.get(`/products/find/${id}`);
        setproduct(res.data);
      } catch (error) {}
    };
    getprod();
  }, [id]);

  const handleklik = () => {
    dispatch(addProducts({ ...product, quantity, color, sizez }));
  };

  return (
    <div>
      <Navbar />
      <Pengumuman />
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <img src={product.img} style={{ width: "100%" }} alt="" />
          </div>
          <div className=" p-1 mt-4 md:mt-0 md:p-20">
            <h1 className="text-3xl " style={{ letterSpacing: "-1px" }}>
              {product.title}
            </h1>
            <h6 className="my-4">{product.desc}</h6>
            <h6 className="text-4xl font-serif">$ {product.price}</h6>
            <div className="flex gap-3 items-center my-4">
              <div className="flex">
                <h2 className="font-bold">Warna : </h2>
                <select onChange={(e) => setcolor(e.target.value)}>
                  {product.color?.map((c) => (
                    <option key={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex">
                <h2 className="font-bold">Ukuran : </h2>
                <select onChange={(e) => setsize(e.target.value)}>
                  {product.size?.map((z) => (
                    <option key={z}>{z}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex  items-center justify-center md:justify-start mb-2 md:mb-0 ">
                <button onClick={() => jumlah("dec")} className="text-4xl">
                  -
                </button>
                <div className="w-42 mx-3  border-green-700 border-2 bg-slate-100 p-4 rounded-full">
                  {quantity}
                </div>
                <button onClick={() => jumlah("inc")} className="text-4xl">
                  +
                </button>
              </div>
              <button onClick={handleklik} className="w-full font-bold text-white bg-green-700 border-2 hover:bg-transparent hover:border-green-700 hover:text-green-700">
                Masukkan Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
