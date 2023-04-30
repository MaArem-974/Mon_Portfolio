import { useState,useEffect } from "react"
import { Container,Row,Col } from "react-bootstrap"
import headerImg1 from '../assets/img/Keryan.png'
import headerImg2 from '../assets/img/header-img.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Profil = () => {


     return (
        <section className="Profil" id="Profil">
            <TrackVisibility>
                        {({ isVisible }) =>  
                        <div className={isVisible ? "animate__animated animate__fadeInUpBig" : ""}>
            <Container>
            <span className="tagline">Mon Profil</span>
                <Row className="align-item-center">
                    <Col xl={6} >
                        <h4>{"– A PROPOS DE MOI" }</h4>
                        <p className="Description">

                        Je m’appelle Keryan MERCADIER, j’ai 19 ans. Je suis actuellement en BTS SIO au Lycée Nelson Mandela de Saint-Benoît je suis actuellement en BTS SIO option SLAM.

Dès 4eme j’ai commencé à m'interesser à l’informatique, Je me suis alors dirigé en BAC Science Technologique du Développement Durable (STI2D) spécialité Système d’Information Numérique (SIN) au Lycée Amiral Bouvet. Au cours de ces années de Lycée, je me suis interessé à l’informatique, je pensais faire du reseau mais je me suis orienté dans le developpement, ce qui explique mon choix pour l’option SLAM.

J’ai effectué 2 stage en première et deuxième année de BTS Services informatiques aux Organisations BTS SIO SLAM dans la spécialité de Solutions Logicielles et Applications Métier (SLAM).J'ai fais un stage a la Mairie de St-Rose puis a la CIREST ou j'ai pu me mettre deans la peau d'un salarié. </p>



               
                    
                        




                    </Col>

                    <Col xl={6} >


                                        <p className="Description">                       
<h4>{"– EXPÉRIENCES PROFESSIONNELLES" }</h4>
Stage de découverte dans une entreprise de maintenance informatique
Récolte de feuilles de tabac saisonnière
Auxiliaire de vacances dans une banque
Apprenti dans le Service Informatique de Mutualité Française de Haute-Saône (BTS SIO / Bachelor Concepteur Développeur d’Applications)
Participation au Datathon IA4Care (Défi n°12: Smart Trach)
</p> 

<p className="Description">   
<h4>{"– PROJETS PROFESSIONNELS" }</h4>
Développement d’un moteur de recherche de radios dentaires (Php / Python) 2020
Construction d’un affichage dynamique sous Raspberry PI (Python) 2020
Développement d’un outil de gestions de stocks (Php avec Symfony) 2021-2022
Construction d’un outil de gestion de commandes (Php avec une structure MVC) 2022
</p>
                    
                    </Col>

                </Row>

            </Container>
            </div>    
}  
            </TrackVisibility>
        
        </section>
    )



}