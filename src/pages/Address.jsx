import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ManageAddress.css";


function ManageAddress(){


const navigate = useNavigate();



const [address,setAddress] = useState(

localStorage.getItem("address") || ""

);




const saveAddress = ()=>{


localStorage.setItem(
"address",
address
);


alert("Address Saved");


};





return(


<div className="page-container">


<div className="box">


<h2>Manage Address 📍</h2>




<textarea

placeholder="Enter your address"

value={address}

onChange={(e)=>setAddress(e.target.value)}

></textarea>





<button onClick={saveAddress}>

Save Address

</button>





<button 
onClick={()=>navigate("/payments")}
>

Continue To Payment 💳

</button>





<button 
onClick={()=>navigate("/")}
>

Back To Home

</button>




</div>


</div>


)


}


export default ManageAddress;