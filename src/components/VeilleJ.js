import { useState,useEffect,useRef } from "react"
import { Container,Row,Col } from "react-bootstrap"
import img1 from '../assets/img/veilleJ/RGPD.jpg'
import img2 from '../assets/img/veilleJ/RGPD Données .jpg'
import img3 from '../assets/img/veilleJ/Sanctions.png'
import img4 from '../assets/img/veilleJ/Amende.jpeg'
import img5 from '../assets/img/veilleJ/RGPD Etape.jpg'
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
                    <Col xxl={6} >
                    <div className="veillej-bx">
                        <TrackVisibility>
                        {({ isVisible }) =>  


                        <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                        <span className="tagline">Veille Juridique</span>


                        </div> }  
                        </TrackVisibility>
                        <h1>Veille sur le <span id="RGPD"><a href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees" target="_blank">RGPD</a></span></h1>

                        <div className="contenu-vj">
                        <p> <h3>Qu'est ce que le RGPD ?</h3> <br></br> 
 Le RGPD est un ensemble de loi qui encadre le traitement des données personnelles sur le territoire de l'Union européenne. <br></br> 

Le RGPD exige des entreprise et des organisation à être plus transparent dans leur traitement vis à vis des <stong>données personnelles ou sensible.</stong> <br></br> 

<h3>Qu'est ce qu'une données personnelles ou sensible ?</h3> <br></br>

On parle de <strong> donnée personnelle</strong>, ou plutôt de donnée à caractère personnel, quand il s’agit d’une information se rapportant à un individu, qui est déjà identifié ou peut l’être, de façon directe ou indirecte. Elles concernent les personnes physiques et vivantes. Enfin, plusieurs informations regroupées pour identifier une personne en particulier deviennent de fait des données à caractère personnel. (Nom,Prenom,Adresse ...)<br></br><br></br>

<strong> Les donnees sensible</strong> sont quant a eux des données Ce sont des informations qui révèlent la prétendue origine raciale ou ethnique, les opinions politiques, les convictions religieuses <br></br><br></br>

Les exigences légales du RGPD pour les entreprises et organisations sont : <br></br> 
<strong>le droit d'accès</strong> (permet à une personne de savoir si des données qui la concernent sont traitées) <br></br> 
<strong>le droit à l'oubli</strong> (Possibilite de demander l’effacement des donnée) <br></br> 
<strong>le droit à la portabilité des données</strong> (vous offre la possibilité de récupérer une partie de vos données dans un format lisible par une machine) <br></br> 
<strong>droit de rectification</strong> (rectifier, actualiser, des informations la concernant lorsqu'ont été décelées des erreurs, des inexactitudes) <br></br> <br></br>
 
<h3>Les Sanctions</h3> <br></br>

Les sanctions possibles en cas de violation du RGPD, notamment des amendes et des sanctions pénales. <br></br> <br></br>
le montant des sanctions pécuniaires peut s'élever jusqu'à <strong> 20 millions d'euros </strong> ou dans le cas d'une entreprise jusqu'à  <strong>4 % </strong> du chiffre d'affaires annuel mondial <br></br> <br></br>

<h3>Mise en Conformité</h3> <br></br>
 Les meilleures pratiques pour la conformité au RGPD, notamment la mise en place de politiques de confidentialité et de protection des données et la désignation d'un délégué à la protection des données. (DPO) qui va vous accompagner pour la mise en conformité vis à vis du <strong>RGPD</strong> cela permettra à la CNIL qui est une autorité de régulation en france de valider ou pas votre mise en application du RGPD <br></br> <br></br>

Certaine évolution du RGPD peut entraîner une remise en conformité notamment les lois nationales et européennes sur la protection des données. En gardant une veille sur ces sujets, les entreprises et organisations peuvent s'assurer qu'elles sont conformes aux exigences du RGPD et éviter les sanctions en cas de violation des règles de protection des données personnelles. 
</p>
                       
                        </div>
                </div>
                    </Col>


                    <Col xxl={6}>

                              

                    <Swiper
        grabCursor={true} 
        modules={[EffectCards]}
        className="SwiperVeille"

        >

        <SwiperSlide className="swiper-slide-veille"><img src={img1} alt="Header Img"/></SwiperSlide>
        <SwiperSlide className="swiper-slide-veille"><img src={img2} alt="Header Img"/></SwiperSlide>
        <SwiperSlide className="swiper-slide-veille"><img src={img3} alt="Header Img"/></SwiperSlide>
        <SwiperSlide className="swiper-slide-veille"><img src={img4} alt="Header Img"/></SwiperSlide>
        <SwiperSlide className="swiper-slide-veille"><img src={img5} alt="Header Img"/></SwiperSlide>
      </Swiper>
    


                    </Col>

                </Row>

            </Container>
        
        </section>
    )



}