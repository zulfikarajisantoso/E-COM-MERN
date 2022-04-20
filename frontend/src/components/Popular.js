import React, { useEffect, useState } from "react";
import { popularproduct } from "../data/data.js";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartOutlined from "@material-ui/icons/AddShoppingCartOutlined";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import axios from "axios";
import { Link } from "react-router-dom";

const Popular = ({ filters, sort, cat }) => {
  const [products, setproducts] = useState([]);
  const [filterprod, setfilterprod] = useState([]);

  useEffect(() => {
    const getprodut = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/products?category=${cat}`
            : 'http://localhost:5000/products'
        );
        setproducts(res.data);
   
      } catch (error) {
        
      }
    };
    getprodut();
  }, [cat]);

  console.log(products)


  
  useEffect(() => {
    cat &&
    setfilterprod(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => {
            item[key].includes(value);
          })
        )
      );
  
  }, [products, cat, filters]);

  // useEffect(() => {
    
  //   if(sort === 'newest') {
  //     setfilterprod((prev) =>{
  //       [...prev].sort((a,b) => a.createdAt = b.createdAt)
  //     })
  //   }else if (sort === 'asc'){
  //     setfilterprod((prev) =>{
  //       [...prev].sort((a,b) => a.price - b.price)
  //     })
  //   }
  //   else {
  //     setfilterprod((prev) =>{
  //       [...prev].sort((a,b) => b.price = a.price)
  //     })
  //   }

  // }, [sort])
  


  return (
    <div className=" p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-3 justify-center ">
        { cat ? filterprod.map((item) => {
          return (
            <div key={item._id} className="relative conta">
              <img src={item.img} style={{ width: "100%" }} />
              <div className="absolute top-0 left-0 flex w-full h-full items-center justify-center gap-3 bgbokus">
                <div className="bg-slate-100 w-30 p-2 rounded-full buderanpupular">
                  <AddShoppingCartOutlined />
                </div>
                <div className="bg-slate-100 w-30 p-2 rounded-full buderanpupular">
                  <Link to={`/product/${item._id}`}>
                   <SearchOutlined />
                  </Link>
        
                </div>
                <div className="bg-slate-100 w-30 p-2 rounded-full buderanpupular">
                  <FavoriteBorder />
                </div>
              </div>
            </div>
          )
        }) 
        : products .slice (0, 8)
        .map((item) => {
          return (
            <div key={item._id} className="relative conta">
              <img src={item.img} style={{ width: "100%" }} />
              <div className="absolute top-0 left-0 flex w-full h-full items-center justify-center gap-3 bgbokus">
                <div className="bg-slate-100 w-30 p-2 rounded-full buderanpupular">
                  <AddShoppingCartOutlined />
                </div>
                <div className="bg-slate-100 w-30 p-2 rounded-full buderanpupular">
                <Link to={`/product/${item._id}`}>
                   <SearchOutlined />
                  </Link>
                </div>
                <div className="bg-slate-100 w-30 p-2 rounded-full buderanpupular">
                  <FavoriteBorder />
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  );
};

export default Popular;
