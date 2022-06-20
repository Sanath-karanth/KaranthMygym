import React, { memo, useState, useEffect, useCallback, Fragment } from 'react';
import '../css/exercise.css'
import { Navigate, useNavigate  } from "react-router-dom";
import {Container,Row,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faQuestionCircle, faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons'

const ExerciseScreen = memo(() => {

    const navigate  = useNavigate();
    const [gifcontdisplay, SetGifcontdisplay] = useState(true);
    const [videocontdisplay, SetVideocontdisplay] = useState(false);

    const backClick = () => {
        navigate(-1);
    }

    const gifClick = () => {
        SetGifcontdisplay(true);
        SetVideocontdisplay(false);
    }

    const videoClick = () => {
        SetGifcontdisplay(false);
        SetVideocontdisplay(true);
    }

    const gifData = [
        {
            title: 'Exercise 1',
            gif: '../images/thighs/thighs1.gif',
        },
        {
            title: 'Exercise 2',
            gif: '../images/thighs/thighs2.gif',
        },
        {
            title: 'Exercise 3',
            gif: '../images/thighs/thighs3.gif',
        },
        {
            title: 'Exercise 4',
            gif: '../images/thighs/thighs4.gif',
        },
        {
            title: 'Exercise 5',
            gif: '../images/thighs/thighs5.gif',
        },
        {
            title: 'Exercise 6',
            gif: '../images/thighs/thighs6.gif',
        },
        {
            title: 'Exercise 7',
            gif: '../images/thighs/thighs7.gif',
        },
        {
            title: 'Exercise 8',
            gif: '../images/thighs/thighs8.gif',
        },
        {
            title: 'Exercise 9',
            gif: '../images/thighs/thighs9.gif',
        },
        {
            title: 'Exercise 10',
            gif: '../images/thighs/thighs10.gif',
        },
    ]

    const tabColorActive = useCallback(() => {
      
        let getGifColor = document.querySelector(".ex-giftab");
        let getVideoColor = document.querySelector(".ex-videotab");
        if(gifcontdisplay === true)
        {
            getGifColor.style.background = "linear-gradient(to right, #c21500 0%, #ffc500 100%)";
            getGifColor.style.color = "#FFFFFF";
        }
        else
        {
            getGifColor.style.background = "transparent";
            getGifColor.style.color = "#000000";
        }

        if(videocontdisplay === true)
        {
            getVideoColor.style.background = "linear-gradient(to right, #5C258D 0%, #4389A2 100%)";
            getVideoColor.style.color = "#FFFFFF";
        }
        else
        {
            getVideoColor.style.background = "transparent";
            getVideoColor.style.color = "#000000";
        }
      }, [gifcontdisplay,videocontdisplay])


    useEffect(() => {
        tabColorActive();
    }, [tabColorActive])

  return (
    <Fragment>
        <div className='MainContainer-exercise'>
            <div className='SubContainer-exercise'>
                <div className='HeadContainer-exercise'>
                    <Container fluid className='container-guttersforexercise'>
                        <Row className='gx-0'>
                            <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
                                <div className='ex-backIcon' onClick={backClick}>
                                    <FontAwesomeIcon 
                                        icon={faAngleLeft} 
                                        className="headerIconback" />
                                    <h4>Back</h4>
                                </div>
                            </Col>
                            <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11}>
                                <div className='ex-tabheader'>
                                    <div className='ex-giftab' onClick={gifClick}>
                                        <h3>
                                            GIF
                                        </h3>
                                    </div>
                                    <div className='ex-videotab' onClick={videoClick}>
                                        <h3>
                                            Videos
                                        </h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <hr></hr>
                        { gifcontdisplay ? 
                            <div className='ex-GIFContent'>
                            <Row className='gx-0'>
                                <Col xs={0} sm={0} md={3} lg={2} xl={2} xxl={2}>

                                </Col>
                                <Col xs={0} sm={0} md={8} lg={8} xl={8} xxl={8}>
                                    <div className='ex-GIF'>
                                        { gifData.map((gifitem,gifkey) => {
                                            return(
                                            <div key={gifkey} className='ex-GifCard'>
                                                <div className='ex-GifCard-Title'>
                                                    <h3>{gifitem.title}</h3>
                                                </div>
                                                <hr />
                                                <div className='ex-GifCard-Gif'>
                                                    <img src={gifitem.gif} alt={gifitem.title} ></img>
                                                </div>
                                            </div>
                                            )
                                        })}
                                    </div>
                                </Col>
                                <Col xs={0} sm={0} md={2} lg={2} xl={2} xxl={2}>

                                </Col>
                            </Row>
                        </div>
                        : 
                        null    
                        }

                        { videocontdisplay ? 
                        <div className='ex-VideoContent'>
                            <Row className='gx-0'>
                                <Col xs={0} sm={0} md={2} lg={2} xl={2} xxl={2}>

                                </Col>
                                <Col xs={0} sm={0} md={8} lg={8} xl={8} xxl={8}>
                                    <div className='ex-Video'>
                                        <h1>Video</h1>
                                    </div>
                                </Col>
                                <Col xs={0} sm={0} md={2} lg={2} xl={2} xxl={2}>

                                </Col>
                            </Row>
                        </div>
                        : 
                        null    
                        }
                        
                    </Container>
                </div>
            </div>
        </div>
    </Fragment>
  )
})

export default ExerciseScreen