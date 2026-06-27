import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {

  const navigate = useNavigate();


  const placeOrder = () => {

    localStorage.setItem(
      "orders",
      JSON.stringify(cartItems)
    );


    navigate("/orders");

  };



  return (

    <div style={{padding:"20px"}}>

      <h2>My Cart</h2>


      {
        cartItems.length === 0 ? (

          <h3>Cart is Empty</h3>

        ) : (

          cartItems.map((item,index)=>(

            <div 
              key={index}
              style={{
                border:"1px solid #ddd",
                padding:"15px",
                margin:"10px"
              }}
            >

              <img
                src={item.thumbnail || item.image}
                alt={item.title}
                width="100"
              />


              <h3>
                {item.title}
              </h3>


              <p>
                Price: ₹{item.price}
              </p>


            </div>

          ))

        )
      }



      {
        cartItems.length > 0 &&

        <button
          onClick={placeOrder}
          style={{
            padding:"10px",
            background:"blue",
            color:"white"
          }}
        >

          Place Order

        </button>

      }


    </div>

  );

}


export default Cart;