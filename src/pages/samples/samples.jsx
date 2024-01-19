import React, { useEffect } from "react";
import "./samples.css"
import Header from "../../Components/Head/Header";
import Footer from "../../Components/Footer/Footer";
import { facebookicon, youtubeicon, instaIcon, linkedin } from '../../Assets/icon'
import gif from "../../Assets/Images/contact-us.gif"
import img1 from "../../Assets/Images/Watermark/2.jpg"
import img2 from "../../Assets/Images/Watermark/3.jpg"
import img3 from "../../Assets/Images/Watermark/4 (1).jpg"
import img4 from "../../Assets/Images/Watermark/4 (2).jpg"
import img5 from "../../Assets/Images/Watermark/9.jpg"
import img6 from "../../Assets/Images/Watermark/Jewellery Product Shoot_page-0004.jpg"
import img7 from "../../Assets/Images/Watermark/Jewellery Product Shoot_page-0006.jpg"
import img17 from "../../Assets/Images/Watermark/MTL Studio..-3.jpg"
import img24 from "../../Assets/Images/Watermark/MTL Studio..-4.jpg"
import img25 from "../../Assets/Images/Watermark/MTL Studio..-6.jpg"
import img26 from "../../Assets/Images/Watermark/MTL Studio..-7.jpg"
import img27 from "../../Assets/Images/Watermark/MTL Studio..-8.jpg"
import img28 from "../../Assets/Images/Watermark/MTL Studio..-9.jpg"
import img8 from "../../Assets/Images/Watermark/MTL Studio..-14.jpg"
import img9 from "../../Assets/Images/Watermark/MTL Studio..-15.jpg"
import img10 from "../../Assets/Images/Watermark/MTL Studio..-16.jpg"
import img11 from "../../Assets/Images/Watermark/MTL Studio..-24.jpg"
import img12 from "../../Assets/Images/Watermark/MTL Studio..-25.jpg"
import img13 from "../../Assets/Images/Watermark/MTL Studio..-26.jpg"
import img14 from "../../Assets/Images/Watermark/MTL Studio..-27.jpg"
import img15 from "../../Assets/Images/Watermark/MTL Studio..-28.jpg"
import img16 from "../../Assets/Images/Watermark/MTL Studio..-29.jpg"
import img18 from "../../Assets/Images/Watermark/MTL Studio..-30.jpg"
import img19 from "../../Assets/Images/Watermark/MTL Studio..-31.jpg"
import img20 from "../../Assets/Images/Watermark/MTL Studio..-32.jpg"
import img21 from "../../Assets/Images/Watermark/MTL Studio..-33.jpg"
import img22 from "../../Assets/Images/Watermark/MTL Studio..-34.jpg"
import img23 from "../../Assets/Images/Watermark/MTL Studio..-35.jpg"

function Samples() {

    useEffect(()=>{
     window.scrollTo(0,0)
    },[])
    return (
        <div className="samplemainDiv">
            <Header />
            <div className="samplediv">
                <h2>Samples</h2>
                <span>Check out our realistic sample images</span>

                <div className="sampleGirdLayout">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />                                        
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />                
                    <img src={img9} alt="" />                    
                    <img src={img17} alt="" />
                    <img src={img24} alt="" />
                    <img src={img25} alt="" />
                    <img src={img26} alt="" />
                    <img src={img27} alt="" />
                    <img src={img28} alt="" />
                    <img src={img10} alt="" />
                    <img src={img11} alt="" />
                    <img src={img12} alt="" />
                    <img src={img13} alt="" />
                    <img src={img14} alt="" />
                    <img src={img15} alt="" />
                    <img src={img16} alt="" />                    
                    <img src={img18} alt="" />
                    <img src={img19} alt="" />
                    <img src={img20} alt="" />
                    <img src={img21} alt="" />
                    <img src={img22} alt="" />
                    <img src={img23} alt="" />
                </div>

                <div className="contactusstrip">
                    <div>
                        <h6>Interested in us!</h6>
                        <div>
                            <div className='d-flex align-items-center socialiocn'>
                                <div className='mx-2'><a href="https://www.facebook.com/Aszen Technologyz">
                                    {facebookicon}
                                </a></div>
                                <div className='mx-2'><a href="https://www.youtube.com/channel/UCR0rBe3RisbD_tXq-FMeTFA">
                                    {youtubeicon}</a></div>
                                <div className='mx-2'><a href="https://www.instagram.com/Aszen Technologyz/">
                                    {instaIcon}</a></div>
                                <div className='mx-2'><a href="https://www.linkedin.com/in/aszen-technologies/">
                                    {linkedin}</a></div>
                            </div>
                        </div>
                    </div>


                    <div >
                        <img className="gifcontact" src={gif} alt="contact" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Samples