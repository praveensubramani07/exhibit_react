import React, {  useState } from "react";
import "./newuser.css";

export default function Newuser(props) {
  const [input, setInput] = useState("");
  const [usermail, setUsermail] = useState(props.gmail);
  const [pro, setPro] = useState(props.profile.join(","));
  const [available, setAvailable] = useState(null);
  const [loading, setLoading] = useState(false);
  const [entered,setEntered]=useState()

  const handelChange = async (e) => {
    setInput(e.target.value);
    setLoading(true); // Show the loading indicator
    try {
      const response = await fetch(
        `https://vast-rose-piranha-vest.cyclic.app/api/user/check-username/${e.target.value}`
      );
      const data = await response.json();
      console.log(data.available);
      setAvailable(data.available);
    } catch (error) {
      console.error("Error checking username availability:", error);
      // Handle the error here if necessary
    } finally {
      setLoading(false); // Hide the loading indicator
    }
  };

  const handelSubmit = (event) => {
    event.preventDefault();

    const dataTosend = {
      username: input,
      email: usermail,
      profilePicture: pro,
    };
    const response = fetch(
      `https://vast-rose-piranha-vest.cyclic.app/api/newuser`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataTosend),
      }
    );
    console.log(response);
  };

  return (
    <>
      <div className="bd">
        <form onSubmit={handelSubmit}>
          <label htmlFor="user">UserName</label>
          <input type="text" id="user" value={input} onChange={handelChange}required/>
          {loading ? (
            <p>Loading...</p>
          ) : (
            available === true ? (
              <>{( input.length<1)?<p></p>:<p>username available</p>}</>
            ) : (
              <>{(input.length<1)?<p></p>:<p>username is already taken</p>}</>
            )
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
