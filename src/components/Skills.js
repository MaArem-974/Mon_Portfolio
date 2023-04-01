import { Container,Row,Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import CircularProgress from "./CircularProgress";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"
export const Skills = () => {

    
    const value = 90;

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }

      };

      return (
<section className="skill" id="skills">
    <Container>
        <Row>
            <Col>
            <div className="skill-bx">
                <h2>
                    Compétences
                </h2>
                <p>Voici mes Compétences </p>
            </div>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="item">
<CircularProgress
        size={240}
        strokeWidth={25}
        percentage={50}
        color="rgba(211, 3, 252, 1)"
      />
<h5>PHP</h5>
</div>




    <div className="item">
    <CircularProgress
        size={240}
        strokeWidth={25}
        percentage={50}
        color="rgba(211, 3, 252, 1)"
      />
                </div> 


                <div className="item">
                <CircularProgress
        size={240}
        strokeWidth={25}
        percentage={50}
        color="rgba(211, 3, 252, 1)"
      />
                <h5>HTML</h5>
                </div> 


                <div className="item">
                <CircularProgress
        size={240}
        strokeWidth={25}
        percentage={50}
        color="rgba(211, 3, 252, 1)"
      />
                <h5>CSS</h5>
                </div> 

                <div className="item">
                <CircularProgress
        size={240}
        strokeWidth={25}
        percentage={50}
        color="rgba(211, 3, 252, 1)"
      />
                <h5>JavaScript</h5>
                </div> 

                <div className="item">
                <CircularProgress
        size={240}
        strokeWidth={25}
        percentage={50}
        color="rgba(211, 3, 252, 1)"
      />
                <h5>SQL</h5>
                </div> 

                <div className="item">
                <CircularProgress
        size={240}
        strokeWidth={25}
        percentage={50}
        color="rgba(211, 3, 252, 1)"
      />
                <h5>Docker</h5>
                </div> 
            </Carousel>
            
            </Col>



        </Row>

    </Container>
    <img className="background-image-left" src={colorSharp} />
</section>
        )














}