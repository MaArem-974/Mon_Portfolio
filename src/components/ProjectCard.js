
import { Col,Row,Tab,Nav } from "react-bootstrap";
import React, { useCallback, useState } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { ArrowRightCircle } from 'react-bootstrap-icons';

import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const ProjectCard = ({ title, description, imgUrl, animation }) => {


  
  return (
    <Col size={12} sm={6} md={4}>
    <TrackVisibility>
          {({ isVisible }) =>  
      <div className={isVisible ? " animate__animated animate__pulse" : ""}>
      <div className="proj-imgbx">
      <img src={imgUrl}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h4><span>{description}</span></h4>
          <h4><span> <button onClick={() => Agrandir()  }> Agrandir <ArrowRightCircle size={25} /></button></span></h4>
        </div>
      </div>
      </div>}
  </TrackVisibility>
      
      </Col>

      
    
  )
  function Agrandir(){
    
    window.location.href = imgUrl;

}
}