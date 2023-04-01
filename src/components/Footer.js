
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={6} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={6} sm={2} className="text-center text-sm-end">

            
          </Col>

          <Col size={6} sm={2} className="text-center text-sm-end">
          </Col>

          <Col size={6} sm={2} className="text-center text-sm-end">
            <p><strong>Suviez moi sur mes reseaux</strong></p>
            <div className="social-icon">
            <a href="https://www.facebook.com/keryan.mercadier"><img src={navIcon2} alt="" /></a>
            <a href="https://www.instagram.com/keryan_mk2/"><img src={navIcon3} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}