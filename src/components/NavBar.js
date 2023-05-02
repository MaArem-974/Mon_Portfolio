import { useEffect, useState, Component } from "react";
import {Navbar, Container,Nav} from "react-bootstrap";
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('acceuil');
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
      <Navbar.Brand href="#acceuil">
        <img src={logo} alt="logo"/> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#acceuil" className={activeLink === 'acceuil'? 'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('acceuil')}>Accueil</Nav.Link>
          <Nav.Link href="#Profil" className={activeLink === 'Profil'? 'active navbar-link':'navbar-link' }onClick={() => onUpdateActiveLink('Profil')}>Profil</Nav.Link>
          <Nav.Link href="#competences" className={activeLink === 'competences'? 'active navbar-link':'navbar-link' }onClick={() => onUpdateActiveLink('competences')}>Competences</Nav.Link>
          <Nav.Link href="#projets" className={activeLink === 'projets'? 'active navbar-link':'navbar-link' }onClick={() => onUpdateActiveLink('projets')}>Projets</Nav.Link>
          <Nav.Link href="#veilleJ"className={activeLink === 'veilleJ'? 'active navbar-link':'navbar-link' }onClick={() => onUpdateActiveLink('veilleJ')}>Veille Juridique</Nav.Link>
          <Nav.Link href="#veilleT"className={activeLink === 'veilleT'? 'active navbar-link':'navbar-link' }onClick={() => onUpdateActiveLink('veilleT')}>Veille Technologique</Nav.Link>
        </Nav>
        <span className="navbar-text">

        <div className="social-icon">
                <a href="https://www.facebook.com/keryan.mercadier"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/keryan_mk2/"><img src={navIcon3} alt="" /></a>
            </div>
            <a className="boutonDl" href={require("../assets/res/MonCV.pdf")} download="MonCV.pdf" target='_blank'>
      <button className={activeLink === 'CV'? 'active navbar-link':'navbar-link'}>Telecharger Mon CV</button>
    </a>
            </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>

);

}