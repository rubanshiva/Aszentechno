import React from 'react'
import Header from '../../Components/Head/Header'
import Footer from '../../Components/Footer/Footer'
import "./Aboutus.css"
function Aboutus() {
  return (
    <div  className='aboutmaindiv'>
        <Header/>
        <div className='aboutusDiv'>
            <h1 className='topaboutus'>About Us</h1>
            <p className='despabtus'>Aszen Technology focuses on bringing insightful and business-driven solutions to you. 
            Our company was founded 2011 by a team of experienced professionals with a passion for photoShop Services.
                It was powered by <b>ASZEN TECHNOLOGIES</b>. 
                We are innovative and on the forefront of new technologies in the areas of image processing, data processing, common, e-commerce and in global web and DTP services. We aim to serve its client a broad spectrum of authenticity, quality, cost effective outsourcing services. We focused on many streams such as image editing services, creative services, data management services, web development services, software development services and internet marketing services.Let our creative graphic designers work on your images and show our power of editing with highest standards. Each and every image is edited by our editors without the use of automated tools. We process on 24 hours to deliver best possible accomplishment to your photos. 
                We have satisfied clients across UK, USA, Norway, France, Germany, Italy, Australia, Netherlands, and the Philippines etc.</p>
                <br/>
                
             <p className='despabtus'>Our mission is simple: to provide our customers with the highest quality 
                all type of image editing that meet their needs and exceed their expectations. We believe that by focusing on the needs of our customers and continuously improving our processes, we can
                 build lasting relationships that benefit both our customers and our company.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Aboutus