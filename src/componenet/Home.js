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
                    Share Your Story with Confidence: One Link for All

                    </p>
                    <p className='small-text'>
       Amplify engagement by sharing a single link across platforms. Your unique hub, a gateway to your digital narrative.
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
                    Craftt Your Hub in Just Two Simple Steps
                    </p>
                    <p className='small-text'>
                    With just your username, swiftly build a personalized hub. Customize colors, arrange links – your online presence elevated seamlessly.
        </p>
                    <div className='button-con'>
                       <Link to="/dashboard" className='create' > Claim Your Page</Link>
                    </div>

                </div>
                
            </div>




            <div class="container-2">
                <div class="left-div">
                    <p className='big-text'>
                   Uniqueness Defined: Colors and Arrangement, Your Way
                    </p>
                    <p className='small-text'>
                    Shape your hub's aesthetic with chosen colors, arranged layout. A reflection of your style, effortlessly enticing.
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
                   Unify Links, Unleash Potential: Your Digital Business Card
                    </p>
                    <p className='small-text'>
                   Forge a commanding online identity. From one hub, access all links, maximize your digital impact.






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
