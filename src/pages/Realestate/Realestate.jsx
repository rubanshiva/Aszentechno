import React from "react";
import { Link } from 'react-router-dom'
import "./Realestate.css";
import Header from "../../Components/Head/Header";
import Footer from "../../Components/Footer/Footer";
import ReactPlayer from "react-player";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import HDR1img from "../../Assets/Images/After before/HDR/HDR A.jpg";
import HDR2img from "../../Assets/Images/After before/HDR/HDR B.jpg";
import flash1img from "../../Assets/Images/After before/Flash/before.jpg";
import flash2img from "../../Assets/Images/After before/Flash/after.jpg";
import Aerial1img from "../../Assets/Images/After before/Aerial/before.jpg";
import Aerial2img from "../../Assets/Images/After before/Aerial/after.jpg";
import weather1img from "../../Assets/Images/After before/weather/Before.jpg";
import weather2img from "../../Assets/Images/After before/weather/After.jpg";
import panorama1img from "../../Assets/Images/After before/Pano/before.jpg";
import panorama2img from "../../Assets/Images/After before/Pano/after.jpg";
import skylawn1img from "../../Assets/Images/After before/Pool,sky, green grass/before.jpg";
import skylawn2img from "../../Assets/Images/After before/Pool,sky, green grass/after.jpg";
import proimg1 from "../../Assets/Images/After before/Pro/before.jpg";
import proimg2 from "../../Assets/Images/After before/Pro/after.jpg";
import revideo1img from "../../Assets/Images/After before/shadow creation/before.jpg";
import revideo2img from "../../Assets/Images/After before/shadow creation/after.jpg";
import videos from "../../Assets/videos/video.mp4"

