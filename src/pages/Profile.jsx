import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {

  const navigate = useNavigate();

  // Get login user data
  const user = JSON.parse(localStorage.getItem("user"));


  const logout = () => {

    localStorage.removeItem("user");

    navigate("/login");

  };


  return (

    <div className="profile-container">


      <div className="profile-box">


        <h2>My Profile</h2>


        {user ? (

          <>

            <div className="profile-info">

              <h3>User Information</h3>


              <p>
                <b>Name:</b> {user.name || "User"}
              </p>


              <p>
                <b>Email:</b> {user.email}
              </p>


              <p>
                <b>Phone:</b> 9876543210
              </p>


              <p>
                <b>Address:</b> Maharashtra, India
              </p>


            </div>



            <button 
              onClick={() => navigate("/orders")}
            >
              My Orders
            </button>



            <button 
              onClick={() => navigate("/wishlist")}
            >
              Wishlist
            </button>



            <button 
              onClick={logout}
            >
              Logout
            </button>


          </>


        ) : (

          <>

          <h3>Please Login First</h3>


          <button 
            onClick={() => navigate("/login")}
          >
            Login
          </button>


          </>

        )}



      </div>


    </div>

  );

}


export default Profile;