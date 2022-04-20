import React, { useState } from "react";
import Person from "@material-ui/icons/Person";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {login} from "../redux/apiCalls"

const Login = () => {

  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const dispatch = useDispatch()  
  const {isFetching, error} = useSelector((state) => state.user)

  const handleklik = (e) => {
    e.preventDefault()

    login(dispatch,{username, password})
  }

  return (
    <div className="relative">
      <img
        src="https://i.ibb.co/4Zv4ky9/pexels-mnz-1670770.jpg"
        alt=""
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          position: "",
        }}
      />
      <div className="absolute top-0 left-0 flex w-full h-full justify-center items-center ">
        <div
          
          className=" md:w-1/4 h-3/4 border-2"
          style={{ backgroundColor: "rgb(240, 240, 240)" }}
        >
          <div className=" p-10 flex flex-col items-center">
            <Person style={{ fontSize: "90px" }} />
            <h1 className="text-center text-4xl font-extrabold">LOGIN</h1>
          </div>
          <div className="flex flex-col px-10">
            <input
              type="text"
              className="bg-white h-12 border-2 border-black p-2 rounded-md"
              placeholder="Username"
              name="username"
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              type="password"
              className="bg-white h-12 border-2 border-black p-2 mt-2 rounded-md"
              placeholder="Password "
              name="password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <h6 className="text-right text-xs my-2" >Lupa password</h6>

            
            <button onClick={handleklik} disabled={isFetching} className="bg-green-700 h-12 mt-2 rounded-md font-bold text-white">
              MASUK
            </button>

            <div>
              {error && <div>Error</div>}
            </div>

          </div>
            <p className="text-center mt-2" style={{fontSize:'10px'}}> Belum punya akun? <Link to='/daftar'>Daftar</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
