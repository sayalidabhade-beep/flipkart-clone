import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home({ addToCart }) {

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");



  useEffect(() => {
    fetchProducts();
  }, [search]);



  const fetchProducts = async () => {

    try {

      const res = await fetch(
        `http://localhost:5000/products?search=${search}`
      );


      const data = await res.json();

      setProducts(data);


    } catch (error) {

      console.log(error);

    }

  };




  const handleAddToCart = (product) => {

    addToCart(product);

    alert(`${product.title} added to cart!`);

  };





  // Direct Buy / Place Order

  const placeOrder = (product) => {


    let orders =
      JSON.parse(localStorage.getItem("orders")) || [];



    orders.push({

      ...product,

      status:"Processing"

    });



    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );



    alert(`${product.title} order placed!`);



    navigate("/orders");


  };





  // Wishlist Function

  const addToWishlist = (product) => {


    let wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];



    const exist = wishlist.find(
      (item)=> item.id === product.id
    );



    if(exist){

      alert("Already added to Wishlist");

      return;

    }



    wishlist.push(product);



    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );



    alert(`${product.title} added to Wishlist ❤️`);

  };





  return (

    <>

    <Navbar 
      search={search}
      setSearch={setSearch}
    />



    <div className="products">


    {
      products.map((p)=>(


      <div 
        className="card"
        key={p.id}
      >



      <img
        src={p.thumbnail}
        alt={p.title}
      />



      <h3>
        {p.title}
      </h3>



      <h4>
        ₹{p.price}
      </h4>




      <button
        onClick={()=>handleAddToCart(p)}
      >

        Add To Cart

      </button>





      <button
        onClick={()=>placeOrder(p)}
      >

        Buy Now / Place Order

      </button>





      <button
        onClick={()=>addToWishlist(p)}
      >

        ❤️ Wishlist

      </button>



      </div>


      ))

    }


    </div>


    </>

  );

}


export default Home;