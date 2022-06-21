import React, { memo, useState, useEffect, useContext, Fragment } from 'react';
import '../css/dashboard.css'
import { useNavigate  } from "react-router-dom";
import {Container,Row,Col} from 'react-bootstrap'
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faQuestionCircle, faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons'

const DashboardScreen = memo(() => {

    const navigate  = useNavigate();

    const cardClick = (clickval) => {
        navigate("/exercise", 
                    { state: 
                        {
                            navigationcontent: clickval 
                        }
                    }
                );
    }
  return (
    <Fragment>
        <div className='MainContainer-dashboard'>
            <div className='SubContainer-dashboard'>
                <div className='HeadContainer-dashboard' 
                style={
                    { 
                        backgroundImage: "linear-gradient(to bottom, rgba(40, 48, 72, 1), rgba(28, 216, 210, 0.7)),url('../images/background0.jpg')", 
                    }
                }>
                    <Container fluid className='container-guttersfordashboard'>
                        <div className='db-header-cont'>
                            <Row className='gx-0'>
                                <Col xs={10} sm={10} md={8} lg={8} xl={8} xxl={8}>
                                    <div className='db-headerTitle'>
                                        <img src='../images/buildicon1.png' alt='Logo'></img>
                                        <h1>KARANTH GYM</h1>
                                    </div>
                                </Col>
                                <Col xs={2} sm={2} md={4} lg={4} xl={4} xxl={4}>
                                    <div className='db-headerAbout'>
                                        <h3>About</h3>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className='db-cardmain-cont'>
                            <Row className='gx-0'>
                                <Col xs={0} sm={0} md={4} lg={4} xl={4} xxl={4} className='db-cardCol'>
                                    <div className='db-cardLeft'>
                                        
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8} className='db-cardCol'>
                                    <div className='db-cardRight'>
                                        <Row className='gx-0'>
                                            <Col xs={12} sm={12} md={6} lg={5} xl={4} xxl={4}>
                                                <div className='db-card-cont'>
                                                    <div className='db-card' onClick={() => cardClick('Thighs')}>
                                                        <img src='../images/buildicon2.png' alt='Logo'></img>
                                                        <h2>Thighs</h2>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={5} xl={4} xxl={4}>
                                                <div className='db-card-cont'>
                                                    <div className='db-card' onClick={() => cardClick('Chest')}>
                                                        <img src='../images/buildicon2.png' alt='Logo'></img>
                                                        <h2>Chest</h2>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={5} xl={4} xxl={4}>
                                                <div className='db-card-cont'>
                                                    <div className='db-card' onClick={() => cardClick('Lats')}>
                                                        <img src='../images/buildicon2.png' alt='Logo'></img>
                                                        <h2>Lats</h2>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={5} xl={4} xxl={4}>
                                                <div className='db-card-cont'>
                                                    <div className='db-card' onClick={() => cardClick('Biseps')}>
                                                        <img src='../images/buildicon2.png' alt='Logo'></img>
                                                        <h2>Biceps</h2>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={5} xl={4} xxl={4}>
                                                <div className='db-card-cont'>
                                                    <div className='db-card' onClick={() => cardClick('Shoulder')}>
                                                        <img src='../images/buildicon2.png' alt='Logo'></img>
                                                        <h2>Shoulder</h2>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={5} xl={4} xxl={4}>
                                                <div className='db-card-cont'>
                                                    <div className='db-card' onClick={() => cardClick('Triceps')}>
                                                        <img src='../images/buildicon2.png' alt='Logo'></img>
                                                        <h2>Triceps</h2>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={5} xl={4} xxl={4}>
                                                <div className='db-card-cont'>
                                                    <div className='db-card' onClick={() => cardClick('ABS')}>
                                                        <img src='../images/buildicon2.png' alt='Logo'></img>
                                                        <h2>ABS</h2>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={5} xl={4} xxl={4}>
                                                <div className='db-card-cont'>
                                                    <div className='db-card' onClick={() => cardClick('Forearm')}>
                                                        <img src='../images/buildicon2.png' alt='Logo'></img>
                                                        <h2>ForeArms</h2>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                </div>
            </div>
        </div>
    </Fragment>
  )
})

export default DashboardScreen