import React from 'react';
import Header from './header';
import './home.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import { Carousel } from 'react-bootstrap';
import FarmingVideo from './images/farming-video.mp4';
import Funding1 from './images/funding1.png';
import Funding2 from './images/funding2.png';
import Learning1 from './images/learning1.png';
import Learning2 from './images/learning2.png';
import Equipment1 from './images/equipment1.jpg';
import Equipment2 from './images/equipment2.jpeg';
import PriceModel from './images/priceModel.png';
import Footer from './footer';
//import { NavLink, Outlet } from 'react-router-dom';

function Home() {

    return (
        <div >
            <Header/>
            
            <div className="home_main bb row fade-left pt-5">
                {/* <ScrollAnimation duration={2}
                    animateIn="animate__fadeInLeft"> */}
                    <div className="col-6 text-center">
                        <video className='farming-video' src={FarmingVideo} autoPlay loop muted/>
                    </div>
                    <div className='col-1'></div>
                    <div className="col-5 card-align text-center align-middle mx-auto">
                        <div className='card-width'>
                        <div className='card text-center'>
                            <div className='card-body'>
                                <h4 className='card-title text-white'>Our Mission</h4>
                                <p className='card-text text-white'>
                                “FarmForward: Cultivating the Future of Agriculture. We’re dedicated to bridging the generational gap, ensuring knowledge and tradition are passed down from seasoned farmers to the motivated, aspiring young professionals. Together, we’re seeding change, growing opportunities, and nourishing the future of farming”
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
            <div class="relative bb -mt-12 lg:-mt-24"><svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero"><path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path><path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path><path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path></g><g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero"><path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path></g></g></svg></div>

            <div className='m-5'>
                <div className='sections row fade-right'>
                    <div className='col-1'></div>
                    <div className="col-5 card-align">
                        <div className='card customCard text-center'>
                            <div className='card-body'>
                                <h4 className='card-title font-weight-bold'>Funding</h4>
                                <p className='card-text'>
                                Farmers in Saskatchewan can access grants for various purposes, including equipment and infrastructure upgrades, research and development initiatives, environmental stewardship projects, and farmer training programs.  Through these grants, Saskatchewan continues to encourage and empower its farming community to thrive and meet the evolving challenges of the agricultural industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"/>
                    <div className="col-4 carousel-container text-center card-align">
                        <Carousel className="carousel" interval={3000}>
                            <Carousel.Item>
                                <img src={Funding1} className="carousel-images" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Funding2} className="carousel-images" alt="..." />
                            </Carousel.Item>   
                        </Carousel>
                    </div>
                </div>
                <div className='sections row fade-right'>
                        <div className="col-1"/>
                        <div className="col-4 carousel-container text-center card-align">
                            <Carousel className="carousel" interval={3000}>
                                <Carousel.Item>
                                    <img src={Learning1} className="carousel-images" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={Learning2} className="carousel-images" alt="..." />
                                </Carousel.Item>   
                            </Carousel>
                        </div>
                        <div className="col-2"/>
                    <div className="col-5 card-align ">
                        <div className='card customCard text-center'>
                            <div className='card-body'>
                                <h4 className='card-title font-weight-bold'>Learning</h4>
                                <p className='card-text'>
                                Our innovative web app is a game-changer for both young and seasoned farmers, providing a platform to learn and master cutting-edge farming techniques. With user-friendly interfaces and comprehensive resources, we empower farmers of all ages to enhance their skills, boost productivity, and stay ahead in the ever-evolving agricultural landscape. Experience a digital revolution in farming education and unleash your farming potential with our intuitive web app.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sections row fade-right'>
                    <div className='col-1'></div>
                    <div className="col-5 card-align">
                        <div className='card customCard text-center'>
                            <div className='card-body'>
                                <h4 className='card-title font-weight-bold'>Equipments</h4>
                                <p className='card-text'>
                                We stock a comprehensive, reliable array of tools and equipment that you can trust in an industry that requires safe, unique processes with specialized equipment, no matter what Mother Nature throws at you. Whether your project involves forest harvesting, wood extraction, reforestation, etc., we provide you with the right piece of equipment.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"/>
                    <div className="col-4 carousel-container text-center card-align">
                        <Carousel className="carousel" interval={3000}>
                            <Carousel.Item>
                                <img src={Equipment1} className="carousel-images" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Equipment2} className="carousel-images" alt="..." />
                            </Carousel.Item>  
                        </Carousel>
                    </div>
                </div>
                <div className='section card card-no-border customCard'>
                    <div className='card-body'>
                        <h2 className='card-title font-weight-bold'>Our Price Model</h2>
                        <div className='priceModel text-center'>
                            <img src={PriceModel}></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </div>

    );
}

export default Home;