import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerImg from '../assets/iconplace.svg';
import Brick from '../assets/brick.svg'
import Stars from '../assets/star.svg'
import Badge from '../assets/badge.svg';
import Tab from '../components/Tab';
import Union from '../assets/Union.svg';
import Jsaon from '../assets/circleplace.svg';
import Groove from '../assets/groove.svg';
import Youtube from '../assets/youtube.svg';
import YoutubeBlue from '../assets/youtubeblue.svg';

import BtnIcon from '../assets/btnIcon.svg';
import Card from '../components/Card';
import News from '../components/NewletterForm';
import Shopify from '../assets/shopify.svg';
import Magento from '../assets/magento.svg';
import Cube from '../assets/cube.svg';
import Wix from '../assets/wix.svg';
import Net from '../assets/Num.svg';
import ArrowLeft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow_right.png';
import Figma from '../assets/figma.svg';
import Photoshop from '../assets/photoshop.svg';
import AI from '../assets/ai.svg';
import AD from '../assets/AD.svg';
import GrooveLeft from '../assets/grooveleft.svg';
import GrooveRight from '../assets/grooveright.svg';
import Slider from '../components/Slider'
// import { Link } from 'react-router-dom';
// import Button from '../components/Button';


const Content = () => {
  return (
      <>
           <Header />
           
           <section className='wc_content_Header'>
               <div className='container'>
                   <div className='row'>
                       <div className='col-md-12'>
                           <div className='justify-content-center'>
                               <div className='header_content'>
                                   <h5 className='text-center headerH1'>Finding the right fit <img src={BannerImg} alt=''></img>has </h5>
                                   <h5 className='text-center headerH1'>never been easier.</h5>
                                   <p className='text-center smallP black'>With our rigorous pre-vetting process, you'll never have to <br />worry about finding the ideal candidate ever again.</p>
                               </div>
                           </div>
                           
                           {/* <Button text="Hover Effect 1" effectType="btn_style" /> */}
                           <div className='justify-content-center'>
                               <div className=''>
                                   <div className='text-center'>
                                       <News />
                                       <Tab />

                                   </div>

                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div className=''>
                   <img src={Union} alt='strips' className='_stript_div' />
               </div>
               {/* <div className='container-fluid'>
                       <div className='row'>
                           <div className='col-md-12'>
                               
                           </div>
                       </div>
                   </div> */}
           </section>
           <section className='wc_content back_ground'>
               <div className='container _path '>
                   <div className='row'>
                       <div className='justify-content-center'>
                           <h5 className='text-center headerH1'>Your one-stop marketplace for finding <br />the talent your business needs.</h5>
                       </div>
                       <div className='col-md-6'>
                           <div className='paddingT'>
                               <div className='top'>
                                   <div className='text-start'>
                                       <p className='text-start listingtext_v1'>Find Dev and IT professionals to <br /> scale your business.</p>
                                   </div>
                                   <div className='boxes'>
                                       <div className=''>
                                           <div className='marginn_sub'>
                                               <div className="PriceColumn-checkContainer flex-container">
                                                   <img src={Badge} alt='broke' />
                                                   <span>&nbsp; 989 Skills</span>
                                               </div>
                                           </div>
                                           <div className='marginn_sub'>
                                               <div className="PriceColumn-checkContainer flex-container">
                                                   <img src={Stars} alt='Users' />
                                                   <span>&nbsp; 1011 Profiles</span>
                                               </div>
                                           </div>
                                       </div>
                                       <div className=''>
                                           <div className='marginn_sub'>
                                               <div className="PriceColumn-checkContainer flex-container">
                                                   <img src={Brick} alt='Users' />
                                                   <span>&nbsp; 45 Sub-Categories</span>
                                               </div>
                                           </div>
                                       </div>
                                       
                                   </div>
                               </div>
                               <div className='top'>
                                   <div className='text-start'>
                                       <p className='text-start listingtext_v1'>Explore Creative individuals with a  <br />keen eye for detail.</p>
                                   </div>
                                   <div className='boxes'>
                                       <div className=''>
                                           <div className='marginn_sub'>
                                               <div className="PriceColumn-checkContainer flex-container">
                                                   <img src={Badge} alt='broke' />
                                                   <span>&nbsp; 989 Skills</span>
                                               </div>
                                           </div>
                                           <div className='marginn_sub'>
                                               <div className="PriceColumn-checkContainer flex-container">
                                                   <img src={Stars} alt='Users' />
                                                   <span>&nbsp; 1011 Profiles</span>
                                               </div>
                                           </div>
                                       </div>
                                       <div className=''>
                                           <div className='marginn_sub'>
                                               <div className="PriceColumn-checkContainer flex-container">
                                                   <img src={Brick} alt='Users' />
                                                   <span>&nbsp; 45 Sub-Categories</span>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className=''>
                                 <div className=''>
                                       
                                       <div >

                                       <i className=''><img src={BtnIcon} alt="btn_icon" />
                                       </i> <span className='smallP '> Explore More </span>

                                       </div>
                                       {/* <Button  /> */}

                                 </div>
                               </div>
                           </div>
                       </div>
                       <div className='col-md-6'>
                           <div className='brandpostion'>
                           <div className='brand_logo'>
                               <div className=''>
                                   <h1 className='smallP padding_18 padding__top'>IT & Development</h1>
                                   <div className='boxes'>
                                       <div className='pad_brand'>
                                           <img src={Shopify} className='brand_img' alt="Shopify" />
                                           <span className='text-center'>Shopify Developer</span>
                                       </div>
                                       <div className='pad_brand'>
                                           <img src={Magento}  className='brand_img' alt="Magento" />
                                           <span className='text-center'>Magento Developer</span>

                                       </div>
                                       <div className='pad_brand'>
                                           <img src={Cube}  className='brand_img' alt="Cube" />
                                           <span className='text-center'>Data Science</span>

                                       </div>
                                       <div className='pad_brand'>
                                           <img src={Wix}  className='brand_img'  alt="Wix" />
                                           <span className='text-center'>Webflow Developer</span>

                                       </div>
                                       <div className='pad_brand'>
                                           <img src={Net}  className='brand_img'  alt="Net" />
                                           <span className='text-center'>Dot Net Developer</span>

                                       </div>
                                       <div className='pad_brand'>
                                           <img src={ArrowRight} alt="ArrowLeft" />
                                           <span className='text-center'>Shopify Developer</span>

                                       </div>
                                   </div>
                               </div>
                            
                           </div>
                           <br/>
                           <div className='brand_logo'>
                               <div className=''>
                                   <h1 className='smallP padding_18 padding__top'>IT & Development</h1>
                                   <div className='boxes'>
                                   <div className='pad_brand'>
                                           <img src={ArrowLeft} alt="ArrowLeft" />
                                          

                                       </div>
                                       <div className='pad_brand'>
                                           <img src={Figma} className='brand_img' alt="Shopify" />
                                           <span className='text-center'>UX Designer</span>
                                       </div>
                                       <div className='pad_brand'>
                                           <img src={Photoshop}  className='brand_img' alt="Magento" />
                                           <span className='text-center'>Graphics Designer</span>

                                       </div>
                                       <div className='pad_brand'>
                                           <img src={AI}  className='brand_img' alt="Cube" />
                                           <span className='text-center'>Illustration Artist</span>

                                       </div>
                                       <div className='pad_brand'>
                                           <img src={AD}  className='brand_img'  alt="Wix" />
                                           <span className='text-center'>Unreal Engine</span>

                                       </div>
                                       <div className='pad_brand'>
                                           <img src={Net}  className='brand_img'  alt="Net" />
                                           <span className='text-center'>Cinema 4D</span>

                                       </div>
                                      
                                   </div>
                               </div>
                            
                           </div>
                           <p className='smallP'><b>30 more </b>to explore</p>
                           </div>
                           </div>
                   </div>
               </div>
           </section>
           <section className='wc_content blackground_black'>
               <div className='container _path'>
                   <div className='row'>
                       <div className='col-md-6'>
                           <div className='__'>
                               <div className=''>
                                   <h3 className='white headerH1'>How it worked  <br /> for Jason <img src={Jsaon} alt="json" />  at <br /> <span className='purple_color'> groovehq </span></h3>
                               </div>
                               <div className='top_v1'>
                                   <p className='white smallP'>Zwilt enabled us to deliver on time and <br /> they’ve been heavy hitters in our corner since.</p>
                               </div>
                           </div>
                           <div className='boxes'>
                             
                               <div>
                                   <button className='hire_now_1' >
                                       <img src={GrooveLeft} alt='grooveleft' />
                                   </button>
                              </div>
                               <div>
                                   <button className='hire_now_1 listingtext'>
                                   <img src={GrooveRight} alt='grooveRight' />
                               </button>
                              </div>
                         
                            </div>
                       </div>
                       <div className='col-md-6'>
                           <div className='__'>
                               <div className='box'>
                                   <div className='cicle'><img src={Groove} alt="groove" style={{ width: "71px" }} /></div>

                               </div>
                               <div className='box'>
                                   <div className='_holder_profile'>
                                       <h2 className='name_list white padding_18'>Jason Makki</h2>
                                       <h5 className=' white padding_18'>Engineer at GROOVE</h5>
                                       <small className='color_ash padding_18'>San Francisco</small>
                                   </div>
                               </div>
                               <div className='top'>
                                   <p className='smallP text-start white'>Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.Zwilt enabled us to deliver on time and they’ve been heavy hitters.</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
           <section className='wc_content'>
               <div className='container _path '>
                   <div className='row'>
                       <div className='col-md-7'>
                           <div className='text-start'>
                               <h5 className='text-start headerH1'>How we ensure you’re <br />in good hands.</h5>
                               <div className='top'>
                                   <p className='smallP text-start black'>With our comprehensive screening process, we hand-pick highly <br />skilled candidates so you can onboard them in a matter of days.</p>
                               </div>
                               <div className="top">
                                   <div className="border_play">
                                       <div className="PriceColumn-checkContainer flex-container">
                                           <img src={Youtube} alt='youtube' />
                                           <span  className='y_text'  > &nbsp;  <b>Step 1: </b> Resume Screening</span>
                                       </div>
                                   </div>
                                   <div className="border_play youtube_shadow">
                                       <div className="PriceColumn-checkContainer flex-container">
                                           <img src={YoutubeBlue} alt='youtube' />
                                           <span  className='y_text'> &nbsp;  <b>Step 2: </b> Video Interview</span>

                                       </div>
                                       <div className='youtube_text'>
                                           <p>Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.</p>
                                       </div>
                                   </div>
                                   <div className="border_play">
                                       <div className="PriceColumn-checkContainer flex-container">
                                           <img src={Youtube} alt='youtube' />
                                           <span  className='y_text'> &nbsp;  <b>Step 3: </b> Technical Evaluation</span>
                                       </div>
                                   </div>
                                   <div className="border_play">
                                       <div className="PriceColumn-checkContainer flex-container">
                                           <img src={Youtube} alt='youtube' />
                                           <span  className='y_text'> &nbsp;  <b>Step 4: </b> Application Review</span>
                                       </div>
                                   </div>
                                   <div className="border_play">
                                       <div className="PriceColumn-checkContainer flex-container">
                                           <img src={Youtube} alt='youtube' />
                                           <span className='y_text'>  &nbsp;  <b>Step 5: </b> Lets get to work</span>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className='col-md-5'>

                       </div>
                   </div>
               </div>
           </section>
          
           <Card />
           <section className='wc_content_nocurve back_ground_shadow_color_v1'>
           <Slider/>
           </section>
           <section className='wc_content__n back_ground_grey_color_v1'>
               <div className='container-fluid'>
                   <div className='row'>
                       <div className='col-md-12'>
                           <div  className='div_faq'>
                           <div className='top padding__button'>
                               <h3 className='text-center black headerH1'>Frequently asked questions</h3>
                           </div>
                           <div>
                               <div  className='boorder_style'>
                                   <p className='text-center black faq_boorder_style_text'>General</p>
                               </div>
                               <div  className='boorder_style_long'>
                                   <p className='text-center  faq_boorder_style_text bo_x_1'>I want to work part-time, is that possible</p>
                              </div>

                           </div>
                           <div>
                               <div  className='boorder_style_longv1'>
                                   <p className='text-center  faq_boorder_style_text bo_x_2'>I want to work part-time, is that possible</p>
                              </div>
                           </div>
                           <div>
                               <div  className='boorder_style_longv1'>
                                   <p className='text-center  faq_boorder_style_text padding_right bo_x_3'>How does the payment works?</p>
                              </div>
                           </div>
                           <div>
                               <div  className='boorder_style_longv1'>
                                   <p className='text-center  faq_boorder_style_text padding_right bo_x_4'>How much can I earn?</p>
                              </div>
                           </div>
                           
                           <div>
                               <div  className='boorder_style'>
                                   <p className='text-center black faq_boorder_style_text'>General</p>
                               </div>
                               <div  className='boorder_style'>
                                   <p className='text-center black faq_boorder_style_text'>General</p>
                               </div>
                               <div  className='boorder_style_longv2'>
                                   <p className='text-center  faq_boorder_style_text bo_x_5'>I want to work part-time, is that possible</p>
                              </div>

                           </div>
                           <div>
                               <div  className='boorder_style_longv1'>
                                   <p className='text-center  faq_boorder_style_text padding_right bo_x_6'>How long are the average projects?</p>
                              </div>
                           </div>
                           <div>
                               <div  className='boorder_style_longv1'>
                                   <p className='text-center  faq_boorder_style_text padding_right bo_x_7'>How much can I earn?</p>
                              </div>
                               </div>
                           </div>
                       </div>
                   </div>

               </div>
           </section>
 
          <Footer />
      </>
  )
}

export default Content