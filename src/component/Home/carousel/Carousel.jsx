// https://source.unsplash.com/random/?book
import React from 'react';
import './Carousel.css';
function Carousel() {
    return (
        <div className='container mt-3'>
            <div className='m-2 d-flex justify-content-between'>
                <b style={{fontSize:'1.6vw',display:'inline'}}>Best offers for you </b>
                <div className='w-23 d-flex'>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" id='iconRun' aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" id='iconRun' aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <div className='w-100 d-flex justify-content-between'>
                            <div >
                                <img className="d-block" src="https://source.unsplash.com/random/?food 1" alt="First slide"  />

                            </div>
                            <div >
                                <img className="d-block" src="https://source.unsplash.com/random/?food 2" alt="First slide"  />

                            </div>
                            <div >
                                <img className="d-block" src="https://source.unsplash.com/random/?food 3" alt="First slide"  />

                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className='w-100 d-flex justify-content-between'>
                            <div >
                                <img className="d-block" src="https://source.unsplash.com/random/?food 4" alt="First slide"  />

                            </div>
                            <div >
                                <img className="d-block" src="https://source.unsplash.com/random/?food 5" alt="First slide"  />

                            </div>
                            <div >
                                <img className="d-block" src="https://source.unsplash.com/random/?food 6" alt="First slide"  />

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='w-100 d-flex justify-content-between'>
                            <div >
                                <img className="d-block" src="https://source.unsplash.com/random/?food 7" alt="First slide"  />

                            </div>
                            <div >
                                <img className="d-block" src="https://source.unsplash.com/random/?food 9" alt="First slide"  />

                            </div>
                            <div >
                                <img className="d-block" src="https://source.unsplash.com/random/?food 10" alt="First slide"  />

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Carousel;
