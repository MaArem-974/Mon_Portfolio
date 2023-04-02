import { useState,useEffect } from "react"
import { Container,Row,Col } from "react-bootstrap"
import headerImg1 from '../assets/img/Keryan.png'
import headerImg2 from '../assets/img/header-img.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const VeilleT = () => {


     return (
        <section className="veilleT" id="veilleT">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={4} xl={7} >
                        <TrackVisibility>
                        {({ isVisible }) =>  
                        <div className={isVisible ? "animate__animated animate__fadeInUpBig" : ""}>
                        <span className="tagline">Veille Technologique</span>
                        <h1>{'Je suis Kéryan MERCADIER et je suis '}</h1>
                        </div> }  
                        </TrackVisibility>
                    </Col>


                    <Col xs={10} md={2} xl={4}>


                  <img src={headerImg1} alt="Header Img"/>


                  <Col xs={10} md={2} xl={4}>

                    
                      <img src={headerImg2} alt="Header Img" className=""/>


                  </Col>


                    </Col>

                </Row>

            </Container>
        
        </section>
    )



}