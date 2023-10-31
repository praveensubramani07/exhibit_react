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

  const handleSocialLinkNameChange = (index, e) => {
    const updatedSocialLinks = [...user.socialLinks];
    updatedSocialLinks[index].platform = e.target.value;
    setUser({ ...user, socialLinks: updatedSocialLinks });
  };

  const handleOtherLinkChange = (index, e) => {
    const updatedOtherLinks = [...user.otherLinks];
    updatedOtherLinks[index].url = e.target.value;
    setUser({ ...user, otherLinks: updatedOtherLinks });
  };

  const handleOtherLinkNameChange = (index, e) => {
    const updatedOtherLinks = [...user.otherLinks];
    updatedOtherLinks[index].title = e.target.value;
    setUser({ ...user, otherLinks: updatedOtherLinks });
  };

  const saveChanges = async () => {
    try {
      await fetch(`https://vast-rose-piranha-vest.cyclic.app/api/user/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const addSocialLink = () => {
    setUser({ ...user, socialLinks: [...user.socialLinks, { platform: "", url: "" }] });
  };

  const addOtherLink = () => {
    setUser({ ...user, otherLinks: [...user.otherLinks, { title: '', url: '' }] });
  };

  if (user === null) {
    return <Loader />;
  }

  return (
    <>
      <Nav />
      <h1>Dashboard</h1>
      <div className='cont'>
        <img src={user.profilePicture} alt="Profile" />
        <p>{user.username}</p>
        <p>{user.email}</p>

        {/* Edit Bio */}
        <textarea value={user.bio} onChange={handleBioChange} />
        <button onClick={saveChanges}>Save Bio</button>

        {/* Edit Social Links */}
        {user.socialLinks.map((link, index) => (
          <div key={index}>
            <input
              value={link.platform}
              onChange={(e) => handleSocialLinkNameChange(index, e)}
              placeholder="Name"
            />
            <input
              value={link.url}
              onChange={(e) => handleSocialLinkChange(index, e)}
              placeholder="URL"
            />
          </div>
        ))}
        <button onClick={addSocialLink}>Add Social Link</button>

        {/* Edit Other Links */}
        {user.otherLinks.map((link, index) => (
          <div key={index}>
            <input
              value={link.title}
              onChange={(e) => handleOtherLinkNameChange(index, e)}
              placeholder="Name"
            />
            <input
              value={link.url}
              onChange={(e) => handleOtherLinkChange(index, e)}
              placeholder="URL"
            />
          </div>
        ))}
        <button onClick={addOtherLink}>Add Other Link</button>

        <button onClick={saveChanges}>Save Links</button>
      </div>
    </>
  );
        }
