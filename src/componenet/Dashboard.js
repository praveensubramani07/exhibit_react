import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Nav from './Nav.js';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!Cookies.get("email")) {
        navigate('/login');
      } else {
        try {
          const response = await fetch(`https://vast-rose-piranha-vest.cyclic.app/api/user/dashboard/${Cookies.get("email")}`);
          if (response.ok) {
            const data = await response.json();
            setUser(data);
          } else {
            // Handle the error, e.g., redirect to an error page
            navigate('/error');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [navigate]);

  const handleBioChange = (e) => {
    setUser({ ...user, bio: e.target.value });
  };

  const handleSocialLinkChange = (index, e) => {
    const updatedSocialLinks = [...user.socialLinks];
    updatedSocialLinks[index].url = e.target.value;
    setUser({ ...user, socialLinks: updatedSocialLinks });
  };

  const handleOtherLinkChange = (index, e) => {
    const updatedOtherLinks = [...user.otherLinks];
    updatedOtherLinks[index].url = e.target.value;
    setUser({ ...user, otherLinks: updatedOtherLinks });
  };

  const saveChanges = async () => {
    try {
      await fetch(`https://vast-rose-piranha-vest.cyclic.app/api/user/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      // Optionally, you can set a success message or handle the response.
      // Redirect to another page, display a success message, etc.
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  if (user === null) {
    return <Loader />;
  }

  return (
    <>
      <Nav />
      <p>in das</p>
      <h1>Dashboard</h1>
      <div className='cont'>
        <img src={user.profilePicture} alt="Profile" />
        <p>{user.username}</p>
        <p>{user.email}

        {/* Edit Bio */}
        <textarea value={user.bio} onChange={handleBioChange} />
        <button onClick={saveChanges}>Save Bio</button>

        {/* Edit Social Links */}
        {user.socialLinks.map((link, index) => (
          <div key={index}>
            <input
              value={link.url}
              onChange={(e) => handleSocialLinkChange(index, e)}
            />
          </div>
        ))}
        <button onClick={() => setUser({ ...user, socialLinks: [...user.socialLinks, { platform: '', url: '' }])}>Add Social Link</button>

        {/* Edit Other Links */}
        {user.otherLinks.map((link, index) => (
          <div key={index}>
            <input
              value={link.url}
              onChange={(e) => handleOtherLinkChange(index, e)}
            />
          </div>
        ))}
        <button onClick={() => setUser({ ...user, otherLinks: [...user.otherLinks, { title: '', url: '' }])}>Add Other Link</button>
        <button onClick={saveChanges}>Save Links</button>
      </div>
    </>
  );
}
