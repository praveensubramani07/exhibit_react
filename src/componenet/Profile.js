import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./profile-style.css";
import Loader from "./Loader";

const Profile = () => {
  const { username } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    checkUsername(username);
    fetchUser(username);
  }, [username]);

  function fetchUser(username) {
    fetch(`https://vast-rose-piranha-vest.cyclic.app/api/user/${username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserInfo(data);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }

  function checkUsername(username) {
    fetch(
      `https://vast-rose-piranha-vest.cyclic.app/api/user/check-username/${username}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.exists);
        setProfileData(data.exists);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }

  return (
    <>
      {profileData === true ? (
        <div className="main">
          <div className="container-of-content">
            <div className="image-container">
              <img src={userInfo.profilePicture} alt="Profile Avatar" />
            </div>
            <h1>@{userInfo.username}</h1>
            <p className="bio">{userInfo.bio}</p>
            <div className="social-links">
              {userInfo.socialLinks &&
                userInfo.socialLinks.map((socialLink) => (
                  <a key={socialLink._id} href={socialLink.url}>
                    <img
                      src={`./${socialLink.platform}.png`}
                      alt={socialLink.platform}
                    />
                  </a>
                ))}
            </div>

            {userInfo.otherLinks &&
              userInfo.otherLinks.map((otherLink) => (
                <div className="other-links" key={otherLink._id}>
                  <p>
                    <a href={otherLink.url}>{otherLink.title}</a>
                  </p>
                </div>
              ))}

            <div className="logo-at-last">
              <p>ExhibitMe</p>
            </div>
          </div>
        </div>
      ) : profileData === null ? (
        <Loader />
      ) : (
        <>
        <div className="main-notfound">
            <div className="notfound">
                
                <h3>The UserName you are looking for is not exists</h3>
                <p className="want">Want this to be your username?      <Link to="/login"><p className="link-to-login">Create a Page Now</p></Link></p>
                

                <h2>ExhibitMe</h2>
            </div>

        </div>
        </>
      )}
    </>
  );
};

export default Profile;
