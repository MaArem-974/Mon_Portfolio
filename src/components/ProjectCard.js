
import { Col,Row,Tab,Nav } from "react-bootstrap";
import React, { useCallback, useState } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { ArrowRightCircle } from 'react-bootstrap-icons';




export const ProjectCard = ({ title, description, imgUrl, button }) => {


  
  return (
    <Col size={12} sm={6} md={4}>


      <div className="proj-imgbx">
      <img src={imgUrl}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h4><span>{description}</span></h4>
          <h4><span> <button onClick={() => test()  }> Agrandir <ArrowRightCircle size={25} /></button></span></h4>
        </div>
      </div>
      
      </Col>

      
    
  )
  function test(){
    
    window.location.href = imgUrl;

}
}