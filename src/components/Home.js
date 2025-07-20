import React from 'react';
import mainImage from '../image/buger.jpg';
function Home() {
  return (
<section className="home" id="home">
  <div className="main">
  <div className="main_content">
  <div className="men_text">
    <h1>
      Japanese Food<br />
      With A<span className="highlighted">Twist</span>
    </h1>
  </div>
  <div className="main_btn">
    <a href="#order">Book A Table</a>
    <i className="fa-solid fa-angle-right"></i>
  </div>
</div>


    <div className="main_image">
      <img src={mainImage} alt="just" />
    </div>
  </div>
</section>

  );
}

export default Home;
