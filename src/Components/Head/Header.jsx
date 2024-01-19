import React from 'react'
import "./Header.css"
import Logo from '../../Assets/Images/Shine Logo 3.jpg'
import AszenLogo from '../../Assets/Images/Aszen Logo 1.jpg'
import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { menuicon } from "../../Assets/icon"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect, createRef } from "react"
import { animateScroll as scroll } from 'react-scroll';
function Header() {


  const [show, setShow] = useState(false);

  const [links, setlinks] = useState()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    <path d="M12 16.5l-6-6 1.5-1.5 4.5 4.5 4.5-4.5 1.5 1.5z" fill="currentColor" />
  </svg>


  const handleOptionClick = (id) => {
    window.location.href = "/services" + '#' + id;
  };
  
  const handleclickOption =(id) =>{
    window.location.href = "/realestate-services" + '#' + id;
  };

  

  return (
    <>
      <div className='headerDiv'>
        <div>
          <Link to="/"> <img src={AszenLogo} alt="Aszen Technology" className='headerlogo' /></Link><br />
          {/* <small style={{ marginLeft: "20px", marginTop: "-10px" }}>powered by <img src={AszenLogo} className='AszenLogo' alt="Aszentech" /></small> */}
        </div>
        <div className='d-flex align-items-center'>
        <div className='headermenu'>
          <ul>            
          {/* <li className='dropdown'>
              <div className='dropbtn'>Content&nbsp;{arrow}</div>
              <div className='dropdown-content'>
                <Link className="drpdwnlink" to="/services"
                // onClick={()=>handleOptionClick("ClippingPath")}
                >Content 1</Link>
                 <Link className='drpdwnlink' to="/services"
                  onClick={() => handleOptionClick("PhotoRetouching")}
                >Content 2</Link>
                <Link className="drpdwnlink" to="/services"
                  onClick={() => handleOptionClick("Color_Correction_Services")}
                >Content 3</Link>
                <Link className="drpdwnlink" to="/services#ShadowCreation"
                  onClick={() => handleOptionClick("ShadowCreation")}
                >Content 4</Link>
                <Link className="drpdwnlink" to="/services"
                  onClick={() => handleOptionClick("GhostMannequin")}
                >Content 5</Link>
                <Link className="drpdwnlink" to="/services"
                  onClick={() => handleOptionClick("Imagemasking")}
                >Content 6</Link>               
              </div>
            </li> */}

          <li className='dropdown'>
              <div className='dropbtn'>Photo/e-commerce&nbsp;{arrow}</div>
              <div className='dropdown-content'>
                <Link className="drpdwnlink" to="/services"
                // onClick={()=>handleOptionClick("ClippingPath")}
                >Clipping path</Link>
                 <Link className='drpdwnlink' to="/services"
                  onClick={() => handleOptionClick("PhotoRetouching")}
                >Photo Retouching</Link>
                <Link className="drpdwnlink" to="/services"
                  onClick={() => handleOptionClick("Color_Correction_Services")}
                >Color correction</Link>
                <Link className="drpdwnlink" to="/services#ShadowCreation"
                  onClick={() => handleOptionClick("ShadowCreation")}
                >shadow correction</Link>
                <Link className="drpdwnlink" to="/services"
                  onClick={() => handleOptionClick("GhostMannequin")}
                >Ghost removal</Link>
                <Link className="drpdwnlink" to="/services"
                  onClick={() => handleOptionClick("Imagemasking")}
                >Image Masking</Link>               
              </div>
            </li>


          <li className='dropdown'>
              <div className='dropbtn'>Real Estate Services&nbsp;{arrow}</div>
              <div className='dropdown-content'>
                <Link className="drpdwnlink" to="/realestate-services"
                onClick={()=>handleclickOption("HDRphotoediting")}
                >HDR Photo Editing </Link>
                <Link className="drpdwnlink" to="/realestate-services"
                  onClick={() => handleclickOption("Flash/Ambient Editing")}
                >Flash/Ambient Editing  </Link>
                <Link className="drpdwnlink" to="/realestate-services"
                  onClick={() => handleclickOption("Panorama Stitching/Editing")}
                >Panorama Stitching/Editing </Link>
                <Link className="drpdwnlink" to="/realestate-services"
                  onClick={() => handleclickOption("Aerial Editing")}
                >Aerial Editing </Link>
                <Link className="drpdwnlink" to="/realestate-services"
                  onClick={() => handleclickOption("Sky,Lawn and Pool Replacement")}
                >Sky,Lawn and Pool Replacement </Link>
                <Link className='drpdwnlink' to="/realestate-services"
                  onClick={() => handleclickOption("Pro Image Enhancements")}
                >Pro Image Enhancements</Link>
                <Link className='drpdwnlink' to="/realestate-services"
                  onClick={() => handleclickOption("Weather Removal/Day to Dusk")}
                >Weather Removal/Day to Dusk </Link>
                <Link className='drpdwnlink' to="/realestate-services"
                  onClick={() => handleclickOption("Re Video-editing ")}
                >Re Video-editing </Link>
              </div>
            </li>


            <Link to='/samples' style={{ textDecoration: "none" }}><li>Samples</li></Link>
            <Link to="/pricing" style={{ textDecoration: "none" }} ><li>Pricing</li> </Link>
            <Link to="/aboutus" style={{ textDecoration: "none" }}><li>About Us</li></Link>
          </ul>
      </div>
        <Link to="/contact" style={{ textDecoration: "none" }}>
            <div className='contactus-btn'>
              Contact us
            </div>
      </Link>
        </div>
        
      <div className='mobmenu' onClick={handleShow}>
        <GiHamburgerMenu size={30} />
      </div>
    </div >

      <Offcanvas show={show} onHide={handleClose} /* responsive="lg" */ placement='end'>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title><img src={Logo} alt="Aszen" className='headerlogo'></img></Offcanvas.Title>         
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='p-3 d-flex flex-column align-items-center mobdiv'>
            <Link className='mob-options' to="/pricing"><div >Pricing</div></Link>
            <Link className='mob-options' to="/services"><div >Services</div></Link>
            <Link className='mob-options' to="/samples"><div >Samples</div></Link>
            <Link className='mob-options' to="/aboutus"><div >About us</div></Link>
            <Link className='mob-options' to="/contact" style={{ textDecoration: "none" }}>
              <div className='contactus-btn2'>
                Contact us
              </div>
            </Link>

          </div>
        </Offcanvas.Body>
      </Offcanvas> 
    </>
  )
}

export default Header