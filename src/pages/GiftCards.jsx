import React from "react";
import { useNavigate } from "react-router-dom";
import "./GiftCards.css";


function GiftCards(){


const navigate = useNavigate();



return(

<div className="page-container">


<div className="box">


<h2>Gift Cards 🎫</h2>



<div className="gift-card">


<h3>Flipkart Gift Card</h3>


<p>
Available Balance: ₹1000
</p>


<button>
Buy Gift Card
</button>



</div>



<div className="gift-card">


<h3>Send Gift</h3>


<p>
Send happiness to your friends
</p>


<button>
Send Now
</button>


</div>




<button onClick={()=>navigate("/")}>
Back To Home
</button>



</div>


</div>

)


}


export default GiftCards;