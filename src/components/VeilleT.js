import { useState,useEffect,useRef } from "react"
import { Container,Row,Col } from "react-bootstrap"
import img1 from '../assets/img/veilleT/Les Frameworks.webp'
import img7 from '../assets/img/veilleT/vs.jpg'
import img2 from '../assets/img/veilleT/js.png'
import img3 from '../assets/img/veilleT/css.png'
import img4 from '../assets/img/veilleT/reactNB.jpg'
import img5 from '../assets/img/veilleT/api.png'
import img6 from '../assets/img/veilleT/stats.png'

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
                        <h1>Veille sur les <span id="RGPD"><a href="https://www.portageo.fr/blog/frameworks-developpeurs-web/" target="_blank">frameworks web</a></span></h1>
                        <div className="contenu-vt">

                        <p> <h3>Qu'est ce que un Frameworks Web ?</h3><br></br><br></br>

Un framework est une <strong>boîte à outils</strong>
que les développeurs peuvent utiliser pour créer des applications ou des sites web. Il contient des fonctions qui facilitent le développement des sites.<br></br><br></br>



<h3>Quel est l'intérêt ?</h3>


- Rapidité : pas besoins de partir de 0.<br></br><br></br>



- Flexibilité : on peut utiliser ou non certains composants ou certaines fonctions utiles.<br></br><br></br>


- Architecture : permet d'avoir un
code propre, lisible, facilement modifiable
et une bonne architecture comme <strong>MVC</strong> pour le frameworks PHP Symfony. <br></br><br></br>


- Productivité : permet d'avoir un <strong>livrable</strong>  plus rapidement et avoir des fonctionnalités directement  <br></br><br></br>


- Communauté : certains frameworks profite d'une énorme communauté qui vous aidera à corriger les bugs ou résoudre des problèmes de programmation sur les forums.<br></br><br></br>




<h3>Les Tendances</h3><br></br><br></br>



Les tendances actuelles en matière de frameworks sont les frameworks JavaScript tels que <strong>React, Angular et Vue</strong>,
qui sont utilisé pour créer des applications web moderne et interactives, mais il y'a aussi les framework CSS comme <strong>Bootstrap ou Tailwind.</strong> React et Angular sont tres populaire avec une grande communauté de plus les GAFAM les utilisent beaucoup ce qui garantit une pérennité certaine et une longue durée de vie. <br></br><br></br>


Pour les frameworks de développement backend il y'a <strong>Node.js, Django et Ruby on Rails</strong>, qui permettent de créer des applications web robustes et évolutives . Il y a aussi <strong>Symfony ou Laravel</strong> qui sont des framework PHP tres utiliser<br></br><br></br>



Les frameworks de développement mobile hybride tel que<strong>React Native</strong>, permet de créer des applications mobiles <strong>multi-plateformes</strong> (IOS-Android) en utilisant des technologies web, Instagram et discord utilisent react native.<br></br><br></br> 

Les outils de collaboration tels que <strong>Git, Github et Gitlab</strong>, qui permettent aux équipes de développeurs de travailler ensemble sur le même code source et de gérer les versions et les branches et de contribuer a faire vivre des frameworks.<br></br><br></br>


Les frameworks de développement d'API tels que <strong>Express.js, FastAPI et Flask</strong>, qui permettent de créer des <strong>API RESTful</strong> pour communiquer avec les applications web et mobiles.<br></br><br></br>


Les tendances émergentes en matière de développement web sont des frameworks basés sur le langage <strong>Rust</strong>, les architectures de microservices, les outils de conteneurisation comme <strong>Docker</strong> et les plateformes de cloud computing.<br></br><br></br>

En gardant un œil sur ces sujets, les développeurs peuvent s'assurer que leur savoir-faire est à jour et que leurs compétences correspondent aux besoins actuels du marché où maîtriser un framework comme Angular ou React est de plus en plus demander dans les entreprises.</p>
</div>
                    </Col>

                    <Col xl={6}>

                              

<Swiper
grabCursor={true}
modules={[EffectCards]}
className="SwiperVeille"

>
<SwiperSlide className="swiper-slide-veille"><img src={img1} alt="Header Img"/></SwiperSlide>
<SwiperSlide className="swiper-slide-veille"><img src={img7} alt="Header Img"/></SwiperSlide>
<SwiperSlide className="swiper-slide-veille"><img src={img2} alt="Header Img"/></SwiperSlide>
<SwiperSlide className="swiper-slide-veille"><img src={img3} alt="Header Img"/></SwiperSlide>
<SwiperSlide className="swiper-slide-veille"><img src={img4} alt="Header Img"/></SwiperSlide>
<SwiperSlide className="swiper-slide-veille"><img src={img5} alt="Header Img"/></SwiperSlide>
<SwiperSlide className="swiper-slide-veille"><img src={img6} alt="Header Img"/></SwiperSlide>
</Swiper>



</Col>

                </Row>

            </Container>
        
        </section>
    )



}