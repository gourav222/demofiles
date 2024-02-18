import React, { useEffect, useState } from "react";
import { registerUser } from "../../service/authServices";
import "./ContactFrom.css"; // Import CSS file for styling
import { useNavigate,useLocation } from "react-router-dom";

const ContactForm = () => {
  const [contactNumber, setContactNumber] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   if (!localStorage.getItem("avatar")) {
  //     navigate("/");
  //   }
  // }, []);
  // Function to handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., send data to backend)
    // const { email, name, picture } = JSON.parse(
    //   localStorage.getItem("avatar") as string
    // );
    const userDetails = location.state.userDetails;
    // console.log(location.state,'//////')
    const {email,name,picture} = userDetails;
    const body = {
      email,
      name,
      pic: picture,
      phoneNumber: contactNumber,
      type: true,
    };
    const resData = await registerUser(body);
    // console.log(resData,":;;")
    if (resData === 400) alert("User Already Exists");
    else {
      setContactNumber("");
      navigate("/login");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Add Contact Number</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="text"
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="Enter contact number"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
