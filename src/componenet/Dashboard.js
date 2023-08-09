import React, { useEffect ,useState} from 'react';
import Cookies from 'js-cookie';
import Nav from './Nav.js'

export default function Dashboard() {
  const [cred,setCred]=useState()
  useEffect(() => {
    // Declare an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(`https://vast-rose-piranha-vest.cyclic.app/api/user/dashboard/${Cookies.get("email")}`);
        const data = await response.json();
        console.log(data);
        setCred(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the function to fetch data

    // Return a cleanup function to cancel any pending requests
    return () => {
      // Add any necessary cleanup code here (if needed)
    };
  }, []); // Pass an empty dependency array to run the effect only once on mount

  // Redirect if the email cookie is not present
  if (Cookies.get("email") === undefined) {
    window.location.href = '/login';
    return null; // Return null to prevent rendering anything before redirect
  }

  return (
    <>
    <Nav/>
      <h1>Dashboard</h1>
      <div className='cont'>
      <img src={cred.profilePicture}></img>
      <p>{cred.username}</p>
      <p>{cred.email}</p>

      </div>
    </>
  ); 
}
