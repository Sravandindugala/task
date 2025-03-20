import React from 'react'
import Background from './Components/display/Background';
import Perticulars from './Components/perticulars/perticulars';
import About from './Components/About/About';
import Classes  from './Components/Class/Classes';
import Details from './Components/Details/Details';
/* import Membership from './Components/Membership/Membership'; */

const MainComponents = () => {
  return (
    <div>
      <Background/>
      <Perticulars/>
      <Classes/>
      {/* <Membership/> */}
      <About/>
      <Details/>
    </div>
  )
}

export default MainComponents;
