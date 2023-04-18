import { useState,useEffect,useRef } from "react"
import { Container,Row,Col } from "react-bootstrap"
import headerImg1 from '../assets/img/Keryan.png'
import headerImg2 from '../assets/img/header-img.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';


import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";


import { EffectCards , Pagination, Navigation } from "swiper";


export const VeilleJ = () => {


     return (
        <section className="veilleJ" id="veilleJ">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={4} xl={7} >
                    <div className="veillej-bx">
                        <TrackVisibility>
                        {({ isVisible }) =>  


                        <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                        <span className="tagline">Veille Juridique</span>


                        </div> }  
                        </TrackVisibility>
                        <TrackVisibility>
                        {({ isVisible }) =>  
                         <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                        <h1> Voici ma veille juridique qui va porter sur le <span id="RGPD"><a href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees" target="_blank">RGPD</a></span></h1>
                        
                        <div className="contenu-vj">
                        <p>JLoremp ipsum Loremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsum</p>
                        <p>JLoremp ipsum Loremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsum</p>
                        <p>JLoremp ipsum Loremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsum</p>
                        <p>JLoremp ipsum Loremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsum</p>
                        </div>
                        </div>}  
                </TrackVisibility>
                </div>
                    </Col>


                    <Col xs={10} md={2} xl={4}>

                    <TrackVisibility>
                        {({ isVisible }) =>  
                         <div className={isVisible ? "animate__animated animate__fadeInTopRight" : ""}>            

                    <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="SwiperVeilleJ"

        >

        <SwiperSlide><img src={headerImg1} alt="Header Img"/></SwiperSlide>
        <SwiperSlide><img src={headerImg1} alt="Header Img"/></SwiperSlide>
        <SwiperSlide><img src={headerImg1} alt="Header Img"/></SwiperSlide>
      </Swiper>
      </div>}  
                </TrackVisibility>
    


                    </Col>

                </Row>

            </Container>
        
        </section>
    )



}