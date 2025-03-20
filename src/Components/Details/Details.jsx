import React from 'react'
import './Details.css'
import fb from '../assets/logos/fb.png'
import insta from '../assets/logos/insta.png'
import twitter from '../assets/logos/twitter.png'
const Details = () => {
  return (
    <div className='details-container'>
       <div className='details-working'>
            <div className='details-working-heading'>
                <h1>WORKING HOURS</h1>
            </div>
            <div className='deatis-working-p'>
                <p>Monday - Friday 5:00 AM - 12:00 AM </p>
                <p>Sunday - Saturday 8:00 AM - 10:00 PM </p>
                <div className='details-container-logos'>
                    <img src={fb} alt='Facebook-img'/>
                    <img src={insta} alt='Facebook-img'/>
                    <img src={twitter} alt='Facebook-img'/>
                </div>
            </div>
       </div>
       <div className='details-address'>
            <div className='details-address-heading'>
                <h1>ADDRESS</h1>
            </div>
             <div className='deatils-address-p'>
                <p>661 Sulphur Springs Ave. Bronx, NY 10465</p>
            </div>
       </div>
    </div>
  )
}

export default Details




