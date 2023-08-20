import {Link } from 'react-router-dom';
import './home.css';


function Home(){
    

    const redirectToLogin=()=>{
      
    }


    return(
        <>
        <section className='home'>
            <div class="container">
                <div class="left-div">
                    <p className='big-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 

                    </p>
                    <p className='small-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, mi at lacinia posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, mi at lacinia posuere.
                    </p>
                    <div className='button-con'>
                        <Link to="/dashboard" className='create' >Get Started For Free</Link>
                    </div>
                </div>
                <div class="right-div">
                    <div class="image-con">
                        <img src="./images/exhibit3.gif" alt="Image" class="centered-image"/>
                    </div>
                </div>
            </div>



            <div class="container-1">
                <div class="left-div">
                    <div class="image-con">
                        <img src="./images/exhibit1.png" alt="Image" class="centered-image"/>
                    </div>
                </div>
                <div class="right-div">
                    <p className='big-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 

                    </p>
                    <p className='small-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, mi at lacinia posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, mi at lacinia posuere.
                    </p>
                    <div className='button-con'>
                       <Link to="/dashboard" className='create' >Login For Free and Claim Your Page</Link>
                    </div>

                </div>
                
            </div>




            <div class="container-2">
                <div class="left-div">
                    <p className='big-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 

                    </p>
                    <p className='small-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, mi at lacinia posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, mi at lacinia posuere.
                    </p>
                    <div className='button-con'>
                        <Link to="/dashboard" className='create' >Share on Bio's</Link>
                    </div>
                </div>
                <div class="right-div">
                    <div class="image-con">
                        <img src="./images/exhibit2.png" alt="Image" class="centered-image"/>
                    </div>
                </div>
            </div>



            <div class="container-3">
                <div class="left-div">
                    <div class="image-con">
                        <img src="./images/profile.png" alt="Image" class="centered-image"/>
                    </div>
                </div>
                <div class="right-div">
                    <p className='big-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 

                    </p>
                    <p className='small-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, mi at lacinia posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, mi at lacinia posuere.
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