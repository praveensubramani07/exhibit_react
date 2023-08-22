import {Link } from 'react-router-dom';
import './home.css';
import Nav from './Nav'

function Home(){
    

    const redirectToLogin=()=>{
      
    }


    return(
        <>
        <Nav/>
        <section className='home'>
            <div class="container">
                <div class="left-div">
                    <p className='big-text'>
                    Join Us and Share Yourself Today" Description

                    </p>
                    <p className='small-text'>
        Sign up to introduce yourself and connect with others on our platform.
                    </p>
                    <div className='button-con'>
                        <Link to="/dashboard" className='create' >Get Started For Free</Link>
                    </div>
                </div>
                <div class="right-div">
                    <div class="image-con">
                        <img src="./exhibit3.gif" alt="Image" class="centered-image"/>
                    </div>
                </div>
            </div>



            <div class="container-1">
                <div class="left-div">
                    <div class="image-con">
                        <img src="./exhibit1.png" alt="Image" class="centered-image"/>
                    </div>
                </div>
                <div class="right-div">
                    <p className='big-text'>
                    Quick Setup, Seamless Connection
                    </p>
                    <p className='small-text'>
                    Use Google Login and your name to start your profile. Complete with additional info.
        </p>
                    <div className='button-con'>
                       <Link to="/dashboard" className='create' > Claim Your Page</Link>
                    </div>

                </div>
                
            </div>




            <div class="container-2">
                <div class="left-div">
                    <p className='big-text'>
                    Simplify Sharing Across Social Networks
                    </p>
                    <p className='small-text'>
                    Effortlessly add your profile links to social media bios with a single click."
        </p>
                    <div className='button-con'>
                        <Link to="/dashboard" className='create' >Share on Bio's</Link>
                    </div>
                </div>
                <div class="right-div">
                    <div class="image-con">
                        <img src="./exhibit2.png" alt="Image" class="centered-image"/>
                    </div>
                </div>
            </div>



            <div class="container-3">
                <div class="left-div">
                    <div class="image-con">
                        <img src="./IMG_20230820_182432.jpg
" alt="Image" class="centered-image"/>
    
    <img src="./IMG_20230822_095242.jpg
" alt="Image" class="centered-image2"/>
                    </div>
                </div>
                <div class="right-div">
                    <p className='big-text'>
                    Express with Custom Background Colors
                    </p>
                    <p className='small-text'>
                    Personalize your profile with customizable background colors that match your style.
    </p>
                    <div className='button-con'>
                       <Link to="/dashboard" className='create'>Get Started for Free</Link>
                    </div>

                </div>
                
            </div>
        </section>
        </>
    );
}

export default Home;
