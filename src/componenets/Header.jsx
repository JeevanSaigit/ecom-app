import { Link, useNavigate } from "react-router-dom"

function Header(){
  const name=localStorage.getItem("username");
  const navigate =useNavigate();

  // const handlelogout=()=>{
  //   localStorage.clear();
  //   navigate("/");
  // };

  const handleLogout=()=>{
    localStorage.removeItem("isloggedin");
    localStorage.removeItem("username");
    localStorage.removeItem("cart");

    navigate("/");
  }
  return(
    <>

    <header>
    <h1>KL University shop</h1>


    <nav>
      <Link to ="/">Home</Link>
      <Link to ="/product1">products</Link>
      { <Link to ="/cart">cart</Link> }
    {name ? <button onClick={handleLogout} className="pbtn">LogOut</button> : null}
    </nav>

    {/* <div id="user-display">  welcome,user</div> */}
   <div id="user-display">
      {name? `Welcome,$(name)`:" "}
    </div>
    </header>
    

    </>
  )

}
export default Header