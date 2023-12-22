import React from 'react';
import vg from "../assets/developer.webp";
import {AiFillGoogleCircle, AiFillYoutube, AiFillAmazonCircle, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className="home" id='home'>
      <main>
        <h1>Codervibe.</h1>
        <p>Make your life easier to code !</p>
      </main>
    </div>

    <div className='home2'>
      <img src={vg} alt='Graphics' />
      <div>
        <p>This is the platform where you can find your soulmates as coder to do catch-up and obviously vibes as name itself of platform.
        </p> 
      </div>
    </div>

    <div className='home3' id='about'>
      <div>
      <h1>About pllatform?</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio, voluptates exercitationem itaque minima consectetur officiis nisi assumenda consequatur esse. Sunt magni hic exercitationem distinctio excepturi corrupti quam dignissimos pariatur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos magni soluta neque eum assumenda vitae nam officia suscipit ratione quasi exercitationem omnis, accusantium pariatur. Vero placeat veritatis in a sunt!</p>
      </div>
    </div>

    <div className='home4' id='brands'>
      <div>
        <h1>Brands</h1>

        <article>
          <div style={{
            animationDelay: "0.3s",
          }}>
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>
          <div style={{
            animationDelay: "0.5s",
          }}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>
          <div style={{
            animationDelay: "0.7s",
          }}>
            <AiFillYoutube />
            <p>YouTube</p>
          </div>
          <div style={{
            animationDelay: "1s",
          }}>
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home