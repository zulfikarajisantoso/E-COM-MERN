import React, { useState } from "react";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import {dataslider} from '../data/data.js';

const Slider = () => {

    const [indx, setidx] = useState(0)
    const klik = (direction) => {
        
        if(direction === 'kiri'){
            setidx(indx > 0 ? indx - 1 : 2);

        }
        else {
            setidx(indx < 2 ? indx +1 : 0);
        }
    } 

  return (
    <div
      className=" hidden md:flex relative "
      style={{ height: "100vh", width: "100%", overflow: "hidden" }}
    >
      <div className=" items-center flex justify-center bottom-0 top-0 m-auto left-7 absolute">
        <ArrowLeft className=" bg-gray-400  text-white cursor-pointer " onClick={() => klik("kiri")} />
      </div>
      <div className="flex justify-center " style={{ transform:`translateX(${indx * -100}vw)` }}>
       {dataslider.map((item, idx) => {
           return (
            
            <div className="slider justify-center" key={item.id} bg="bbb" style={{ width:'100vw' }}>
            <div className="flex items-center justify-center" style={{ height: "100%" }}>
              <div className="h-full flex justify-center  w-2/4  ">
                <img
                  className=" w-3/4 h-5/6"
                  src={item.img}
                />
              </div>
              <div className="flex flex-col w-2/4">
                <h1 className="font-bold text-6xl ml-25 w-3/4 ">{item.title}</h1>
                <p className="ml-25 py-7 w-3/4">{item.desc}</p>
  
                <button className="flex justify-start ml-32 border-2 w-48 h-10 px-10 pt-1">
                  Lihat Sekarang
                </button>
              </div>
            </div>
          </div>


           )
       })}
  
        
      </div>
      <div className="  items-center flex justify-center bottom-0 top-0  m-auto right-7  absolute">
        <ArrowRight
          className=" bg-gray-400  text-white cursor-pointer "
          onClick={() => klik("kanan")}
        />
      </div>
    </div>
  );
};

export default Slider;
