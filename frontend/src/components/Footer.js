import React from "react";
import Instagram from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook";
import Pinterest from "@material-ui/icons/Pinterest";
import LocationOn from "@material-ui/icons/LocationOn";
import PhoneIphone from "@material-ui/icons/PhoneIphone";
import Email from "@material-ui/icons/Email";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-10 bottom-0">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <h2 className="font-extrabold text-2xl">TOUNBASOK.</h2>
          
          <h6 className="my-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </h6>
          <div className="flex gap-4">
            <div className="w-12 text-center h-12 items-center flex justify-center text-white rounded-full  bg-red-500">
              <Instagram />
            </div>
            <div className="w-12 text-center h-12 items-center flex justify-center text-white rounded-full  bg-blue-500">
              <Facebook />
            </div>
            <div className="w-12 text-center h-12 items-center flex justify-center text-white rounded-full  bg-red-600">
              <Pinterest />
            </div>
          </div>
        </div>
        <div className="my-6 md:my-0">
          <h3 className="font-extrabold mb-4 ">Link Web</h3>
          <div className="grid grid-cols-2">
            <div>
              <h5>Home</h5>
              <h5 className="my-3">Keranjang</h5>
              <h5>Info Akun</h5>
              <h5 className="my-3">Kesukaan</h5>
            </div>
            <div>
              <h5 className="">Category</h5>
              <h5 className="my-3">Populer</h5>
              <h5 className="">Order Track</h5>
              <h5 className="my-3">Terms</h5>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-extrabold mb-4">Kontak</h3>
            <div>
                <div className="flex">
                    <LocationOn />
                    <h6>JL.Gajah Mada No.3, Yogyakarta. Indonesia </h6>
                </div>
                <div className="flex my-3">
                    <PhoneIphone />
                    <h6>+62 832438503</h6>
                </div>
                <div className="flex my-3">
                    <Email />
                    <h6>tounbasok@gmail.com</h6>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
