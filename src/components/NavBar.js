import { useEffect, useState, Component } from "react";
import {Navbar, Container,Nav} from "react-bootstrap";
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled,seScrolled,] = useState(false);
    useEffect(() =>{
        const onScroll = () =>{
            if (window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll",onScroll);
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
return(

    <Navbar bg="light" expand="lg" className={scrolled ? "scrolled":""}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo"/> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#acceuil" className={activeLink === 'acceuil'? 'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('acceuil')}>Accueil</Nav.Link>
          <Nav.Link href="#competence" className={activeLink === 'competence'? 'active navbar-link':'navbar-link' }onClick={() => onUpdateActiveLink('competences')}>Mes Competences</Nav.Link>
          <Nav.Link href="#projets" className={activeLink === 'projet'? 'active navbar-link':'navbar-link' }onClick={() => onUpdateActiveLink('projet')}>Projets</Nav.Link>
          <Nav.Link href="#veilleJ"className={activeLink === 'veilleJ'? 'active navbar-link':'navbar-link' }onClick={() => onUpdateActiveLink('veilleJ')}>Veille Juridique</Nav.Link>
          <Nav.Link href="#veilleT"className={activeLink === 'veilleT'? 'active navbar-link':'navbar-link' }onClick={() => onUpdateActiveLink('veilleT')}>Veille Technologique</Nav.Link>
        </Nav>
        <span className="navbar-text">
            <div className="social-icon">
                <a href=""><img src={navIcon1} alt="" /></a>
                <a href=""><img src={navIcon2} alt="" /></a>
                <a href=""><img src={navIcon3} alt="" /></a>
            </div>

            <a href={require("../assets/res/MonCV.pdf")} download="MonCV.pdf" target='_blank'>
      <button className={activeLink === 'CV'? 'active navbar-link':'navbar-link'}>Telecharger Mon CV</button>
    </a>
            </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>

);

}