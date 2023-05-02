import { useState,useEffect } from "react"
import { Container,Row,Col } from "react-bootstrap"
import headerImg1 from '../assets/img/Keryan.png'
import headerImg2 from '../assets/img/header-img.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Profil = () => {


     return (

        <section className="Profil" id="Profil">
  <Container>
                <Row className="align-item-center">
                    <Col xl={6} >
                    <TrackVisibility>
                                {({ isVisible }) =>  
                        <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>



            <span className="tagline">Mon Profil</span>
            </div>}   
  
  </TrackVisibility>
                        <h4>{"– A PROPOS DE MOI" }</h4>
                        
                        <p className="Description">

                        Je m’appelle Keryan MERCADIER, j’ai 19 ans. Je suis actuellement en BTS SIO au Lycée Nelson Mandela de Saint-Benoît en BTS SIO option SLAM.

Dès 4eme j’ai commencé à m'interesser à l’informatique , Je me suis alors dirigé en BAC Science Technologique du Développement Durable (STI2D) spécialité Système d’Information Numérique (SIN) au Lycée Amiral Bouvet. Au cours de ces années de Lycée, je me suis interessé à l’informatique via des les projets que j'ai realisés (Arduino), je pensais faire du reseau mais je me suis orienté dans le developpement, ce qui explique mon choix pour l’option SLAM.

J’ai effectué 2 stage en première et deuxième année de BTS SIO specialitée SLAM .J'ai fais un stage a la Mairie de St-Rose puis a la CIREST ou j'ai pu me mettre deans la peau d'un salarié et mettre en pratique les differentes compétences que j'ai acquises. </p>



               
                    
                        




                    </Col>

                    <Col xl={6} >


                                        <p className="Description">                       
<h4>{"– EXPÉRIENCES PROFESSIONNELLES" }</h4>
- Stage dans la Mairie de St-Rose au service informatique en 2022 <br></br> <br></br>
- Stage a la CIREST au service informatique en 2023
</p> 

<p className="Description">   
<h4>{"– PROJETS PROFESSIONNELS" }</h4>
- Développement d’un site web via l'outil NEOPSE (CMS special pour les communes) en 2022 <br></br> <br></br>
- Développement d’un site web de gestion de bac a composte pour aider le service environement <br></br> ( - PHP - HTML - CSS(Bootstrap) - JS) en 2022
</p>
                    
                    </Col>

                </Row>

            </Container>
        
        </section>
    )



}