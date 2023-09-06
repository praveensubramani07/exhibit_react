import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Newuser from "./Newuser"; // Import Newuser component
import Dashboard from "./Dashboard"; // Import Dashboard component

export default function Loging() {
  const [email, setEmail] = useState("not");
  const [profileUrl, setProfileUrl] = useState(""); // State to store profile URL
  const [showNewUser, setShowNewUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      if (email !== "not") {
        var response = await fetch(
          `https://vast-rose-piranha-vest.cyclic.app/api/user/check-existence/${email}`
        );
        var data = await response.json();
        console.log(data.exists);
        console.log(email, "return email");
        if (data.exists) {
          Cookies.set("email", email);
          navigate("/dashboard");
        } else {
          // User doesn't exist, show the Newuser component
          setShowNewUser(true);
        }
      }
    };
    fetchdata();
  }, [email, navigate]);

  const handleLoginSuccess = (credentialResponse) => {
    var decoded = jwt_decode(credentialResponse.credential);
    setEmail(decoded.email);
    setProfileUrl(decoded.picture); // Set the profile URL from the decoded response
    console.log("ttt", decoded.email, decoded.picture);
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };
  // Redirect to login if the email cookie is not present
  if (Cookies.get("email")) {
    navigate('/dashboard'); // Use navigate to redirect to login
    return null; // Return null to prevent rendering anything before redirect
  }
  return (
    <>
      {Cookies.get("email") ? (
        navigate("/dashboard")
      ) : showNewUser ? (
        // Render Newuser component with email and profile as props
        <Newuser email={email} profile={profileUrl} />
      ) : (
        <div>
          <GoogleOAuthProvider clientId="268873119322-g9kj6sj7fb8dmbs2mnj2r14gnk719md0.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginError}
            />
          </GoogleOAuthProvider>
        </div>
      )}
    </>
  );
}
