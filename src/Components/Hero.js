import React from 'react'
import locationIcon from '../Images/locationIcon.png'
const Hero = (props) => {
  return (
    <>
        <div className='hero'>
            <div className='hero-content'>
                <img src={props.imageUrl} className="hero-img" alt="" />
                <div className='hero-text'>
                    <img src={locationIcon} alt="" className='locate-icon'/>
                    <p>{props.location}</p><a href={props.googleMapsUrl}>View on Google Maps</a>
                    <h1 className='hero-title'>{props.title}</h1>
                    <p className='hero-date'>{`${props.startDate} - ${props.endDate}`}</p>
                    <p className='hero-description'>{props.description}</p>
                </div>
            </div>
        </div>
        <hr/>
    </>
  )
}

export default Hero