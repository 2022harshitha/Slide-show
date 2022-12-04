import React, { useState } from 'react'
import './Slides.css'
import { images } from '../Helpers/Data'



function Slides() {

    const [currentImage,setImage] = useState(1);
  return (
    <div className='slide'>
    <div className='inslide'
    style = {{backgroundImage:`url(${images[currentImage].img})`}}
    >
    
    <div className="left">
     <button className='btn' onClick={()=>{
      currentImage>0 && setImage(currentImage-1)
     }}>Previous</button>
    
    </div>
    <div className="center">
    <h1>{images[currentImage].title}</h1>
    <p>{images[currentImage].subtitle}</p>
    </div>
    <div className="right">
    <button className='btn' onClick={()=>{
      currentImage<images.length-1 && setImage(currentImage+1)
    }}>Next</button>
    </div>
    </div>
    </div>
  )
}

export default Slides