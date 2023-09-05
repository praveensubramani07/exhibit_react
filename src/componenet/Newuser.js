import React, { useState } from "react";
import "./newuser.css";
import Dashboard from "./Dashboard.js";
import { useHistory } from "react-router-dom";

export default function Newuser(props) {
  const [input, setInput] = useState("");
  const [usermail, setUsermail] = useState(props.gmail);
  const [pro, setPro] = useState(props.profile.join(","));
  const [available, setAvailable] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();

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
      email: usermail,
      profilePicture: pro,
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

    // Assuming submission is successful, set submitted to true
    setSubmitted(true);

    // Redirect to the dashboard
    history.push("/dashboard");
  };

  return (
    <>
      {submitted ? (
        <Dashboard />
      ) : (
        <div className="bd">
          <form onSubmit={handleSubmit}>
            <label htmlFor="user">Usename</label>
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
    
