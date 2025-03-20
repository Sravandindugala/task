import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id='about' className='about-container'>
      <div className='text-container'>
        <div className='text-container-heading'>
            <h1>ABOUT US</h1>
        </div>
        <div className='text-p'>
            <p>At Jumba & Yoga, we blend the energy of Jumba (dance-based fitness) with the mindfulness of Yoga to create a holistic wellness experience. Whether you seek strength, flexibility, or balance, our expert-led classes cater to all levels. </p>
        </div>
        <div className='text-p'>
            <p>
            If you’re not sure what your goals are, or don’t know where to start on your fitness journey, come in and speak to one of our qualified trainers who can help you develop a plan.
            </p>
            <ul>
              <li> Yoga – Hatha, Power, and Restorative Yoga for strength, relaxation, and mindfulness.</li>
              <li> Jumba Fitness – High-energy dance workouts to burn calories while having fun.</li>
              <li> Strength & Conditioning – Bodyweight and resistance training to boost endurance.</li>
              <li> Meditation & Breathwork – Guided sessions to enhance focus and inner peace.</li>
            </ul>
        </div>
            {/* <div className='text-button'>
                 <button >SCHEDULE</button>
            </div> */}
    
      </div>
    </div>
  )
}

export default About
