import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Orders.css";


function Orders() {

  const navigate = useNavigate();


  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );


  const [selectedItems, setSelectedItems] = useState([]);



  const selectItem = (index) => {


    if(selectedItems.includes(index)){


      setSelectedItems(
        selectedItems.filter(
          (id)=> id !== index
        )
      );


    }else{


      setSelectedItems([
        ...selectedItems,
        index
      ]);


    }

  };





  const cancelSelectedOrders = () => {


    const updatedOrders = orders.map((item,index)=>{


      if(selectedItems.includes(index)){


        return {

          ...item,

          status:"Cancelled"

        };


      }


      return item;


    });



    setOrders(updatedOrders);



    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );


    setSelectedItems([]);


  };





  return (


<div className="orders-container">


<div className="orders-box">


<h2>My Orders</h2>


<p>
Selected Items: {selectedItems.length}
</p>





{

orders.length === 0 ? (

<h3>No Orders Found</h3>


) : (


orders.map((item,index)=>(



<div 
className="order-card"
key={index}
>



<input

type="checkbox"

checked={selectedItems.includes(index)}

onChange={()=>selectItem(index)}

/>





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




<p>
Status: {item.status || "Processing"}
</p>





</div>



))


)



}







<button
onClick={cancelSelectedOrders}
>

Cancel Selected Orders

</button>





<button
onClick={()=>navigate("/address")}
>

Manage Address

</button>





<button
onClick={()=>navigate("/")}
>

Back To Home

</button>




</div>


</div>


);


}


export default Orders;