import { Link } from "react-router-dom"

function Content(){
  return(
    <>
   <section className="content">
      <h2>Welcome to MyShop!</h2>
      <p>Find the best deals on top products</p>

      <Link  to="/product1" className="btn">
        shop now
      </Link>
    </section>
    </>
  )

}
export default Content