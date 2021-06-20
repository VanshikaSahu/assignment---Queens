import React from 'react';

import {Slider} from './Slider';
import {Footer} from './Footer';

export const Home = () => {
    return (
        <>
       
        <Slider/>
        <div className="container-fluid nav-bg">
            <div className = 'row'>
                <div className="col-10 mx-auto">
                    <div className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                        <h1>SKIN CARE</h1>
                        <h2 className="my-3">Book your free consultation now</h2>
                        <div className ="mt-3">
                            <a href="" className = "btn-get-started">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>

        
        </>
    )
}
