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
                    <Col xl={6} >
                    <div className="veillej-bx">
                        <TrackVisibility>
                        {({ isVisible }) =>  


                        <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                        <span className="tagline">Veille Juridique</span>


                        </div> }  
                        </TrackVisibility>
                        <h1>Veille sur le <span id="RGPD"><a href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees" target="_blank">RGPD</a></span></h1>

                        <div className="contenu-vj">
                        <p> Qu'est ce que le RGPD ? : LOREM IPSUM
                        
                    Voici une veille juridique sur le RGPD (Règlement Général sur la Protection des Données) :

Les exigences légales du RGPD pour les entreprises et organisations, notamment en matière de protection des données personnelles.

Les droits des individus en vertu du RGPD, y compris le droit d'accès, le droit à l'oubli, le droit à la portabilité des données et le droit de rectification.

Les obligations des entreprises et organisations en matière de consentement des utilisateurs, de notification des violations de données et de mise en place de mesures de sécurité.

Les sanctions possibles en cas de violation du RGPD, notamment des amendes et des sanctions pénales.

Les implications du RGPD pour les entreprises internationales qui collectent et traitent des données de citoyens européens.

Les mises à jour et les modifications du RGPD et les implications pour les entreprises et les organisations.

Les meilleures pratiques pour la conformité au RGPD, notamment la mise en place de politiques de confidentialité et de protection des données et la désignation d'un délégué à la protection des données.

Les tendances émergentes dans le domaine de la protection des données, y compris les développements technologiques tels que la blockchain et l'intelligence artificielle et leur impact sur la conformité au RGPD.

Les approches des autorités de régulation en matière d'application du RGPD, notamment les enquêtes et les sanctions imposées aux entreprises et organisations.

Les évolutions réglementaires et législatives connexes, notamment les lois nationales et européennes sur la protection des données.

En gardant une veille sur ces sujets, les entreprises et organisations peuvent s'assurer qu'elles sont conformes aux exigences du RGPD et éviter les sanctions en cas de violation des règles de protection des données personnelles.</p>
                       
                        </div>
                </div>
                    </Col>


                    <Col xl={6}>

                              

                    <Swiper
        grabCursor={true} 
        modules={[EffectCards]}
        className="SwiperVeille"

        >

        <SwiperSlide className="swiper-slide-veille"><img src={headerImg1} alt="Header Img"/></SwiperSlide>
        <SwiperSlide className="swiper-slide-veille"><img src={headerImg1} alt="Header Img"/></SwiperSlide>
        <SwiperSlide className="swiper-slide-veille"><img src={headerImg1} alt="Header Img"/></SwiperSlide>
      </Swiper>
    


                    </Col>

                </Row>

            </Container>
        
        </section>
    )



}