import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Nav() {
  const [dashboard, setDashboard] = useState(Cookies.get("email"));
;

  const logout = () => {
    // Your logout logic here
    // Example: Cookies.remove("email");
    console.log(dashboard, "dash");
    console.log(Cookies.get('email'), "email");
    Cookies.remove("email");
    setDashboard(null); // Reset the 'dashboard' state after logout
  };

  return (
    <>
      <nav>
        <h1>ProfileVerse</h1>
        <ul>
          {Cookies.get("email") !== null&&Cookies.get("email")!==undefined  ?  (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <button onClick={logout}>Logout</button>
            </>
          ) :
          (
            <>
              <Link to="/login">Logi</Link>
              {console.log(dashboard, "dtfgh")}
            </>
          )
}
        </ul>
      </nav>
    </>
  );
}
