import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
// Stage 1 images Import 
import Stage1IMG2 from "../assets/img/Stage1/Site NEOPSE.PNG";
import Stage1IMG3 from "../assets/img/Stage1/Gestionnaire de Fichiers NEOPSE BackOffice.PNG";
import Stage1IMG4 from "../assets/img/Stage1/Gestionnaire de Page NEOPSE BackOffice.PNG";
import Stage1IMG1 from "../assets/img/Stage1/sainterose ancien site.PNG";
import Stage1IMG5 from "../assets/img/Stage1/Maquette NEOPSE.PNG";
import Stage1IMG6 from "../assets/img/Stage1/Maquette 8 (1).PNG";
import Stage1IMG7 from "../assets/img/Stage1/Maquette 8 (2).PNG";
import Stage1IMG8 from "../assets/img/Stage1/Maquette 8 Previsualisée (1).PNG";
import Stage1IMG9 from "../assets/img/Stage1/Nom De Dommaine.PNG";


// Stage 2 images import

import Stage2IMG1 from "../assets/img/Stage2/Schema BDD.png";
import Stage2IMG2 from "../assets/img/Stage2/BDD-Gen.png";
import Stage2IMG3 from "../assets/img/Stage2/Page Connexion.png";
import Stage2IMG4 from "../assets/img/Stage2/Page affichage.png";
import Stage2IMG5 from "../assets/img/Stage2/Page Ajout DEM.png";
import Stage2IMG6 from "../assets/img/Stage2/Page Supp DEM.png";
import Stage2IMG7 from "../assets/img/Stage2/Page Modif DEM.png";
import Stage2IMG8 from "../assets/img/Stage2/Excel.png";
import Stage2IMG9 from "../assets/img/Stage2/Python.png";
import Stage2IMG10 from "../assets/img/Stage2/Code Source.png";



import Proj1IMG1 from "../assets/img/Projet/Linux.png";
import Proj1IMG2 from "../assets/img/Projet/Linux Slide.png";
import Proj1IMG3 from "../assets/img/Projet/CMS.png";
import Proj1IMG4 from "../assets/img/Projet/CMS slide.png";
import Proj1IMG5 from "../assets/img/Projet/CMS Trello.png";
import Proj1IMG6 from "../assets/img/Projet/Livret Synthese.png";
import Proj1IMG7 from "../assets/img/Projet/Livret Trello.png";
import Proj1IMG8 from "../assets/img/Projet/GSB.png";
import Proj1IMG9 from "../assets/img/Projet/GSB BDD.png";
import Proj1IMG10 from "../assets/img/Projet/Livret BDD.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';




export const Projects = () => {

  
  const Stage1 = [
    {
      title: "Ancien site de st rose",
      description: "Voici l'ancien site de st-rose",
      imgUrl: Stage1IMG1,
    },
    {
      title: "Site NEOPSE",
      description: "Apercu du CMS Neopse",
      imgUrl: Stage1IMG2,
    },
    {
      title: "Gestionnaire de fichierss",
      description: "Apercu des fichiers",
      imgUrl: Stage1IMG3,
    },
    {
      title: "Gestionnaire de page",
      description: "Voicis le gestionnaire de page",
      imgUrl: Stage1IMG4,
    },
    {
      title: "Gestionnaire de template",
      description: "Permet de choisir un template",
      imgUrl: Stage1IMG5,
    },
    {
      title: "Visuel du template",
      description: "",
      imgUrl: Stage1IMG6,
    },
    {
      title: "Visuel du template",
      description: "",
      imgUrl: Stage1IMG7,
    },
    {
      title: "Pre-Visualisation du template",
      description: "",
      imgUrl: Stage1IMG8,
    },
    {
      title: "Nom de Domaine du site ",
      description: "Permet de voir/modifier le nom de domaine du site ",
      imgUrl: Stage1IMG9,
    }
  ];


  const Projet = [
    {
      title: " CMS",
      description: "Gestion de projet grace a trello",
      imgUrl: Proj1IMG5,
    },
    {
      title: "Livret Numerique",
      description: "Trello",
      imgUrl: Proj1IMG7,
    },
    {
      title: "Livret Numerique",
      description: "Schema BDD",
      imgUrl: Proj1IMG10,
    },

    {
      title: "GSB",
      description: "Page de connexion PHP",
      imgUrl: Proj1IMG8,
    },
    {
      title: "GSB",
      description: "BDD",
      imgUrl:Proj1IMG9,
    }
  ];

  const Stage2 = [
    {
      title: "BDD dans phpmyadmin",
      description: "",
      imgUrl: Stage2IMG1,
    },
    {
      title: "Modelisation UML",
      description: "Modelisation UML avec GenMyModel",
      imgUrl:Stage2IMG2,
    },
    {
      title: "Code Source du site ",
      description: "Code Source du site PHP",
      imgUrl:Stage2IMG10,
    },
    {
      title: "Page de connexion",
      description: "Page de connexion utilisateur",
      imgUrl: Stage2IMG3,
    },
    {
      title: "Page Affichage",
      description: "Page d'affichage des informations de la BDD",
      imgUrl: Stage2IMG4,
    },
    {
      title: "Page d'ajout",
      description: "Page pour ajouter un demandeur",
      imgUrl: Stage2IMG5,
    },
    {
      title: "Page de suppression",
      description: "Page pour supprimer un demandeur",
      imgUrl: Stage2IMG6,
    },
    {
      title: "Page Modification",
      description: "Page pour modifier un demandeur",
      imgUrl:Stage2IMG7,
    },
    {
      title: "Fichier Excel",
      description: "Le fichier ecxel contenant des informations pour la bdd",
      imgUrl:Stage2IMG8,
    },
    {
      title: "Script Python",
      description: "Script Python pour extraire les informations et les mettre en .csv",
      imgUrl: Stage2IMG9,
    },
  ];
  return (
    <section className="project" id="projets">
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
          {({ isVisible }) =>  
              <div className={isVisible ? "animate__animated animate__zoomInUp": ""}>
                <h2>Mes Projets</h2>
                <p>Voici des captures ecran des projets que j'ai fais en classe ou en stage <br></br><br></br>
                  - Refonte de site web grâce a NEOPSE <br></br><br></br>
                  - Differentes images de projets fais en classe <br></br><br></br>
                  - Creation d'un site en php pour la gestion de bac a composte a la CIREST (PHP) pas de framework MVC utilisée ici comme par exemple Symfony mais j'ai utilisée Boostrap<br></br><br></br>
                </p>

                </div>
                }
            </TrackVisibility>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Stage N°1 SIO</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projets fais en classe SIO</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Stage N°2 SIO</Nav.Link>
                    </Nav.Item>
                  </Nav>
          
          <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {

                          
                          
                          Stage1.map((Stage1, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...Stage1}
                                
                                />
                            )
                          })

                          
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          Projet.map((Projet, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...Projet}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          Stage2.map((Stage2, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...Stage2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>


                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2}></img>
    </section>
  )
}