import React from "react";

import "./Profiles.scss";
import { ControlPoint} from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export default function Profiles() {
  const history = useHistory()
 
  return (
    <div className="profiles-container">
       <div className='nav'>
        <div className='nav__contents'>
        <img className='nav__logo'  src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt=''/>
        
        </div>
    </div>
      <span className="title">Who's watching?</span>
      <div className="profiles">
       
          <div className="profile">
            <div className="image"> <img className="imag" onClick={()=>history.push('/')}  src="vid/blueIcon.png"  alt=""/><h4 >New User</h4></div>
           
            <div className="image" ><img className="imag" onClick={()=>history.push('/')} src="vid/greenIcon.png"  alt=""/><h4 >Children</h4></div>
            <div className="image" ><ControlPoint className="imag"  /><h4 >Add Profile</h4></div>
          </div>
          
      </div>
     
    </div>
  );
}