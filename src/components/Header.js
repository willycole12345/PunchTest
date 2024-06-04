import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/logo.svg';


function Header() {
  return (
      <>
          <header className=''>
              <div className='header_wrapper'>
                  <div className='container'>
                      <div className='wrap'>
                          <div className='separate_div'>
                              <Link>
                                  <img src={Logo} className='_logo_css' alt='logo' />
                                  </Link>
                          </div>

                          <div className='separate_div display_none'>
                              <nav className='menu'>
                                  <div className='menu_box'>
                                      <div className='menu_navs'>
                                          <div className='menu_nav white'>Find Work</div>
                                          <div className='menu_nav white'>Find Talent</div>
                                          <div className='menu_nav white'>Articles</div>
                                          <div className='menu_nav white'>About Us</div>
                                          <div className='menu_nav white'>Contact Us</div>
                                      </div>
                                  </div>
                              </nav>
                          </div>
                          <div className='separate_div'>
                              <div className='__action white'>Log in</div>
                              <div className='_btn_style nav__button--danger '>
                                  <Link className=''>
                                      <span className=''>Join Now</span>
                                    </Link>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>   
          </header>
        
    </>
  )
}

export default Header;