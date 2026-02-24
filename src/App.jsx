import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./componenets/Home"
import "./componenets/Style.css"
import Product from "./componenets/Product"
import Login from "./componenets/Login"
import Cart from "./componenets/Cart"
import Product1 from "./componenets/Product1"
import Signup from "./componenets/Signup"
import AdminPage from "./componenets/Admin"
function App(){
  return(
    <>
    <HashRouter>
    <Routes>
    <Route path="/"element={<Home/>}/>
    <Route path="/products"element={<Product/>}/>
    <Route path ="/login"element={<Login/>}/>
    <Route path="/cart"element={<Cart/>}/>    
    <Route path="/product1"element={<Product1/>}/>
     <Route path="/signup"element={<Signup/>}/>
     <Route path="/Admin"element={<AdminPage/>}/>
    </Routes>
    </HashRouter>

    </>
  )

}
export default App