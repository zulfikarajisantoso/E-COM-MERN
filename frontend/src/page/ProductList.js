import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Pengumuman from "../components/Pengumuman";
import Popular from "../components/Popular";
import Newlet from "../components/Newlet";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const ProductList = () => {

  const location = useLocation()
  const cat = location.pathname.split("/")[2]

  const [filters, setfilter] = useState({})
  const [sort, setsort] = useState("newest")


  const handlefilter = (e) => {
    const value = e.target.value;

    setfilter({
      ...filters, [e.target.name]: value,
    })
  }
  console.log(filters);


  return (
    <div>
      <Navbar />
      <Pengumuman />
      <div className="p-6">
        <h3 className="font-bold  text-3xl mb-3 ">CELANA</h3>
        <div className="grid  grid-cols-1 md:grid-cols-2 ">
          <div className="flex gap-1 items-center">
            <h2 className="font-bold">Filter Products : </h2>
            <select name="color"  onChange={handlefilter} className="p-2 mx-2" id="">
              <option disabled >
                Color
              </option>
              <option>merah</option>
              <option>kuning</option>
              <option>putih</option>
              <option>hijau</option>
              <option>biru</option>
              <option>hitam</option>
            </select>
            <select  name="size" onChange={handlefilter} className="p-2 " id="">
              <option disabled >
                Size
              </option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="flex md:justify-end mt-3 md:mt-0 items-center">
            <h2 className="font-bold mr-2">Sortir Products : </h2>
            <select onChange={(e) => setsort(e.target.value)} className="p-2 " name="" id="">
              <option value= 'newest' > Newest </option>
              <option value='asc'>Price (asc)</option>
              <option value='desc'>Price (desc)</option>
            </select>
          </div>
        </div>
      </div>
      <Popular cat={cat} filters={filters} sort={sort} />
      <Newlet />
      <Footer />
    </div>
  );
};

export default ProductList;
