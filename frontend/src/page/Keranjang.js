import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Pengumuman from "../components/Pengumuman";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {userred} from '.././requestmetode'

const KEY = process.env.REACT_STRIPE;

const Keranjang = () => {
 
  const cart = useSelector((state) => state.cart);
  const [stripee, setStripe] = useState(null)
  const navigate = useNavigate()

  const onToken = (token) => {
    setStripe(token)
  }

  useEffect(() => {
    
    const makereq = async () => {
      try {

        const res = await userred.post('/checkout/payment', {
          tokenId: stripee.id,
          amount: 500
        })
        navigate('/succes', {data:res.data})
      } catch (error) {

      }
    }
    stripee && makereq()
  }, [stripee, cart.total, navigate])
  

  return (
    <div>
      <Navbar />
      <Pengumuman />
      <div className="p-10">
        <h1 className="text-center font-semibold text-4xl">Keranjang</h1>

        <div className="flex justify-between mt-4">
          <Link
            to="/"
            className="bg-slate-100 p-2 font-semibold border-slate-300 border-2"
          >
            Belanja Lagi
          </Link>
          <Link
            to="/"
            className="bg-slate-900 p-2 text-white font-semibold border-black border-2"
          >
            Checkout
          </Link>
        </div>
        <div className="flex-none  md:flex w-full  mt-5">
          <div className="md:w-9/12 w-full ">
            {cart.products.map((item, idx) => (
              <div
                className="grid grid-cols-1  md:grid-cols-3   "
                key={idx}
              >
                <img
                  src={item.img}
                  style={{ width: "100%", padding: "20px" }}
                  alt=""
                />
                <div className="p-1 flex flex-col justify-center">
                  <h4 className="">
                    <span className="font-bold">Product: </span> {item.title}
                  </h4>
                  <h6 className="my-3">
                    <span className="font-bold ">ID: </span> {item._id}
                  </h6>
                  <h6 className="">
                    <span className="font-bold">Warna: </span>
                    {item.color}
                  </h6>
                  <h6 className="my-3">
                    <span className="font-bold">Size: </span> {item.size}
                  </h6>
                </div>
                <div className="flex flex-col justify-center mb-10 md:mb-0">
                  <div className="flex items-center justify-center">
                    <button className="text-2xl font-bold">-</button>
                    <div className="w-42 mx-3  border-green-700 border-2 bg-slate-100 p-1 rounded-full">
                      {item.quantity}
                    </div>
                    <button className="text-2xl font-bold">+</button>
                  </div>
                  <h1 className="font-sans text-center text-3xl mt-3 ">
                    $ {item.price * item.quantity}
                  </h1>
                </div>
                <hr className="w-3/4 flex " />
              </div>
            ))}
          </div>
          <div className=" border-slate-700 w-full md:w-1/4">
            <div className="border-2 shadow-md h-full">
              <div className="p-5">
                <h1 className="text-2xl text-center">TOTAL ORDER</h1>
                <div className="p-5">
                  <div className="flex justify-between  ">
                    <h3>Subtotal : </h3>
                    <h3>$ {cart.total}</h3>
                  </div>
                  <div className="flex justify-between my-3 ">
                    <h3>Diskon : </h3>
                    <h3>$ -20</h3>
                  </div>
                  <div className="flex justify-between ">
                    <h3 className="font-bold">TOTAL : </h3>
                    <h3 className="font-bold">$ {cart.total}</h3>
                  </div>
                  <StripeCheckout
                    name="ZaShop"
                    image=""
                    description={`Your total is ${cart.total} `}
                    amount={cart.total*100}
                    billingAddress
                    shippingAddress
                    token={onToken}                   
                    stripeKey="pk_test_51JxnZ7IUgXLU4As3EbgcxydveBrKRed3vUboDr4LlV2lCHR2QEVDHwyidNZFPzhjsgWk9kOCI2RozaabHYHIg9hi00ILp7I4mO"
                  >
                    <button className="bg-black mt-3 w-full p-2 font-semibold text-white">
                      CHECKOUT NOW
                    </button>
                  </StripeCheckout>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Keranjang;
