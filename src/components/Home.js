import React from 'react';
import clockImg from './images/clock.png';
import clockImgDark from './images/clock-dark.png';
import conditionImg from './images/condition.png';
import conditionImgDark from './images/condition-dark.png';
import manImg from './images/man.png';
import manImgDark from './images/man-dark.png';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <>
            <div className="container-fluid main_header" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <div className="row">
                            <div className="col-md-6 col-12 main_header_left">
                                <p>Welcome to GetWeatherInfo</p>
                                <h1>Enter the name of your city and <span className="spanenter">GetWeatherInfo</span></h1>
                                <Link to="/weather"><button>Check Now</button></Link>
                            </div>
                            <div className="col-md-6 col-12 main_header_right">
                                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className=" w-100" src={props.mode === 'dark' ? clockImgDark : clockImg} alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className=" w-100" src={props.mode === 'dark' ? conditionImgDark : conditionImg} alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className=" w-100" src={props.mode === 'dark' ? manImgDark : manImg} alt="First slide" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home