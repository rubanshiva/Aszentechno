import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import Header from '../../Components/Head/Header'
import "./homepage.css"
// import {useHistory} from "react-router"
import Carousel from 'react-bootstrap/Carousel';
import silder1 from "../../Assets/Images/Banner 1.jpg"
import silder2 from "../../Assets/Images/Banner 2.jpg"
import silder3 from "../../Assets/Images/Banner 3.jpg"
import silder4 from "../../Assets/Images/Banner 4.gif"
import serives1 from "../../Assets/Images/hair-masking.jpg"
import serives2 from "../../Assets/Images/Photoshop-mannequin-effects.jpg"
import serives3 from "../../Assets/Images/retouch image.jpg"
import serives4 from "../../Assets/Images/shadow.jpg"
import serives5 from "../../Assets/Images/color-correction.jpg"
import global from "../../Assets/Images/globe.png"
import { handicon,Quick,data,Assured,iso,prices,clippingpath,masking,retouching,colorcorrection,showcorrection,Ghostmasking } from '../../Assets/icon';
import Footer from '../../Components/Footer/Footer';
import carouselimg from '../../Assets/Images/caursel.jpg'
import { useNavigate } from 'react-router';

function Homepage() {

    const [price,setprice] = useState("Clipping Services")
    
    const naviagte = useNavigate()

    // const router = useHistory()
  const services = [
    {
      id: 1,
      headin: "Image Masking",
      desp: "Clipping path photo editing service is a technique used in photo editing to isolate the subject of an image from the background.Our image masking services are available for a variety of industries, including e-commerce, photography, and graphic design.",
      background: "linear-gradient(165.22deg, #CF8BF3 -25.3%, rgba(253, 185, 155, 0.5) 116.66%), rgba(237, 237, 237, 0.2)",
      image: serives1,
      link: "/services#Imagemasking"
    },
    {
      id: 2,
      headin: "Ghost Mannequin",
      desp: "Our ghost mannequin services can help you showcase your clothing products in a professional and visually appealing way. We use advanced techniques to remove the mannequin from your clothing photos and create a ghost mannequin effect, which makes the product appear as if it is being worn by an invisible model. ",
      background: "linear-gradient(165.22deg, #DAFFC4 -25.3%, #95EAFF 116.66%), rgba(237, 237, 237, 0.2)",
      image: serives2,
      link : "/services#GhostMannequin"
    }, {
      id: 3,
      headin: "Photo Retouching",
      desp: "Welcome to our professional photo retouching service! Our team of experienced photo editors is dedicated to enhancing your images and making them look their best. We offer a wide range of photo retouching services, including color correction, skin smoothing, blemish removal, background removal, object removal, and more.",
      background: "linear-gradient(165.22deg, #FFB443 -25.3%, rgba(255, 242, 129, 0.5) 116.66%), rgba(237, 237, 237, 0.2)",
      image: serives3,
      link:  "/services#PhotoRetouching"
    }, {
      id: 4,
      headin: "Shadow Creation",
      desp: "Our shadow creation services can help add depth and dimension to your photos. We use advanced techniques to create realistic shadows that can make your images look more professional and visually appealing.",
      background: "linear-gradient(168.36deg, #FFEBCC -22.35%, #FF5A55 121.11%), rgba(237, 237, 237, 0.2)",
      image: serives4,
      link : "/services#ShadowCreation"
    }, {
      id: 5,
      headin: "Color Correction ",
      desp: "Our color correction services can help you achieve the perfect balance of colors in your images.Whether you need to correct color issues caused by lighting or white balance problems, our team of color correction experts can help.",
      background: "linear-gradient(165.22deg, #B2FEFA -25.3%, #4579FF 116.66%), rgba(237, 237, 237, 0.2)",
      image: serives5,
      link : "/services#Color_Correction_Services"
    },

  ]

   

const pricing = [
   {id:1,
    image:clippingpath,
    name:"Clipping Services" ,
    basic: 0.30,
    medium: 1.50,
    complex: 3.50
   },
   {id:2,
    image:masking,
    name:"Image Masking",
    basic: 0.60,
    medium: 1.50,
    complex: 3.50 
   },
   {id:3,
    image:retouching,
    name:"Photo Retouching",
    basic: 0.60,
    medium: 2.50,
    complex: 5.00 
   },
   {id:4,
    image:colorcorrection,
    name:"Color Correction",
    basic: 0.25,
    medium: 0.65,
    complex: 3.50 
   },
   {id:5,
    image:showcorrection,
    name:"Shadow Correction",
    basic: 0.20,
    medium: 0.50,
    complex: 0.75 
   },
   {id:6,
    image:Ghostmasking,
    name:"Ghost Masking",
    basic: 0.65,
    medium: 1.00,
    complex: 1.50 
   },

]



const Option = pricing.filter(item=>item?.name===price)

console.log(Option,"options");


  return (
    <div>
      <Header />
      <div className='H-ptopdiv'>
       
        {/* <div className='carousalitems'>
          <Carousel fade>
            <Carousel.Item interval={2000}>
              <img
                className='sliderimg'
                src={silder1}
              />

            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className='sliderimg'
                src={silder2}
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className='sliderimg'
                src={silder3}
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className='sliderimg'
                src={silder4}
              />
            </Carousel.Item>
          </Carousel>
        </div> */} 

        <div className='homepage-topdiv'>
          <h1>Enhance Your Product Images with </h1>
          <h2>Expert Photoshop Services</h2>
        </div>
        <div className='carouselimg'>
        <img className='sliderimg' src={carouselimg} />
        </div>
        
        {/* <div className='h-p-secndDiv'>
          <p className='h-p-descrip'>From a simple white background to the most complex clipping paths. Get pixel perfect image editing services,  Get Flawless Edits in just 12-16 hours with Sheneditz.</p>
        </div> */}
      </div>

      <div className='h-p-thirdDiv'>
        <h3>Empower your creation with Aszen Technology</h3>

        <p>Aszen Technology provides top-quality photo editing services including Photoshop clipping path, masking, touch-up, retouching, and more. With a team of experienced designers, we guarantee 100% quality work at low cost and quick turnaround time.
          Outsource your picture editing needs to us for cutting-edge results.</p>
      </div>

      <div className='h-p-cardsDiv'>
        <div className='cardssection'>
          <div className='mb-2'>{handicon}</div>
          <span className='cardsechead'>Manually Hand-Drawn</span>
          <p className='cardsecdesp'>Our organization values manual work over automation in certain areas, 
          recognizing its potential to provide a sense of fulfillment and produce high-quality outcomes that demand skills, experience.</p>
        </div>
        <div className='cardssection2'>
          <div className='mb-2'>{Quick}</div>
          <span className='cardsechead'>Quick Turnaround Time</span>
          <p className='cardsecdesp'>We prioritize providing fast turnaround times to demonstrate our efficiency and commitment to customer satisfaction.
           We balance speed with quality to meet high standards.</p>
        </div>
        <div className='cardssection3'>
          <div className='mb-2'>{data}</div>
          <span className='cardsechead'>Data Privacy</span>
          <p className='cardsecdesp'>Our organization prioritizes data privacy of our customers by implementing measures
           to protect personal data, building trust and avoiding data breaches and regulatory fines.</p>
        </div>
        <div className='cardssection4'>
          <div className='mb-2'>{Assured}</div>
          <span className='cardsechead'>Assured Quality Control</span>
          <p className='cardsecdesp'>We prioritize customer satisfaction, compliance with regulations, and company reputation by implementing a rigorous quality control process. 
          Our unwavering commitment to quality ensures we exceed customer expectations and address potential issues proactively..</p>
        </div>
        <div className='cardssection5'>
          <div className='mb-2'>{iso}</div>
          <span className='cardsechead'> Real Time tracking </span>
          <p className='cardsecdesp'>Real-time tracking can provide valuable insights and improve decision-making by providing instant access to data.
            However, it is important to ensure that privacy concerns are addressed, and that data is secured and used ethically.</p>
        </div>
        <div className='cardssection6'>
          <div className='mb-2'>{prices}</div>
          <span className='cardsechead'>Reasonable Price</span>
          <p className='cardsecdesp'>Our belief is that a reasonable price should be fair and justifiable for both the customer and the business, 
          reflecting the product or service value, while also being competitive in the market and allowing for a reasonable profit margin.</p>
        </div>
      </div>


      <div className='servicesDiv'>
        <h3>The image editing services you need</h3>
        <p> Experience Personalized and Creative Photo Retouching by our Skilled Editors,
          Using Innovative Techniques that Produce Standout Results</p>
        <div className='serivescardContainer'>
          {services.map((item, id) => {
            return (
              <div onClick={()=>naviagte(item?.link)}
               className='servisecard' key={id} style={{ background: `${item?.background}` }}>
                <div className='servicetxts'>
                  <h5>{item?.headin}</h5>
                  <p>{item?.desp}</p>
                </div>
                <div className='serviceimg'>
                  <img src={item?.image} alt="serives" />
                </div>
              </div>
            )
          })

          }
        </div>
      </div>

{/* <<========Global customer=> */}
        <div className='globalDiv'>
       <img src={global} alt=""  className='globalimg' />

        <div className='globalbtm'>
               <h5 className='globalrighttxt'>See what sets Aszen Technology apart</h5>

               <div className='globalgird'>
                      <div className='globalservcard1'>
                        <b className='glob-count'>1,850+</b>
                        <p className='glob-text'>Happy Customers</p>
                      </div>
                      <div className='globalservcard2'>
                        <b className='glob-count'>99.7%</b>
                        <p className='glob-text'>On Time Delivery</p>
                      </div>
                      <div className='globalservcard4'>
                        <b className='glob-count'>79,000+</b>
                        <p className='glob-text'>Edited Images</p>
                      </div>
                      <div className='globalservcard3'>
                        <b className='glob-count'>120+</b>
                        <p className='glob-text'>Happy Clients</p>
                      </div>
               </div>
        </div>
        </div>
        
        {/*<<======= princing ==========>> */}

     <div className='d-flex justify-content-center'>
        <div className='pricingplanDiv'>
          <h5>Choose a plan that suits you</h5>
          <div className='pricing-div'>
           
              <div className='pricingItems'>
                    {pricing?.map((items,id)=>{
                      return(
                        <div className={price===items?.name?'pricingitemActive':'pricingitem'}
                         onClick={()=>setprice(items?.name)}
                         key={id}>
                              <div>{items?.image}</div>
                              <span>{items?.name}</span>
                        </div>
                      )
                    })
                    }
              </div>
              
              <div className='pricingdetails'>
                <div className='pricinghead'>
                      <span>{price} - Pricing Details</span>
                </div>
                <div>

                  <div className='d-flex justify-content-between align-items-center pricing-box'>
                      <p>Basic</p>
                      <span><b style={{fontSize:"22px"}}>$ {Option[0]?.basic.toFixed(2)}</b>/ per image</span>
                  </div>
                  <div className='d-flex justify-content-between align-items-center pricing-box'>
                      <p>Medium</p>
                      <span><b style={{fontSize:"22px"}}>$ {Option[0]?.medium.toFixed(2)}</b>/ per image</span>
                  </div>
                  <div className='d-flex justify-content-between align-items-center pricing-box'>
                      <p>Complex</p>
                      <span><b style={{fontSize:"22px"}}>$ {Option[0]?.complex.toFixed(2)}</b>/ per image</span>
                  </div>

                </div>

                <Link to='/contact' style={{textDecoration:"none"}}> 
                <div className='contactusbtn'>
                Contact Us
                </div>
                  </Link>

              </div>

          </div>
        </div>
        </div>

        <div className='reviewsdiv'>
          <h5>1,850+ satisfied customers</h5>

          <div className='reviewsec'>
          <marquee width="100%" direction="left" height="auto" className="d-flex ">
            <div className='d-flex justify-content-between'>
            <div className='reviewcard'> 
              <div>
              <b>Farah Mohan</b>
              <span>I absolutely loved their edits.</span>
              </div>
                <small>23/05/2020</small>
            </div>

            <div className='reviewcard'> 
              <div>
              <b>Saraswathi</b>
              <span>Good services.</span>
              </div>
                <small>23/05/2020</small>
            </div>

            <div className='reviewcard'> 
              <div>
              <b> Mohan</b>
              <span>I absolutely on time delivery.</span>
              </div>
                <small>23/05/2020</small>
            </div>

            </div>
           

        
          </marquee>
                      <br/>
          <marquee width="100%" direction="right" height="auto" className="d-flex ">
            <div className='d-flex justify-content-between'>
            <div className='reviewcard'> 
              <div>
              <b>Fharan steve</b>
              <span>On time delivery. good services </span>
              </div>
                <small>23/05/2020</small>
            </div>

            <div className='reviewcard'> 
              <div>
              <b>Juliana Steven</b>
              <span>I absolutely loved their edits.</span>
              </div>
                <small>23/05/2020</small>
            </div>

            <div className='reviewcard'> 
              <div>
              <b>thomas irfan</b>
              <span>Fast and quality image editing.
                <br/> i loved their work</span>
              </div>
                <small>23/05/2020</small>
            </div>

            </div>
           

        
          </marquee>


          </div>

        </div>
        <Footer/>
    </div>

  )
}

export default Homepage