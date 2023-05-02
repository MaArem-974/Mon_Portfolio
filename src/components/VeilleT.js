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
export const VeilleT = () => {


     return (
        <section className="veilleT" id="veilleT">
            <Container>
                <Row className="align-item-center">
                    <Col xl={6} >
                        <TrackVisibility>
                        {({ isVisible }) =>  
                        <div className={isVisible ? "animate__animated animate__fadeInUpBig" : ""}>
                        <span className="tagline">Veille Technologique</span>
                        </div> }  
                        </TrackVisibility>
                        <h1>Veille sur les <span id="RGPD"><a href="https://www.pure-illusion.com/lexique/definition-de-framework#" target="_blank">frameworks web</a></span></h1>
                        <div className="contenu-vt">
                        <p>qu'est ce qu'un frameworks ? : LOREM IPSUM

                            quel est l'interet ? : LOREM IPSUM
                            

Les tendances actuelles en matière de frameworks JavaScript tels que React, Angular et Vue, qui sont utilisés pour créer des applications web modernes et interactives.

Les développements en matière de frameworks de développement backend tels que Node.js, Django et Ruby on Rails, qui permettent de créer des applications web robustes et évolutives.

Les frameworks de développement mobile hybride tels que React Native et Ionic, qui permettent de créer des applications mobiles multiplateformes en utilisant des technologies web.

Les frameworks de génération de sites statiques tels que Gatsby et Next.js, qui permettent de créer des sites web rapides et performants sans avoir à gérer une infrastructure backend complexe.

Les outils de développement frontend tels que Webpack, Parcel et Rollup, qui facilitent la gestion des dépendances, la compilation et la mise en production des projets frontend.

Les frameworks de tests automatisés tels que Jest, Mocha et Cypress, qui permettent de s'assurer que le code fonctionne correctement et répond aux exigences de qualité.

Les outils de gestion de paquets tels que NPM et Yarn, qui permettent de gérer les dépendances des projets, de publier des packages et de gérer les versions.

Les outils de collaboration tels que Git, Github et Gitlab, qui permettent aux équipes de développeurs de travailler ensemble sur le même code source et de gérer les versions et les branches.

Les frameworks de développement d'API tels que Express.js, FastAPI et Flask, qui permettent de créer des API RESTful pour communiquer avec les applications web et mobiles.

Les tendances émergentes en matière de développement web, telles que les frameworks basés sur le langage Rust, les architectures de microservices, les outils de conteneurisation et les plateformes de cloud computing.

En gardant une veille sur ces sujets, les développeurs peuvent s'assurer que leur savoir-faire est à jour et que leurs compétences correspondent aux besoins actuels du marché.</p>
</div>
                    </Col>

                    <Col xl={6}>

                              

<Swiper
grabCursor={true}
modules={[EffectCards]}
className="SwiperVeille"

>
<SwiperSlide className="swiper-slide-veille"><img src={headerImg1} alt="Header Img"/></SwiperSlide>
</Swiper>



</Col>

                </Row>

            </Container>
        
        </section>
    )



}