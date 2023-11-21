// https://source.unsplash.com/random/?book
import React, { useState } from 'react';
import './Carousel.css';
function Carousel() {
    const [arr,setArr] = useState([1,2,3,4,5,6]);
    const [arrr,setArrr] = useState([41,42,43,44,45,46]);
    const [aarr,ssetArr] = useState([71,72,73,47,577,76]);
    return (
        <div className='container mt-3'>
            <div className='m-2 d-flex justify-content-between'>
                <b style={{fontSize:'1.6vw',display:'inline'}}>Special Food </b>
                <div className='w-23 d-flex'>
                    <a className="carousel-control-prev" href="#carouselExampleIndicatorss" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" id='iconRun' aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicatorss" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" id='iconRun' aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>
            </div>
            <div id="carouselExampleIndicatorss" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicatorss" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicatorss" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicatorss" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item changeproperty active ">
                        <div className='w-100 d-flex justify-content-between'>
                            {
                                arr.map((item)=>{
                                    return(
                                        <>
                                         <div >
                                                 <img className="d-block" src={`https://source.unsplash.com/random/?food `+item} alt="First slide"  />

                                        </div>
                                        </>
                                    )
                                })
                            }                           
                           
                        </div>
                    </div>

                    <div className="carousel-item changeproperty">
                    <div className='w-100 d-flex justify-content-between'>
                            {
                                arrr.map((item)=>{
                                    return(
                                        <>
                                         <div >
                                                 <img className="d-block" src={`https://source.unsplash.com/random/?food `+item} alt="First slide"  />

                                        </div>
                                        </>
                                    )
                                })
                            }                           
                           
                        </div>
                    </div>
                    <div className="carousel-item changeproperty">
                    <div className='w-100 d-flex justify-content-between'>
                            {
                                aarr.map((item)=>{
                                    return(
                                        <>
                                         <div >
                                                 <img className="d-block" src={`https://source.unsplash.com/random/?food `+item} alt="First slide"  />

                                        </div>
                                        </>
                                    )
                                })
                            }                           
                           
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Carousel;
