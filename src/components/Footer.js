import React from 'react';
import Logo from '../assets/logo.svg';
import Downarrow from '../assets/downarrow.png';
function Footer() {
  return (
    <>
                <section className='footer blackground_blackv1'>
                <div className='container '>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='Help back_ground_blue_color'>
                                <div className='padding_special'>
                                    <h3 className='_pathfooterv1 text-center headerH1 white'>Need a job done, and done <br />well? Get started</h3>
                                    
                                <div className='text-center'>
                                     
                                  <div className="_pathfooterv1">

                                    <i className='btn_style'><img src={Downarrow} alt="btn_icon" />
                                    </i> <span className='smallP btn_text'></span>

                                    </div>
                                </div>        
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container div_seration'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className=''>
                                <img src={Logo} alt="namelogo" />
                                <div className='top_v1 padding__right'>
                                <p className='white text-start'>We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.</p>
                          
                                </div>
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div>
                                <div className='padding__left'>
                                    <h1 className='white text-start headerH1'>Connecting the right people to the right businesses.</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='container '>
                    <div className='row'>
                        <div className='col-md-4'>
                        <p className='text-start  line'>LINKS AND REDIRECTS</p>
                            <div className='boxes'>
                              
                                <div>
                                    <button className='hire_now listingtext'>Hire Now</button>
                               </div>
                                <div>
                                <button className='hire_now listingtext'>Apply Now</button>
                               </div>
                          
                             </div>
                        </div>
                        <div className='col-md-2'>
                            <div>
                                <div className=''>
                                    <p className='padding__left text-start  line'>PLATFORM</p>
                                        <ul className='text-start  list_style white'>
                                            <li className='footer_listing'>Find Work</li>
                                            <li className='footer_listing'>Find Talent</li>
                                            <li className='footer_listing'>Categories</li>
                                            <li className='footer_listing'>About Us</li>
                                        </ul>
                                   
                                </div>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div>
                                <div className=''>
                                <p className='padding__left text-start  line'>CATEGORIES</p>
                                        <ul className='text-start  list_style white'>
                                            <li className='footer_listing'>Data Science</li>
                                            <li className='footer_listing'>IT & Networking</li>
                                            <li className='footer_listing'>Web & Mobile</li>
                                          
                                        </ul>
                                   
                                
                                </div>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div>
                                <div className=''>
                                <p className='padding__left text-start  line'>HELP</p>
                                        <ul className='text-start  list_style white'>
                                            <li className='footer_listing'>FAQ’s</li>
                                            <li className='footer_listing'>Contact Us</li>
                                            <li className='footer_listing'>Web & Mobile</li>
                                          
                                        </ul>
                                   
                                </div>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div>
                                <div className=''>
                                   
                                    <p className='padding__left text-start  line'>GET IN TOUCH @</p>
                                        <ul className='text-start  list_style white'>
                                            <li className='footer_listing'>Instagram</li>
                                            <li className='footer_listing'>LinkedIn</li>
                                            <li className='footer_listing'>Twitter</li>
                                          
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
            <hr className='hr__class '/>
            </div>
                <div className='container '>
                    <div className='row'>
                        <div className='col-md-8'>
                            <p  className='text-start  white footer_v1'>All rights reserved by Zwilt</p>
                        </div>
                        <div className='col-md-4'>
                            <div className='__action'>
                                <div className=''><p className='text-start  line footer_v1'><u>Privacy Policy</u></p></div>
                              
                            </div>
                            <div className='__action'>
                                <div className='padding__left'><p className='text-start  line footer_v1'><u>Terms and Conditions</u></p></div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Footer;