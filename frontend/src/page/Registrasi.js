
import Person from "@material-ui/icons/Person";
import { Link } from 'react-router-dom';


const Registrasi = () => {
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
          <h1 className="text-center text-4xl font-extrabold">DAFTAR </h1>
        </div>
        <div className="flex flex-col px-10">
          <input
            type="text"
            className="bg-white h-12 border-2 border-black p-2 rounded-md"
            placeholder="Username"
          />
          <input
            type="email"
            className="bg-white h-12 border-2 border-black p-2 mt-2 rounded-md"
            placeholder="Email"
          />
          <input
            type="password"
            className="bg-white h-12 border-2 border-black p-2 mt-2 rounded-md"
            placeholder="Password "
          />
          

          
          <button className="bg-green-700 h-12 mt-4 rounded-md font-bold text-white">
            DAFTAR
          </button>

        </div>
          <p className="text-center mt-2" style={{fontSize:'10px'}}> Sudah punya akun? <Link to='/login'>Login</Link>  </p>
 
      </div>
    </div>
  </div>
  )
}

export default Registrasi