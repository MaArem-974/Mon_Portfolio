import { Container,Row,Col } from "react-bootstrap";
import CircularProgress from "./CircularProgress";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png"

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";


import { EffectCreative , Pagination, Navigation } from "swiper";
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
<section className="skill" id="competences">
<Container>
        <Row>
            <Col>
            <div className="skill-bx">
                <h2>
                    Compétences
                </h2>
                <p>Voici mes Compétences dans differents domaines que j'ai appris </p>
            
            <Swiper
        responsive={responsive}
        effect={"creative"}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        slidesPerView={"3"}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: false,
            translate: ["120%", 0, -500],
          },
        }}
        pagination={false}
        modules={[EffectCreative, Pagination]}
        className="owl-carousel owl-theme skill-slider" >
        <SwiperSlide>
              <div className="item">
<CircularProgress
        size={240}
        strokeWidth={25}
        percentage={70}
        color="#4A2FBD"
      />
<h5>PHP</h5>
</div>
</SwiperSlide>
<SwiperSlide>
              <div className="item">
<CircularProgress
        size={240}
        strokeWidth={25}
        percentage={75}
        color="#4A2FBD"
      />
<h5>VirtualBox</h5>
</div>
</SwiperSlide>

<SwiperSlide>
              <div className="item">
<CircularProgress
        size={240}
        strokeWidth={25}
        percentage={55}
        color="#4A2FBD"
      />
<h5>Symfony</h5>
</div>
</SwiperSlide>


<SwiperSlide>
    <div className="item">
    <CircularProgress
        size={240}
        strokeWidth={25}
        percentage={50}
        color="#4A2FBD"
      />
      <h5>Java</h5>
                </div> 
                </SwiperSlide>

                <SwiperSlide>
                <div className="item">
                <CircularProgress
        size={240}
        strokeWidth={25}
        percentage={60}
        color="#4A2FBD"
      />
                <h5>HTML</h5>
                </div> 
                </SwiperSlide>

                <SwiperSlide>
                <div className="item">
                <CircularProgress
        size={240}
        strokeWidth={25}
        percentage={65}
        color="#4A2FBD"
      />
                <h5>CSS</h5>
                </div> 
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                <CircularProgress
        size={240}
        strokeWidth={25}
        percentage={65}
        color="#4A2FBD"
      />
                <h5>JavaScript</h5>
                </div> 

                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                <CircularProgress
        size={240}
        strokeWidth={25}
        percentage={70}
        color="#4A2FBD"
      />
                <h5>SQL</h5>
                </div> 
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                <CircularProgress
        size={240}
        strokeWidth={25}
        percentage={60}
        color="#4A2FBD"
      />
                <h5>Docker</h5>
                </div>
                </SwiperSlide> 
                <SwiperSlide>
                <div className="item">
                <CircularProgress
        size={240}
        strokeWidth={25}
        percentage={65}
        color="#4A2FBD"
      />
                <h5>Android Studio</h5>
                </div>
                </SwiperSlide> 
                </Swiper>
                </div>

                
            
            </Col>



        </Row>

    </Container>

    <img className="background-image-left" src={colorSharp} alt="Image" />

</section>


        )














}