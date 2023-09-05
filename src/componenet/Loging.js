import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";

export default function Loging() {
  const [email, setEmail] = useState("not");
  const history = useHistory();

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
          Cookies.set("email", email); // Set the cookie if the user exists
          history.push("/dashboard"); // Redirect to dashboard
        }
      }
    };
    fetchdata();
  }, [email, history]);

  const handleLoginSuccess = (credentialResponse) => {
    var decoded = jwt_decode(credentialResponse.credential);
    setEmail(decoded.email);
    console.log("ttt", decoded.email, decoded.picture);
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <>
      {Cookies.get("email") ? (
        history.push("/dashboard") // Redirect to dashboard if cookie is set
      ) : (
        <div>
          {/* Your login content */}
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