function Realestate() {
  return (
    <div>
      <Header />
      <section id="HDRphotoediting">
        <div className="clippingpath">
          <div className="clippingpath1">
            <h3>HDR Photo Editing</h3>
            <p>
              HDR photo editing involves merging multiple exposures of the same
              scene to capture a wider dynamic range. By combining the correctly
              exposed parts of each exposure, it brings out details in both
              shadows and highlights, resulting in a more balanced and visually
              appealing image. The process includes tone mapping to adjust
              contrast, saturation, and brightness, ultimately enhancing the
              overall look and feel of the photo. HDR editing is commonly used
              in landscape, architectural, and high-contrast photography,
              creating stunning images that portray the scene with enhanced
              realism and depth.
            </p>
            <br />
          </div>
          <div className="clippingpath2">
            <div>
              {" "}
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage src={HDR1img} alt="Image one" />
                }
                itemTwo={
                  <ReactCompareSliderImage src={HDR2img} alt="Image two" />
                }
                position={50}
                style={{ width: "100%" }}
              />
            </div>
            <div>
              {" "}
              <button className="viewsbtn">View more Samples</button>
            </div>
          </div>
        </div>
      </section>

      <section id="Flash/Ambient Editing">
        <div className="clippingpath">
          <div className="clippingpath1">
            <h3>Flash/Ambient Editing</h3>
            <p>
              Flash ambient editing services involve combining flash and ambient
              lighting to create well-balanced and professional-looking
              photographs. By blending the natural lighting with supplemental
              flash, these services enhance the overall exposure and detail in
              the image. This technique is commonly used in real estate,
              interior, and architectural photography to accurately capture the
              space's atmosphere and ensure accurate color representation. Flash
              ambient editing can help eliminate harsh shadows and highlight
              important features, resulting in visually appealing and well-lit
              images. Professional photographers often rely on these services to
              achieve stunning and high-quality results.
            </p>
            <br />
          </div>
          <div className="clippingpath2">
            <div>
              {" "}
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage src={flash1img} alt="Image one" />
                }
                itemTwo={
                  <ReactCompareSliderImage src={flash2img} alt="Image two" />
                }
                position={50}
                style={{ width: "100%" }}
              />
            </div>
            <div>
              {" "}
              <button className="viewsbtn">View more Samples</button>
            </div>
          </div>
        </div>
      </section>

      <section id="Panorama Stitching/Editing">
        <div className="clippingpath">
          <div className="clippingpath1">
            <h3>Panorama Stitching/Editing</h3>
            <p>
              Panorama stitching service is a process that combines multiple
              overlapping images to create a wide-angle or 360-degree panoramic
              view. Using specialized software, these services align and merge
              the images seamlessly, resulting in a single, cohesive image.
              Panorama stitching is commonly employed in landscape photography,
              real estate, and architectural industries to showcase expansive
              vistas or spacious interiors. It allows for a broader perspective
              and captures more detail than a single photograph can provide.
              Professional photographers and businesses often rely on panorama
              stitching services to create captivating and immersive visual
              experiences for their audience.
            </p>
            <br />
          </div>
          <div className="clippingpath2">
            <div>
              {" "}
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage src={panorama1img} alt="Image one" />
                }
                itemTwo={
                  <ReactCompareSliderImage src={panorama2img} alt="Image two" />
                }
                position={50}
                style={{ width: "100%" }}
              />
            </div>
            <div>
              {" "}
              <button className="viewsbtn">View more Samples</button>
            </div>
          </div>
        </div>
      </section>

      <section id="Aerial Editing">
        <div className="clippingpath">
          <div className="clippingpath1">
            <h3>Aerial Editing</h3>
            <p>
              Panorama stitching service is a process that combines multiple
              overlapping images to create a wide-angle or 360-degree panoramic
              view. Using specialized software, these services align and merge
              the images seamlessly, resulting in a single, cohesive image.
              Panorama stitching is commonly employed in landscape photography,
              real estate, and architectural industries to showcase expansive
              vistas or spacious interiors. It allows for a broader perspective
              and captures more detail than a single photograph can provide.
              Professional photographers and businesses often rely on panorama
              stitching services to create captivating and immersive visual
              experiences for their audience.
            </p>
            <br />
          </div>
          <div className="clippingpath2">
            <div>
              {" "}
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage src={Aerial1img} alt="Image one" />
                }
                itemTwo={
                  <ReactCompareSliderImage src={Aerial2img} alt="Image two" />
                }
                position={50}
                style={{ width: "100%" }}
              />
            </div>
            <div>
              {" "}
              <button className="viewsbtn">View more Samples</button>
            </div>
          </div>
        </div>
      </section>

      <section id="Sky,Lawn and Pool Replacement">
        <div className="clippingpath">
          <div className="clippingpath1">
            <h3>Sky,Lawn and Pool Replacement</h3>
            <p>
              Sky, lawn, and pool replacement services involve digitally
              altering and enhancing the elements of a photograph to create a
              more visually appealing or desired look. These services can
              replace a dull or overcast sky with a vibrant, sunny sky,
              transform a patchy lawn into a lush green one, and even change the
              color or appearance of a pool. The process includes careful
              selection, blending, and color correction to ensure seamless
              integration of the new elements into the original image. Sky,
              lawn, and pool replacement services are commonly utilized in real
              estate photography and architectural visualizations to enhance the
              overall aesthetics and showcase properties in their best light.
            </p>
            <br />
          </div>
          <div className="clippingpath2">
            <div>
              {" "}
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage src={skylawn1img} alt="Image one" />
                }
                itemTwo={
                  <ReactCompareSliderImage src={skylawn2img} alt="Image two" />
                }
                position={50}
                style={{ width: "100%" }}
              />
            </div>
            <div>
              {" "}
              <button className="viewsbtn">View more Samples</button>
            </div>
          </div>
        </div>
      </section>

      <section id="Pro Image Enhancements">
        <div className="clippingpath">
          <div className="clippingpath1">
            <h3>Pro Image Enhancements</h3>
            <p>
              High-end architecture image editing with proper high definition
              service focuses on delivering exceptional quality and precision to
              architectural photographs. These services include advanced
              techniques like perspective correction, distortion removal,
              precise color grading, and meticulous attention to detail. By
              utilizing high-definition processing, the images are enhanced to
              ensure exceptional clarity, sharpness, and resolution, showcasing
              every intricate aspect of the architecture. This level of editing
              expertise is crucial for architects, interior designers, and
              luxury real estate professionals who aim to present their projects
              in the best possible light, emphasizing the sophistication and
              beauty of the architecture. The combination of high-end editing
              and high-definition service results in visually stunning and
              captivating architectural imagery that sets a new standard for
              quality and professionalism.
            </p>
            <br />
          </div>
          <div className="clippingpath2">
            <div>
              {" "}
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage src={proimg1} alt="Image one" />
                }
                itemTwo={
                  <ReactCompareSliderImage src={proimg2} alt="Image two" />
                }
                position={50}
                style={{ width: "100%" }}
              />
            </div>
            <div>
              {" "}
              <button className="viewsbtn">View more Samples</button>
            </div>
          </div>
        </div>
      </section>

      <section id="Weather Removal/Day to Dusk">
        <div className="clippingpath">
          <div className="clippingpath1">
            <h3>Weather Removal/Day to Dusk</h3>
            <p>
              Weather removal editing service is a specialized technique used to
              remove unwanted weather elements from photographs, such as rain,
              snow, fog, or haze. Through advanced editing methods, these
              services effectively eliminate the weather-related distractions
              and restore clarity and visibility to the image. This service is
              particularly useful in landscape, real estate, and outdoor
              photography, allowing for clean and pristine visuals regardless of
              the original weather conditions. Day to dusk image editing
              services specialize in transforming daytime photographs into
              stunning dusk or twilight scenes. These services adjust the
              lighting, color tones, and add a warm, inviting ambiance to create
              a captivating and dramatic effect. Day to dusk editing is commonly
              used in real estate, architectural, and landscape photography to
              showcase properties and landscapes in a more enchanting and
              atmospheric light.
            </p>
            <br />
          </div>
          <div className="clippingpath2">
            <div>
              {" "}
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage src={weather1img} alt="Image one" />
                }
                itemTwo={
                  <ReactCompareSliderImage src={weather2img} alt="Image two" />
                }
                position={50}
                style={{ width: "100%" }}
              />
            </div>
            <div>
              <button className="viewsbtn">View more Samples</button>
            </div>
          </div>
        </div>
      </section>
      <section id="Re Video-editing">
        <div className="clippingpath">
          <div className="clippingpath1">
            <h3>Re Video-editing</h3>
            <p>
              Real estate video editing services cater to the specific needs of
              the real estate industry by enhancing and refining property
              videos. These services include editing raw footage, adding music
              or voiceovers, applying color grading, and incorporating text or
              graphics to create engaging and professional videos. They focus on
              showcasing the property's features, highlighting key selling
              points, and creating a visually appealing narrative to attract
              potential buyers. Real estate video editing services help elevate
              the marketing efforts of real estate agents and agencies,
              providing them with polished and captivating videos that
              effectively showcase properties and generate interest from
              potential clients.
            </p>
            <br />
          </div>
          {/* <div className="clippingpath2">
            <div>
              {" "}
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage src={revideo1img} alt="Image one" />
                }
                itemTwo={
                  <ReactCompareSliderImage src={revideo2img} alt="Image two" />
                }
                position={50}
                style={{ width: "100%" }}
              />
            </div>
            <div>
              {" "}
              <button className="viewsbtn">View more Samples</button>
            </div>
          </div> */}
          <div>
          {/* <video
            src={"../Assets/videos/video.mp4"}
            width="450px"
            height="340px"
            // controls={true}
            // onPlay={() => console.log("video is playing")}
            // onPause={() => console.log("video is paused")}            
          /> */}
          {/* <video width="400" controls>
          <source src={videos} type="video/mp4" />          
          </video> */}

             <iframe src={videos} allow="autoplay" className="videoTag" ></iframe>


          </div>
         
        </div>
        
      </section>

      <Footer />
    </div>
  );
}

export default Realestate;