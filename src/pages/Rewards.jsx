import React from "react";
import { useNavigate } from "react-router-dom";
import "./Rewards.css";


function Rewards(){

const navigate = useNavigate();


return(

<div className="page-container">


<div className="box">


<h2>My Rewards 🎁</h2>


<div className="reward-card">

<h3>Super Coins</h3>

<p>
You have 500 Super Coins
</p>


<button>
Redeem Now
</button>


</div>



<div className="reward-card">

<h3>Coupons</h3>

<p>
10% OFF on next order
</p>


<button>
Use Coupon
</button>


</div>




<button onClick={()=>navigate("/")}>
Back To Home
</button>



</div>


</div>

)

}


export default Rewards;