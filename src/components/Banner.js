import { useState,useEffect } from "react"
import React from 'react';
import { Container,Row,Col } from "react-bootstrap"
import headerImg1 from '../assets/img/Keryan.png'
import headerImg2 from '../assets/img/header-img.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Banner = () => {
    const [loopNum,setLoopNum] = useState(0)
    const [isDeleting,setIsDeleting] = useState(false)
    const toRotate = ["développeur web","etudiant","en BTS SIO"];
    const [text,setText] = useState('');
    const[delta,setDelta] = useState(300 - Math.random() * 100)
    const temps = 1000;

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fulltext = toRotate[i];
        let updatedText = isDeleting ? fulltext.substring(0, text.length - 1): fulltext.substring(0,text.length+1)
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)

        }
        if(!isDeleting && updatedText === fulltext){
            setIsDeleting(true);
            setDelta(temps);


        }else if(isDeleting && updatedText === '') {

            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(190);
        }


    }

    useEffect( () => {


        let ticker = setInterval(() => {
            tick();
        },delta)
    
return () => {clearInterval(ticker)};
},[text])

function Circle(){
    return(
      <div height="500" width="500">
        <circle
          cx="50"
          cy="55"
          r="45"
          fill="none"
          stroke="#F0CE01"
          strokeWidth="14"
        />
      </div>
    );
   }

     return (
        <section className="banner" id="acceuil">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={4} xl={7} >
                        <TrackVisibility>
                        {({ isVisible }) =>  
                        <div className={isVisible ? "animate__animated animate__fadeInUpBig" : ""}>
                        <span className="tagline">Bienvenue sur mon portfolio</span>
                        <h1>{'Je suis Kéryan MERCADIER et je suis '}<span className="wrap"><div className="TextGen">{text}</div></span></h1>
                        <p>Voici mon portfolio</p>
                        </div> }  
                        </TrackVisibility>
                    </Col>


                    <Col xs={10} md={2} xl={4}>
                    <div class="circle" id="Moi">
                        <p class="text"><img src={headerImg1} alt="Header Img"/></p>
                        </div>
                        

                  


                  <Col xs={10} md={2} xl={4}>
                  <img src={headerImg2} alt="Header Img"/>
                  <div class="circle" id="Spaceman">
                        <p class="text"></p>
                        </div>
                      


                  </Col>


                    </Col>

                </Row>

            </Container>
        
        </section>
    )



}