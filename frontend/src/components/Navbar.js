import React from "react";
import Search from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className="">
      <div
        className="grid grid-cols-3 gap-3 "
        style={{ height: "50px", backgroundColor: "#fff" }}
      >
        <div className="ml-2 flex items-center">
          <h6 className=" hidden md:flex ">IND</h6>
          <div className="border-2 ml-2 w-30 rounded">
            <input
              className="border-none w-10  outline-none ml-1"
              placeholder="Search"
            />
            <Search className="text-sm pr-1" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-lg">TOUNBASOK.</h1>
        </div>
        <div className="flex justify-end items-center mr-5 gap-2">
          <Link className="" to="/login">
            <h4>SIGN IN </h4>
          </Link>

          <Link to="/cart">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCart style={{ fontSize: "23px" }} color="action" />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
