import React from 'react'
import { useState } from 'react';
import './Imagegallery2.css'

export default function Imagegallery2() {
        const image1="images/drone/s1.jpg";
        const image2="images/drone/s2.jpg";
        const image3="images/drone/s3.jpg";
        const image4="images/drone/s4.jpg";
        const image5="images/drone/s5.jpg";
        const image6="images/drone/s6.jpg";
        const image7="images/drone/s7.jpg";
        const image8="images/drone/s8.jpg";
        const image9="images/drone/s9.jpg";
        const image10="images/drone/s10.jpg";
        const image11="images/drone/s11.jpg";
        const image12="images/drone/s12.jpg";
        const images = [image1, image2, image3, image4, image5, image6,image7,image8,image9,image10,image11,image12];

        const [imageToShow, setImageToShow] = useState("");
        const [lightboxDisplay, setLightBoxDisplay] = useState(false);
        
        //looping through our images array to create img elements
        const imageCards = images.map((image) => (
          <img className="image-card" onClick={() => showImage(image)} src={image} alt=""/>
        ));
      
        //function to show a specific image in the lightbox, amd make lightbox visible
        const showImage = (image) => {
          setImageToShow(image);
          setLightBoxDisplay(true);
        };
      
        //hide lightbox
        const hideLightBox = () => {
          setLightBoxDisplay(false);
        };
      
        //show next image in lightbox
        const showNext = (e) => {
          e.stopPropagation();
          let currentIndex = images.indexOf(imageToShow);
          if (currentIndex >= images.length - 1) {
            setLightBoxDisplay(false);
          } else {
            let nextImage = images[currentIndex + 1];
            setImageToShow(nextImage);
          }
        };
        const showPrev = (e) => {
            e.stopPropagation();
            let currentIndex = images.indexOf(imageToShow);
            if (currentIndex <= 0) {
              setLightBoxDisplay(false);
            
            } else {
              let nextImage = images[currentIndex - 1];
              setImageToShow(nextImage);
            }
          };
 
    return (
    <div>
       <div className='container5'>{imageCards}</div>
      
      {
        lightboxDisplay ? 
        <div id="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev}>⭠</button>
          <img id="lightbox-img" src={imageToShow} alt=''></img>
          <button onClick={showNext}>⭢</button>
        </div>
       : ""
      }
      
    </div>
  )
}
