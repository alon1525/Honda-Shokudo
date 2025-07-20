import React from 'react';
import aboutImage from '../image/Food-Plate.png'
function About() {
  return (
    <div class="about" id="About">
        <div class="about_main">

            <div class="image">
                <img src={aboutImage} alt="lol"/>
            </div>

            <div class="about_text">
                <h1><span>About</span>Us</h1>
                <h3>Why Choose us?</h3>
                <p>
                本田食堂 (Honda Shokudou) is a Japanese restaurant with a Western twist, offering a unique menu that blends refined Japanese aesthetics with hearty Western flavors. Instead of traditional sushi or ramen, you'll find dishes like venison steak salad, creamy pasta, and rich homemade soups — all prepared with the precision and care of Japanese culinary traditions. With its warm and modern atmosphere, 本田食堂 invites guests to enjoy a fresh take on fusion dining where East meets West in every bite.
                </p>
            </div>

        </div>


    </div>
  );
}

export default About;
