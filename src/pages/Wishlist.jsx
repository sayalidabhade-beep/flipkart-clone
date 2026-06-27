import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Wishlist.css";


function Wishlist() {

  const navigate = useNavigate();


  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );



  const removeWishlist = (index) => {


    const updatedWishlist = wishlist.filter(
      (item, i) => i !== index
    );


    setWishlist(updatedWishlist);


    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );


  };



  const addToCart = (item) => {


    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    cart.push(item);


    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );


    alert("Added to Cart");


  };



  return (

    <div className="wishlist-container">


      <div className="wishlist-box">


        <h2>
          My Wishlist
        </h2>



        {
          wishlist.length === 0 ? (

            <h3>
              Wishlist is Empty
            </h3>


          ) : (


            wishlist.map((item,index)=>(


              <div 
                className="wishlist-card"
                key={index}
              >


                <img
                  src={item.thumbnail || item.image}
                  alt={item.title}
                  width="120"
                />



                <h3>
                  {item.title}
                </h3>



                <p>
                  Price: ₹{item.price}
                </p>




                <button
                  onClick={() => addToCart(item)}
                >

                  Add To Cart

                </button>




                <button
                  className="remove-btn"
                  onClick={() => removeWishlist(index)}
                >

                  Remove

                </button>



              </div>


            ))


          )

        }




        <button
          onClick={() => navigate("/")}
        >

          Back To Home

        </button>



      </div>


    </div>


  );

}


export default Wishlist;