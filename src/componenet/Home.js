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
                    Lorem ipsum dolor sit amet, conr adipiscing 

                    </p>
                    <p className='small-text'>
                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Sed varius, mi at lacinia posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, mi at lacinia posuere.
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
                    Lorem ipsum dolor sit amet, consec adipiscing 

                    </p>
                    <p className='small-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, mi at lacinia posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, mi at lacinia posuere.
                    </p>
                    <div className='button-con'>
                       <Link to="/dashboard" className='create' > Claim Your Page</Link>
                    </div>

                </div>
                
            </div>




            <div class="container-2">
                <div class="left-div">
                    <p className='big-text'>
                    Lorem ipsum dolor sit amet, conr adipiscing 

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
                    Lorem ipsum dolor sit amet, consr adipiscing 

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
