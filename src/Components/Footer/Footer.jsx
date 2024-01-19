import React from 'react'
import Logo from '../../Assets/Images/Shine Logo 3.jpg'
import AszenLogo from '../../Assets/Images/Aszen Logo 1.jpg'
import { Link } from 'react-router-dom'
import "./Footer.css"
import { facebookicon, youtubeicon, instaIcon, linkedin } from '../../Assets/icon'

function Footer() {


  const aszen = () => {
    window.location.href('http://aszentech.com/')
  }
  return (
    <div className='footermaindiv'>

      <div className='footerinside'>
        <div className='logofoot'>
          {/* <img src={Logo} alt="" className='footerlogo' />  */}
          {/* <span className='footerlogotxt'>Enhancing photo images</span>  */}
          {/* <sub className='sub' > Powered by<img src={AszenLogo}
           
           className='AszenLogoFooter' alt="Aszentech" /> 
          </sub> */}
        </div>

        <div className='footeroptions'>
          <div>
            <b className='ben' >Product</b>
            <Link to="/services" style={{textDecoration:"none"}}><span>Services</span></Link>
            <Link to="/samples" style={{textDecoration:"none"}}><span>Samples</span></Link>
            <Link to="/pricing" style={{textDecoration:"none"}}><span>Pricing</span></Link>


          </div>

          <div>
            <b className='ben'>Company</b>
            <Link to="/aboutus" style={{textDecoration:"none"}}> <span>About Us</span></Link>
            <Link to="/contact" style={{textDecoration:"none"}}> <span>Contact us</span> </Link>
          </div>

          <div>
            <b className='ben'>Legal</b>
            <span>Terms & Conditions</span>
            <span>Privacy Piolicy</span>
          </div>

        </div>


      </div>
      <div className='footerbtm'>
        {/* <div>
          <small>Copyrights 2023@aszentech.All rights issued</small>
        </div> */}
        <div>{""}</div>
        <div className='d-flex align-items-center'>
          <div className='mx-2'><a href="https://www.facebook.com/Aszen Technologyz" target="_blank">
            {facebookicon}
          </a></div>
          <div className='mx-2'><a href="https://www.youtube.com/channel/UCR0rBe3RisbD_tXq-FMeTFA" target="_blank">
            {youtubeicon}</a></div>
          <div className='mx-2'><a href="https://www.instagram.com/Aszen Technologyz/" target="_blank">
            {instaIcon}</a></div>
          <div className='mx-2'><a href="https://www.linkedin.com/in/aszen-technologies/" target="_blank">
            {linkedin}</a></div>
        </div>
      </div>
    </div>
  )
}

export default Footer