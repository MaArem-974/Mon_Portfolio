import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
// Stage 1 images Import 
import Stage1IMG1 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage1IMG2 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage1IMG3 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage1IMG4 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage1IMG5 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage1IMG6 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage1IMG7 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage1IMG8 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage1IMG9 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage1IMG10 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage1IMG11 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage1IMG12 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";

// Stage 2 images import

import Stage2IMG1 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage2IMG2 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage2IMG3 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage2IMG4 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage2IMG5 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage2IMG6 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage2IMG7 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage2IMG8 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";
import Stage2IMG9 from "../assets/img/Stage1/Gestionnaire de Formulaires NEOPSE BackOffice.PNG";


import projImg11 from "../assets/img/Stage2/project-img1.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';




export const Projects = () => {

  
  const Stage1 = [
    {
      title: "Site NEOPSE",
      description: "Aperçu de l'outil NEOPSE",
      imgUrl: Stage1IMG1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Stage1IMG2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Stage1IMG3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Stage1IMG4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Stage1IMG5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Stage1IMG6,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Stage1IMG7,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Stage1IMG8,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Stage1IMG9,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Stage1IMG10,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Stage1IMG11,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Stage1IMG12,
    },
  ];

  const Stage2 = [
    {
      title: "Site NEOPSE",
      description: "Aperçu de l'outil NEOPSE",
      imgUrl: Stage2IMG1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:Stage2IMG2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Stage2IMG3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Stage2IMG4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Stage2IMG5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Stage2IMG6,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:Stage2IMG7,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:Stage2IMG8,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
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
                <p>Voici des captures ecran des projets que j'ai realisés en stage</p>
                </div>
                }
            </TrackVisibility>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Stage N°1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Stage N°2</Nav.Link>
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}