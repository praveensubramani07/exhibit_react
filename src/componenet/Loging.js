import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import Nav from "./Nav";

import Newuser from "./Newuser";
import { BrowserRouter, Routes, Route, Redirect, Link } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Loging() {
  const [cookie, setCookie] = useState(Cookies.get("email"));
  var [check, setCheck] = useState(null);
  const [email, setEmail] = useState("not");
  const [profileUrl, setProfileUrl] = useState();
  // If using js-cookie
  const cookieValue = Cookies.get("email");
  console.log(cookieValue, "COOKIE VQLUE");
  if (cookieValue == null) {
  }

  useEffect(() => {
    const fetchdata = async () => {
      if (email !== "not") {
        var response = await fetch(
          `https://vast-rose-piranha-vest.cyclic.app/api/user/check-existence/${email}`
        );
        var data = await response.json();
        console.log(data.exists);
        console.log(email, "return email");
        setCheck(data.exists);
        if (data.exists) {
          // If using js-cookie
          setCookie(email);
          Cookies.set("email", email); // 'expires' is optional, sets the expiration date
        }
      }
    };
    fetchdata();
  }, [email]); //postData() add her

  return (
    <>
      {/* //to redirect to dashboard if existing user,otherwise render new User , this will work only after login is clicked */}
      {check === null ? (
        <p></p>
      ) : check ? (
        window.location.href = '/dashboard'
      ) : (
        <Newuser gmail={email} profile={profileUrl} />
      )}

      {/* if cookie is already set redirect to dashboard */}
      {Cookies.get("email") !== null && Cookies.get("email") ? (
         window.location.href = '/dashboard'
      ) : (
        <></>
      )}

      {/* to show login button omly when cookie is not set and not checked */}
      {check === null  ? (
        console.log("cheking"),        <GoogleOAuthProvider clientId="268873119322-g9kj6sj7fb8dmbs2mnj2r14gnk719md0.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              var decoded = jwt_decode(credentialResponse.credential);
              setEmail(decoded.email);
              console.log("ttt", decoded.email, decoded.picture);
              var trimed = [decoded.email];
              setProfileUrl([decoded.picture]);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      ) : (
        <></>
      )}
    </>
  );
}
