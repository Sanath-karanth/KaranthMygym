import React, { memo, useState, useEffect, useCallback, Fragment } from 'react';
import '../css/exercise.css'
import { useLocation, useNavigate  } from "react-router-dom";
import {Container,Row,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { gifDataThighs, videoDataThighs, 
         gifDataChest, videoDataChest } from "../json/jsonData"

const ExerciseScreen = memo(() => {

    const navigate  = useNavigate();
    const {state} = useLocation();
    const { navigationcontent } = state;
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



    const ThighsComponent = () => {
        return(
         <Fragment>
            { gifcontdisplay ? 
            <div className='ex-GIFContent'>
                <Row className='gx-0'>
                    <Col xs={0} sm={0} md={3} lg={2} xl={2} xxl={2}>

                    </Col>
                    <Col xs={0} sm={0} md={8} lg={8} xl={8} xxl={8}>
                        <div className='ex-GIF'>
                            { gifDataThighs.map((gifitem,gifkey) => {
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
                            { videoDataThighs.map((videoitem,videokey) => {
                                return(
                                <div key={videokey} className='ex-VideoCard'>
                                    <div className='ex-VideoCard-Title'>
                                        <h3>{videoitem.title}</h3>
                                    </div>
                             
                                    <div className='ex-VideoCard-Video'>
                                        <iframe 
                                            title={videoitem.title} 
                                            src={videoitem.videoUrl}
                                            marginheight="0" 
                                            marginwidth="0"
                                            frameborder="0">
                                        </iframe>
                                    </div>
                                </div>
                                );
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
        </Fragment>
        );
    }

    const ChestComponent = () => {
        return(
            <Fragment>
               { gifcontdisplay ? 
               <div className='ex-GIFContent'>
                   <Row className='gx-0'>
                       <Col xs={0} sm={0} md={3} lg={2} xl={2} xxl={2}>
   
                       </Col>
                       <Col xs={0} sm={0} md={8} lg={8} xl={8} xxl={8}>
                           <div className='ex-GIF'>
                               { gifDataChest.map((gifitem,gifkey) => {
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
                            { videoDataChest.map((videoitem,videokey) => {
                                return(
                                <div key={videokey} className='ex-VideoCard'>
                                    <div className='ex-VideoCard-Title'>
                                        <h3>{videoitem.title}</h3>
                                    </div>
                             
                                    <div className='ex-VideoCard-Video'>
                                        <iframe 
                                            title={videoitem.title} 
                                            src={videoitem.videoUrl}
                                            marginheight="0" 
                                            marginwidth="0"
                                            frameborder="0">
                                        </iframe>
                                    </div>
                                </div>
                                );
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
           </Fragment>
        );
    }

    const LatsComponent = () => {
        return(
        <Fragment>
            <h1>h1 here</h1>
        </Fragment>
        );
    }

    const BicepsComponent = () => {
        <Fragment>
            
        </Fragment>
    }

    const ShoulderComponent = () => {
        <Fragment>
            
        </Fragment>
    }

    const TricepsComponent = () => {
        <Fragment>
            
        </Fragment>
    }

    const AbsComponent = () => {
        <Fragment>
            
        </Fragment>
    }

    const ForearmsComponent = () => {
        <Fragment>
            
        </Fragment>
    }

  return (
    <Fragment>
        <div className='MainContainer-exercise'>
            <div className='SubContainer-exercise'>
                <div className='HeadContainer-exercise'>
                    <Container fluid className='container-guttersforexercise'>
                        <Row className='gx-0'>
                            <Col xs={2} sm={2} md={1} lg={1} xl={1} xxl={1}>
                                <div className='ex-backIcon' onClick={backClick}>
                                    <FontAwesomeIcon 
                                        icon={faAngleLeft} 
                                        className="headerIconback" />
                                    <h4>Back</h4>
                                </div>
                            </Col>
                            <Col xs={10} sm={10} md={11} lg={11} xl={11} xxl={11}>
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
                    {/* ------------   Components code starts from here  ----------- */}

                       { navigationcontent === "Thighs" ?
                            <ThighsComponent  />
                        :null
                       }
                       { navigationcontent === "Chest" ?
                            <ChestComponent  />
                        :null
                       }
                       { navigationcontent === "Lats" ?
                            <LatsComponent  />
                        :null
                       }
                       { navigationcontent === "Biceps" ?
                            <BicepsComponent  />
                        :null
                       }
                       { navigationcontent === "Shoulder" ?
                            <ShoulderComponent  />
                        :null
                       }
                       { navigationcontent === "Triceps" ?
                            <TricepsComponent  />
                        :null
                       }
                       { navigationcontent === "ABS" ?
                            <AbsComponent  />
                        :null
                       }
                       { navigationcontent === "Forearm" ?
                            <ForearmsComponent  />
                        :null
                       }

                    {/* ------------   Ends here   ---------- */}
                        
                    </Container>
                </div>
            </div>
        </div>
    </Fragment>
  )
})

export default ExerciseScreen