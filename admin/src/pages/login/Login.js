import React, { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  const hadleclik = (e) => {
    login(dispatch, { username, password });
  };

  return (
    <div className="">
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          style={{ padding: 10, marginBottom: 20 }}
          placeholder="username"
          onChange={(e) => setusername(e.target.value)}
          type="text"
        />
        <input
          style={{ padding: 10, marginBottom: 20 }}
          placeholder="password"
          onChange={(e) => setpassword(e.target.value)}
          type="password"
        />
        <button style={{ padding: 10, width: 90 }} onClick={hadleclik}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
