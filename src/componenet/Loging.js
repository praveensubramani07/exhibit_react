import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Newuser from "./Newuser";
import Dashboard from "./Dashboard";
import Nav from './Nav.js';
import Loader from './Loader'; // Import or create your Loader component
import "./login.css";

export default function Loging() {
  const [email, setEmail] = useState("not");
  const [profileUrl, setProfileUrl] = useState("");
  const [showNewUser, setShowNewUser] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      if (email !== "not") {
        setLoading(true); // Set loading to true while fetching data
        var response = await fetch(
          `https://vast-rose-piranha-vest.cyclic.app/api/user/check-existence/${email}`
        );
        var data = await response.json();
        console.log(data.exists);
        console.log(email, "return email");
        if (data.exists) {
          Cookies.set("email", email, { expires: 30 });
          navigate("/dashboard");
        } else {
          setShowNewUser(true);
        }
        setLoading(false); // Set loading back to false after data is fetched
      }
    };
    fetchdata();
  }, [email, navigate]);

  const handleLoginSuccess = (credentialResponse) => {
    var decoded = jwt_decode(credentialResponse.credential);
    setEmail(decoded.email);
    setProfileUrl(decoded.picture);
    console.log("ttt", decoded.email, decoded.picture);
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  const isEmailCookieSet = Cookies.get("email");

  useEffect(() => {
    if (isEmailCookieSet) {
      navigate("/dashboard");
    }
  }, [isEmailCookieSet, navigate]);

  return (
    <>
      {loading ? (
        // Render a loader component while loading
        <Loader />
      ) : isEmailCookieSet ? (
        <Dashboard />
      ) : showNewUser ? (
        <Newuser email={email} profile={profileUrl} />
      ) : (
        <>
          <Nav />
          <div className="main-login">
            <div className="login-btn">
              <h2>Welcome to, ExhibitMe</h2>
              <p>Continue with google</p>
              <GoogleOAuthProvider clientId="268873119322-g9kj6sj7fb8dmbs2mnj2r14gnk719md0.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={handleLoginError}
                />
              </GoogleOAuthProvider>
            </div>
          </div>
        </>
      )}
    </>
  );
}
