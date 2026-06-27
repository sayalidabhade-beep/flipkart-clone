import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const [errors, setErrors] = useState({});


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  const validate = () => {

    let newErrors = {};


    // Name
    if (!formData.name) {
      newErrors.name = "Name is required";
    }


    // Email
    if (!formData.email) {

      newErrors.email = "Email is required";

    } 
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {

      newErrors.email = "Invalid email address";

    }



    // Password

    if (!formData.password) {

      newErrors.password = "Password is required";

    } 
    else if (formData.password.length < 6) {

      newErrors.password = "Password must be at least 6 characters";

    }



    // Confirm Password

    if (!formData.confirmPassword) {

      newErrors.confirmPassword = "Confirm password is required";

    } 
    else if (formData.password !== formData.confirmPassword) {

      newErrors.confirmPassword = "Passwords do not match";

    }


    return newErrors;

  };





  const handleSubmit = (e) => {

    e.preventDefault();


    const validationErrors = validate();


    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors);

      return;

    }



    // Save user data

    localStorage.setItem(
      "user",
      JSON.stringify(formData)
    );



    setErrors({});



    alert("Registration Successful!");



    // Go to Login Page

    navigate("/login");


  };





  return (

    <div className="register-container">


      <div className="register-box">


        <h2>Create Account</h2>



        <form onSubmit={handleSubmit}>


          <input

            type="text"

            name="name"

            placeholder="Enter Name"

            value={formData.name}

            onChange={handleChange}

          />


          {errors.name && (
            <span className="error">
              {errors.name}
            </span>
          )}




          <input

            type="email"

            name="email"

            placeholder="Enter Email"

            value={formData.email}

            onChange={handleChange}

          />


          {errors.email && (
            <span className="error">
              {errors.email}
            </span>
          )}






          <input

            type="password"

            name="password"

            placeholder="Enter Password"

            value={formData.password}

            onChange={handleChange}

          />


          {errors.password && (
            <span className="error">
              {errors.password}
            </span>
          )}






          <input

            type="password"

            name="confirmPassword"

            placeholder="Confirm Password"

            value={formData.confirmPassword}

            onChange={handleChange}

          />



          {errors.confirmPassword && (
            <span className="error">
              {errors.confirmPassword}
            </span>
          )}





          <button type="submit">

            Register

          </button>



        </form>




        <p>

          Already have account?

          <span 
            onClick={() => navigate("/login")}
            style={{cursor:"pointer", color:"blue"}}
          >

            Login

          </span>


        </p>



      </div>



    </div>

  );

}



export default Register;