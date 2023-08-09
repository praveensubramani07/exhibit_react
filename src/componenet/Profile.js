import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { username } = useParams();
  const [profileData, setProfileData] = useState(null);

  // Use the 'useEffect' hook to fetch profile data based on the 'username' parameter
  useEffect(() => {
    // Perform API call or any other logic to fetch profile data based on 'username'
    // For example:
    // fetchProfileData(username).then(data => setProfileData(data));
    checkUsername(username);
  }, [username]);

  function checkUsername(username) {
    fetch(`https://vast-rose-piranha-vest.cyclic.app/api/user/check-username/${username}`)
      .then(response => response.json()) // Use .json() instead of .JSON()
      .then(data => {
        console.log(data.exists);
        setProfileData(data.exists);
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
        // You might want to handle the error here by setting profileData to some default value or showing an error message.
      });
  }

  return (
    <>
    {(profileData === true )?
    <div>
      <h1>Profile</h1>
      <p>Username: {username}</p>
      {/* Display the fetched profile data if available */}
      {profileData && <p>Profile Data: {JSON.stringify(profileData)}</p>}
    </div>
    :
    <p>user name not found</p>
  }
    </>
  );
};

export default Profile;
