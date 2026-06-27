import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payments.css";


function Payments() {


const navigate = useNavigate();


const [payment, setPayment] = useState("");

const [showOrder, setShowOrder] = useState(false);




const handlePayment = () => {


if(!payment){

alert("Please select payment method");

return;

}


setShowOrder(true);


};





const placeOrder = () => {


alert("Order Placed Successfully 🎉");


navigate("/");


};





return (


<div className="payment-container">


<div className="payment-box">


<h2>
Payment Methods 💳
</h2>





{
!showOrder ? (


<>


<div className="payment-option">


<input

type="radio"

name="payment"

value="UPI"

onChange={(e)=>setPayment(e.target.value)}

/>


<label>
UPI (Google Pay / PhonePe / Paytm)
</label>


</div>





<div className="payment-option">


<input

type="radio"

name="payment"

value="Credit Card"

onChange={(e)=>setPayment(e.target.value)}

/>


<label>
Credit / Debit Card
</label>


</div>





<div className="payment-option">


<input

type="radio"

name="payment"

value="Net Banking"

onChange={(e)=>setPayment(e.target.value)}

/>


<label>
Net Banking
</label>


</div>





<div className="payment-option">


<input

type="radio"

name="payment"

value="Cash On Delivery"

onChange={(e)=>setPayment(e.target.value)}

/>


<label>
Cash On Delivery
</label>


</div>





<button onClick={handlePayment}>

Continue Payment

</button>


</>



) : (



<>


<h2>
Order Details 🛒
</h2>


<p>
Payment Method: <b>{payment}</b>
</p>


<p>
Delivery Address: Saved Address
</p>


<p>
Order Status: Ready To Place
</p>




<button onClick={placeOrder}>

Place Order

</button>




<button 
onClick={()=>setShowOrder(false)}
>

Change Payment

</button>


</>



)

}





<button
onClick={()=>navigate("/address")}
>

Back To Address

</button>



</div>


</div>


);


}


export default Payments;