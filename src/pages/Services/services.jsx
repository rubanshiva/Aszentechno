import { React, useState, useEffect, useRef, createRef } from 'react'
import "./services.css"
import Header from '../../Components/Head/Header'
import shoe1 from "../../Assets/Images/Banner 2.jpg"
import Footer from '../../Components/Footer/Footer'
import { linkshare } from '../../Assets/icon'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import clippingpathimg from "../../Assets/Images/After before/Clipping path/before.jpg"
import clippingpath1img from "../../Assets/Images/After before/Clipping path/after.jpg"
import colorcorrectionbefore from "../../Assets/Images/After before/Color Correction Services/before.jpg"
import colorcorrectionafter from "../../Assets/Images/After before/Color Correction Services/after.jpg"
import shadowcreationbefore from "../../Assets/Images/After before/shadow creation/before.jpg"
import shadowcreationafter from "../../Assets/Images/After before/shadow creation/after.jpg"
import GhostMannequinbefore from "../../Assets/Images/After before/Gost man/before.jpg"
import GhostMannequinafter from "../../Assets/Images/After before/Gost man/after.jpg"
import imagemaskingbefore from "../../Assets/Images/After before/Image Masking/before.jpg"
import imagemaskingafter from "../../Assets/Images/After before/Image Masking/after.jpg"
import PhotoRetouchingbefore from "../../Assets/Images/After before/Photoretouching/before.jpg"
import PhotoRetouchingafter from "../../Assets/Images/After before/Photoretouching/after.jpg"
import { useNavigate } from 'react-router';
function Services() {

    const myDivRef = createRef();
    
    const Navigate = useNavigate()
    useEffect(() => {
        if (window.location.hash) {
            const targetId = window.location.hash.slice(1);
            const targetDiv = myDivRef.current.querySelector(`#${targetId}`);
            console.log(targetDiv, "TARGETID");

            if (targetDiv) {
                targetDiv.scrollIntoView();
                const element = document.getElementById(`${targetId}`);
                const y = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: y, behavior: "smooth" })
            }
        }
    }, [window.location.hash,document]);



 
    const navigate = ()=>{
        Navigate('/samples')
    }
    return (
        <div >
            <Header />
            <div className='full' ref={myDivRef}>
                <div className='clippingpath' id='ClippingPath' >
                    <div className='clippingpath1'>
                        <h3 >Our Clipping path Services</h3>
                        <p>Clipping path photo editing service is a technique used in photo editing to isolate the subject of an image from the background. It involves creating a path around the subject using a pen tool in software such as Adobe Photoshop, which can then be used to separate the subject from the background and manipulate the image as required.
                            At our photo editing service, we specialize in providing high-quality clipping path services to businesses and individuals. We offer a wide range of clipping path services, including simple clipping paths, compound clipping paths, and complex clipping paths. We can handle images of any size and complexity, and we can deliver the final images in a variety of formats to suit your needs.we are here to help. Our fast turnaround times, competitive pricing, and exceptional quality make us the ideal partner for all your photo editing needs.
                        </p><br />
                    </div>
                    <div className='clippingpath2'>
                        <div> <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src={clippingpathimg} alt="Image one" />}
                            itemTwo={<ReactCompareSliderImage src={clippingpath1img}
                                alt="Image two" />}
                            position={50}
                            style={{ width: "100%" }}
                        />
                        </div>

                        <div> <button className='viewsbtn' onClick={navigate}>View more Samples</button></div>

                        {/* <p>Starting at <b>$ 0.30</b> per image</p> */}
                    </div>
                </div>



                <div className='clippingpath' id="PhotoRetouching" >
                    <div className='clippingpath1'>
                        <h3>Photo retouching Services</h3>
                        <p>Welcome to our professional photo retouching service! Our team of experienced photo editors is dedicated to enhancing your images and making them look their best.
                            We offer a wide range of photo retouching services, including color correction, skin smoothing, blemish removal, background removal, object removal, and more. We work with all types of images, including portrait, landscape, product, and event photos.
                            Our photo retouching process is simple and hassle-free. You can upload your images to our secure platform, specify your retouching needs, and our team will take care of the rest. We use the latest editing software and techniques to ensure that your images look natural and professional.
                            Our photo retouching service is perfect for photographers, businesses, individuals, and anyone who wants to improve the quality of their images. Whether you need a few quick edits or extensive retouching, we've got you covered.
                        </p>
                    </div>
                    <div className='clippingpath2'>
                        <div><ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src={PhotoRetouchingbefore}
                                alt="Image one" />}
                            itemTwo={<ReactCompareSliderImage src={PhotoRetouchingafter}
                                alt="Image two" />}
                            position={50}
                            style={{ width: "100%" }}
                        /></div>
                        <div>
                            <button className='viewsbtn' onClick={navigate}>View more Samples</button>
                        </div>
                    </div>
                </div>


                <div className='clippingpath' id='Color_Correction_Services' >
                    <div className='clippingpath1'>
                        <h3 >Color Correction Services</h3>
                        <p>Our color correction services can help you achieve the perfect balance of colors in your images.Whether you need to correct color issues caused by lighting or white balance problems, our team of color correction experts can help. We can also enhance the colors of your images to make them pop and stand out.
                            Our color correction services are available for a variety of industries, including e-commerce, photography, and graphic design. We work with a variety of file formats and can deliver your retouched images in the format of your choice.
                            Don't let color issues ruin your photos - let our professional color correction services help you achieve the perfect look. Contact us today to learn more about how we can help you take your images to the next level.
                        </p><br />

                    </div>
                    <div className='clippingpath2'>
                        <div>
                            <ReactCompareSlider
                                itemOne={<ReactCompareSliderImage src={colorcorrectionbefore}
                                    alt="Image one" />}
                                itemTwo={<ReactCompareSliderImage src={colorcorrectionafter}
                                    alt="Image two" />}
                                position={50}
                                style={{ width: "100%" }}
                            />

                        </div>
                        <div>
                            <button className='viewsbtn' onClick={navigate}>View more Samples</button>
                        </div>
                    </div>
                </div>



                <div className='clippingpath' id='ShadowCreation'>
                    <div className='clippingpath1'>
                        <h3>Shadow Creation</h3>
                        <p> Our shadow creation services can help add depth and dimension to your photos. We use advanced techniques to create realistic shadows that can make your images look more professional and visually appealing.
                            Whether you need to add shadows to product photos for e-commerce or enhance the shadows in your portrait or landscape photos, our team of shadow creation experts can help. We work with a variety of file formats and can deliver your edited images in the format of your choice.
                            Our shadow creation services are available for a variety of industries, including photography, e-commerce, and graphic design. We can also work with you to create custom shadow effects to achieve the look you desire.
                            Don't let flat, lifeless photos hold you back - let our professional shadow creation services help you add depth and dimension to your images. Contact us today to learn more about how we can help you take your photos to the next level.
                        </p>

                    </div>
                    <div className='clippingpath2'>
                        <div> <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src={shadowcreationbefore}
                                alt="Image one" />}
                            itemTwo={<ReactCompareSliderImage src={shadowcreationafter}
                                alt="Image two" />}
                            position={50}
                            style={{ width: "100%" }}
                        />
                        </div>
                        <div>
                            <button className='viewsbtn' onClick={navigate}>View more Samples</button>
                        </div>
                    </div>
                </div>

                <div className='clippingpath' id='GhostMannequin' >
                    <div className='clippingpath1'>
                        <h3>Ghost Mannequin services </h3>
                        <p>Our ghost mannequin services can help you showcase your clothing products in a professional and visually appealing way. We use advanced techniques to remove the mannequin from your clothing photos and create a ghost mannequin effect, which makes the product appear as if it is being worn by an invisible model.
                            Whether you need ghost mannequin services for e-commerce, fashion photography, or clothing catalogues, our team of experts can help. We work with a variety of clothing types and styles, including shirts, dresses, jackets, and more.
                            Our ghost mannequin services can also include color correction, background removal, and other editing techniques to ensure your clothing products look their best. We can work with you to create custom effects to achieve the look you desire.
                            Don't let mannequins detract from your clothing products - let our professional ghost mannequin services help you showcase your products in the best possible light. Contact us today to learn more about how we can help you take your clothing photos to the next level.
                        </p><br />
                    </div>
                    <div className='clippingpath2'>
                        
                        <div> <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src={GhostMannequinbefore}
                                alt="Image one" />}
                            itemTwo={<ReactCompareSliderImage src={GhostMannequinafter}
                                alt="Image two" />}
                            position={50}
                            style={{ width: "100%" }}
                        />                        
                           </div>
                        <div>
                            <button className='viewsbtn' onClick={navigate}>View more Samples</button>
                        </div>
                    </div>
                </div>



                <section id='Imagemasking'>
                    <div className='clippingpath' >
                        <div className='clippingpath1'>
                            <h3>Image Masking</h3>
                            <p>Our image masking services can help you isolate and edit specific areas of your photos with precision and accuracy. We use advanced techniques to create masks that allow us to edit or remove specific parts of your image, while leaving the rest of the image untouched.
                                Whether you need to edit out a distracting background, remove unwanted objects or people, or adjust the color or brightness of specific areas of your image, our team of image masking experts can help. We work with a variety of file formats and can deliver your edited images in the format of your choice.
                                Our image masking services are available for a variety of industries, including e-commerce, photography, and graphic design. We can also work with you to create custom image masks to achieve the look you desire.
                                Don't let unwanted elements detract from your photos - let our professional image masking services help you isolate and edit specific areas of your images with precision and accuracy. Contact us today to learn more about how we can help you take your photos to the next level.
                            </p><br />


                        </div>
                        <div className='clippingpath2'>
                        <div> <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src={imagemaskingbefore}
                                alt="Image one" />}
                            itemTwo={<ReactCompareSliderImage src={imagemaskingafter}
                                alt="Image two" />}
                            position={50}
                            style={{ width: "100%" }}
                        />                        
                           </div>
                            <div> <button className='viewsbtn' onClick={navigate}>View more Samples</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />

        </div>
    )
}
export default Services 