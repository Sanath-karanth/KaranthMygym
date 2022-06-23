import React, { memo, useState, useEffect, useCallback, Fragment } from 'react';
import '../css/about.css'
import { useNavigate  } from "react-router-dom";
import {Container,Row,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faImage,  
         faPenToSquare, faSun, 
         faAngleLeft, faEnvelope,
         faPhone, faGlobe,
         faLocationDot} from '@fortawesome/free-solid-svg-icons'

const AboutScreen = memo(() => {

    const navigate  = useNavigate();
    const backClick = () => {
        console.log("back clicked");
        navigate(-1);
    }

  return (
    <Fragment>
        <div className='MainContainer-about'>
            <div className='SubContainer-about'>
                <div className='HeadContainer-about' 
                style={
                    { 
                        backgroundImage: "linear-gradient(to bottom, rgba(0, 65, 106, 1), rgba(41, 46, 73, 0.6)),url('../images/background5.jpg')", 
                    }
                }>
                    <div className='about-header'>
                        <div className='ex-backIcon' onClick={backClick}>
                            <FontAwesomeIcon 
                                icon={faAngleLeft} 
                                className="headerIconback" />
                            <h4>Back</h4>
                        </div>
                        
                    </div>
                
                {/* ---------    main div   ----------- */}
                <div className='MainAbout-cont'>
                    <div className='cardcontent'>
                        <div className='card-cover-image'>
                        <img
                            src='./images/profile/Sanathcover1.jpg'
                            alt='Cardimages here'
                            >
                        </img>
                        <div className='card-profile-image'>
                            <img
                                src='./images/profile/Sanath1.jpg'
                                alt='Cardimages here'
                                >
                            </img>
                        </div>
                        </div>

                    
                        <div className='cardtext-cont'>
                            <div className='cardtitle-cont'>
                            <h2>
                                Sanath S Karanth
                            </h2>
                            </div>
                            <div className='carddesp-cont'>
                            <FontAwesomeIcon 
                                icon={faEnvelope} 
                                size="sm"
                                className='iconstyle'/>
                            <h6>sanathsk97@gmail.com</h6>
                            </div>
                            <div className='carddesp-cont'>
                            <FontAwesomeIcon 
                                icon={faPhone} 
                                size="sm"
                                className='iconstyle'  />
                            <h6>+91 9449685219</h6>
                            </div>
                            <div className='carddesp-cont'>
                            <FontAwesomeIcon 
                                icon={faGlobe} 
                                size="sm"
                                className='iconstyle'  />
                            <h6>karantharts.netlify.com</h6>
                            </div>
                            <div className='carddesp-cont'>
                            <FontAwesomeIcon 
                                icon={faLocationDot} 
                                size="sm"
                                className='iconstyle'  />
                            <h6>Bangalore</h6>
                            </div>

                            
                            <div className="Aboutsocial-icons-container">
                                <div className='Aboutsocial-icon-cont'>
                                    <a href="http://www.gmail.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-envelope Aboutsocial-socialicon" style={{color:'white'}}></i>
                                    </a>
                                </div>
                                <div className='Aboutsocial-icon-cont'>
                                    <a href="https://www.facebook.com/sanaths.karanth/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-facebook Aboutsocial-socialicon" style={{color:'white'}}></i>
                                    </a>
                                </div>
                                <div className='Aboutsocial-icon-cont'>
                                    <a href="https://www.linkedin.com/in/sanath-s-karanth-758bbb176" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-linkedin-square Aboutsocial-socialicon" style={{color:'white'}}></i>
                                    </a>
                                </div>
                            </div>
                         </div>
                        </div>
                    </div>
                    {/* ---------    main div close  ----------- */}

                </div>
            </div>
        </div>
    </Fragment>
  )
})

export default AboutScreen