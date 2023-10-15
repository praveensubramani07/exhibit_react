import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Nav from './Nav.js';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

export default function Dashboard() {
  const [cred, setCred] = useState(null);
  const [bio, setBio] = useState('');
  const [socialLinks, setSocialLinks] = useState([]);
  const [otherLinks, setOtherLinks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      // ... (your existing fetch code)
      const fetchData = async () => {
      try {
        const response = await fetch(`https://vast-rose-piranha-vest.cyclic.app/api/user/dashboard/${Cookies.get("email")}`);
        const data = await response.json();
        console.log(data);
        

    fetchData(); // Call the function to fetch data
      

      setCred(data);
      setBio(data.bio || '');
      setSocialLinks(data.socialLinks || []);
      setOtherLinks(data.otherLinks || []);
    };
    fetchData();
  }, []);

  if (!Cookies.get("email")) {
    navigate('/login');
    return null;
  }

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSocialLinkChange = (index, e) => {
    const updatedSocialLinks = [...socialLinks];
    updatedSocialLinks[index] = e.target.value;
    setSocialLinks(updatedSocialLinks);
  };

  const handleOtherLinkChange = (index, e) => {
    const updatedOtherLinks = [...otherLinks];
    updatedOtherLinks[index] = e.target.value;
    setOtherLinks(updatedOtherLinks);
  };

  const saveChanges = async () => {
    // Send the updated bio, socialLinks, and otherLinks to the backend
    const updatedCred = {
      ...cred,
      bio,
      socialLinks,
      otherLinks,
    };

    try {
      await fetch(`https://vast-rose-piranha-vest.cyclic.app/api/user/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCred),
      });

      // Optionally, you can set a success message or handle the response.
      // Redirect to another page, display a success message, etc.
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

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

        {/* Edit Bio */}
        <textarea value={bio} onChange={handleBioChange} />
        <button onClick={saveChanges}>Save Bio</button>

        {/* Edit Social Links */}
        {socialLinks.map((link, index) => (
          <div key={index}>
            <input
              value={link}
              onChange={(e) => handleSocialLinkChange(index, e)}
            />
          </div>
        ))}
        <button onClick={() => setSocialLinks([...socialLinks, ''])}>Add Social Link</button>

        {/* Edit Other Links */}
        {otherLinks.map((link, index) => (
          <div key={index}>
            <input
              value={link}
              onChange={(e) => handleOtherLinkChange(index, e)}
            />
          </div>
        ))}
        <button onClick={() => setOtherLinks([...otherLinks, ''])}>Add Other Link</button>
        <button onClick={saveChanges}>Save Links</button>
      </div>
    </>
  );
}
