// import { useState } from "react";
import React, { useState} from 'react';
// import BtnIcon from '../assets/btn_icon.svg'
import { Link } from 'react-router-dom';



function Button() {

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    console.log('here2');
    setIsHovered(true);
  };
  const handleMouseLeave = () => {

    console.log('here1');
    setIsHovered(false);
  };
  const buttonStyle = {
    background: isHovered ? 'blue' : 'red',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background 0.3s',
    cursor: 'pointer',
  };
  return (
    <div
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link>
      Hover Me
      </Link>
     
    </div>
  );

}


export default Button;

