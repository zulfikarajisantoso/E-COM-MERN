import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/Home";
import ProductList from "./page/ProductList";
import Product from "./page/Product";
import Keranjang from "./page/Keranjang";
import Registrasi from "./page/Registrasi";
import Login from "./page/Login";
import Succes from "./page/Succes";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Keranjang />} />
        <Route path="/registrasi" element={<Registrasi />} />
        <Route path="/succes" element={<Succes />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
