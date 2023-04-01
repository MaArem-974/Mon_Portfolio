import { useState,useEffect } from "react"
import { Container,Row,Col } from "react-bootstrap"
import headerImg from '../assets/img/DevM.png'
//import 'animate.css';
//import TrackVisibility from 'react-on-screen';
export const Banner = () => {
    const [loopNum,setLoopNum] = useState(0)
    const [isDeleting,setIsDeleting] = useState(false)
    const toRotate = ["Développeur Web EN HERBE","Etudiant","Bon au jeux-video"];
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


     return (
        <section className="banner" id="acceuil">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={4} xl={7} >

                        <span className="tagline">Bienvenue sur mon portfolio</span>
                        <h1>{'Je suis Kéryan MERCADIER et je suis '}<span className="wrap"><div className="TextGen">{text}</div></span></h1>
                        <p>Je suis actuellement en BTS SIO option SLAM et voici mon portfolio</p>
                    </Col>
                    <Col xs={10} md={2} xl={4}>
                  <img src={headerImg} alt="Header Img"/>

                    </Col>

                </Row>

            </Container>
        
        </section>
    )



}