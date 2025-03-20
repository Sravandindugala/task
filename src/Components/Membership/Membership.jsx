import React from 'react'
import '../Membership/Membership.css'

const Membership = () => {
const data =[
    {name:'PF BLACK CARD',rate:'24.99', text:'Access to any club, bring a guest anytime, PF+ premium digital workouts, and so much more!' },
    {name:'Classic',rate:'15.99', text:'Our standard membership, with unlimited access to your home club.' }
]


  return (
    <div className='container'>
        <div className='container-heading'>
            <h1>Memberships</h1>
            <p>We offer the PF Black Card® Membership and Classic Membership. Both get you access to The Judgement Free Zone®, and tons of cardio and strength equipment.</p>
        </div>
        <div className='membership-cards'>
            <div>
                <div>
                    <h3>{data.name}</h3>
                </div>
                <div>
                    <h4>Best value</h4>
                </div>
            </div>
            <div>
                <p>Starting at $<span>{data.rate}</span>/mo* plus taxes & fees</p>
            </div>
            
        </div>
    
    </div>
  )
}

export default Membership
