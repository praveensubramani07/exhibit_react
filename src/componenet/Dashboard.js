import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Nav from './Nav.js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Loader from './Loader'; // Import Loader component

export default function Dashboard() {
  const [cred, setCred] = useState(null); // Initialize cred as null for loading handling
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    // Declare an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(`https://vast-rose-piranha-vest.cyclic.app/api/user/dashboard/${Cookies.get("email")}`);
        const data = await response.json();
        console.log(data);
        setCred(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setCred(null); // Set cred to null in case of an error
      }
    };

    fetchData(); // Call the function to fetch data

    // Return a cleanup function to cancel any pending requests
    return () => {
      // Add any necessary cleanup code here (if needed)
    };
  }, []); // Pass an empty dependency array to run the effect only once on mount

  // Redirect to login if the email cookie is not present
  if (!Cookies.get("email")) {
    navigate('/login'); // Use navigate to redirect to login
    return null; // Return null to prevent rendering anything before redirect
  }

  // Handle loading state using Loader component
  if (cred === null) {
    return <Loader />;
  }

  return (
    <>
      <Nav />
      <p>in das</p>
      <h1>Dashboard</h1>
      <div className='cont'>
        <img src={cred.profilePicture} alt="Profile" />
        <p>{cred.username}</p>
        <p>{cred.email}</p>
      </div>
    </>
  ); 
}
