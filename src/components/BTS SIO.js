import { useState,useEffect } from "react"
import { Container,Row,Col } from "react-bootstrap"
import headerImg1 from '../assets/img/Keryan.png'
import headerImg2 from '../assets/img/header-img.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const BTSSIO = () => {


     return (
        <section className="BTSSIO" id="BTSSIO">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={4} xl={7} >
                        <TrackVisibility>
                        {({ isVisible }) =>  
                        <div className={isVisible ? "animate__animated animate__fadeInUpBig" : ""}>
                        <span className="tagline">BTS SIO</span>
                        <h4>{"Qu'est ce que le BTS SIO ?" }</h4>
                        <p className="Description">Le Brevet de Technicien Supérieur aux Services Informatiques aux Organisations, s'adresse à ceux qui souhaitent se former en deux ans aux métiers d'administrateur réseau ou de développeur. Pour par la suite intégrer directement le marché du travail ou continuer des études, dans le domaine de l'informatique.</p>
                        </div> }  
                        </TrackVisibility>
                    </Col>


                    <Col xs={10} md={2} xl={4}>


                 


                  <Col xs={10} md={2} xl={4}>

                    
                      


                  </Col>


                    </Col>

                </Row>

            </Container>
        
        </section>
    )



}