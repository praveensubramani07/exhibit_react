import React, { useState } from "react";
import "./newuser.css";
import Dashboard from "./Dashboard.js";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import Cookies
import Nav from './Nav.js';

export default function Newuser(props) {
  const [input, setInput] = useState("");
  const [available, setAvailable] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    setInput(e.target.value);
    setLoading(true);

    try {
      const response = await fetch(
        `https://vast-rose-piranha-vest.cyclic.app/api/user/check-username/${e.target.value}`
      );
      const data = await response.json();
      console.log(data.available);
      setAvailable(data.available);
    } catch (error) {
      console.error("Error checking username availability:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataToSend = {
      username: input,
      email: props.email, // Use the email prop
      profilePicture: props.profile, // Use the profile prop
    };

    const response = await fetch(
      `https://vast-rose-piranha-vest.cyclic.app/api/newuser`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      }
    );

    console.log(response);

    // Set the email as a cookie
    Cookies.set("email", props.email,{ expires: 7 });

    // Navigate to the dashboard after submission
    navigate("/dashboard");
  };

  return (
    <>
      {submitted ? (
        <Dashboard />
      ) : (
        <Nav/>
        <div className="bd">
          <form onSubmit={handleSubmit}>
            <label htmlFor="user">Username</label>
            <input
              type="text"
              id="user"
              value={input}
              onChange={handleChange}
              required
            />
            {loading ? (
              <p>Loading...</p>
            ) : (
              <p>
                {input.length < 1
                  ? ""
                  : available === true
                  ? "Username available"
                  : "Username is already taken"}
              </p>
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
}
