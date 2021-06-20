import React from 'react';
import './index.css';

export const Slider = () => {
    return (
        
        
<div className = "slider">
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://static.wixstatic.com/media/079f2c_cb4e2d53d64e4c899172e0930ff50a56~mv2.jpg/v1/fill/w_1125,h_426,al_c,q_85/079f2c_cb4e2d53d64e4c899172e0930ff50a56~mv2.webp" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://static.wixstatic.com/media/079f2c_439bed6c99674f838fa6dcf17b808777~mv2.jpeg/v1/fill/w_1349,h_511,al_c,q_85,usm_0.66_1.00_0.01/079f2c_439bed6c99674f838fa6dcf17b808777~mv2.webp" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://static.wixstatic.com/media/079f2c_2d251af015ab40979030d16872f4cd4a~mv2.jpg/v1/fill/w_1125,h_426,al_c,q_85/079f2c_2d251af015ab40979030d16872f4cd4a~mv2.webp" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
    )
}
