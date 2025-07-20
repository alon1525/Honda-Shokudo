import React from 'react';
import team3 from '../image/logo.png';

function Navbar() {
  return (
    <header>
            <nav>
                <div class="logo">
                    <img src= {team3} alt={"ball"}/>
                </div>

                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Menu">Menu</a></li>
                    <li><a href="#Gallary">Gallary</a></li>
                    <li><a href="#Review">Review</a></li>
                    <li><a href="#Order">Order</a></li>
                </ul>

                <div class="icon">
                    <li><a href="#Japanese">Japanese</a></li>
                    <li><a href="#English">English</a></li>
                </div>

            </nav>
    </header>
  );
}

export default Navbar;
