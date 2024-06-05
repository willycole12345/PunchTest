import React from 'react';
import One from '../assets/1.svg';
import Two from '../assets/2.svg';
import Three from '../assets/3.svg';
import DeveOne from '../assets/dev.svg'
import DeveTwo from '../assets/dev2.svg'
import DeveThree from '../assets/dev3.svg'
import SmallJoin from  '../assets/smalljoin.svg' 
 const Card = () => {
  return (
      <>
        <section className='wc_content_cc'>  
           <div className='justify-content-center'>
                        <div className='bottom_v1'>
                             <h3 className='text-center black headerH1'>Start your journey today.</h3>
                         </div>
             </div>
          <div className='wc_content_card'>
          <div className='container back_ground_purple_color'>
                    <div className='row'>
                        <div className='col-md-6  _path_C'>
                        <div className='develop_text'>
                            <div className='boxes'>
                                <div className=''>
                                      <img src={One} alt='one' />
                                </div>
                                <div className='padding_18'>
                                    <div className=''>
                                        <h3 className='headerH3'>Find your next star <br/> performer.</h3>
                                    </div>
                                    <div className='top_v2'>
                                    <p className='small_v1'>Explore the vast Zwilt marketplace to find the candidate <br/> that meets your needs.</p>
                                    </div>
                                    <div>
                                   
                                    </div>
                                      </div>
                                      
                                  </div>
                                  <div className='__Learn_small'>
                                  <i className=''><img src={SmallJoin} alt="btn_icon" />
</i> <span className='listingtext'> Learn More </span>
                                  </div>
                                
                           </div>
                            
                        </div>
                        <div className='col-md-6'>
                            <div className='develop_profile'>
                                <img src={DeveOne} alt="deve"/>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
          <div className='wc_content_card'>
          <div className='container back_ground_orange_color'>
                    <div className='row'>
                        <div className='col-md-6 _path_C'>
                        <div className='develop_text'>
                            <div className='boxes'>
                                <div className=''>
                                      <img src={Two} alt='one' />
                                </div>
                                <div className='padding_18'>
                                    <div className=''>
                                        <h3 className='headerH3'>Evaluate to your <br/>heart’s content.</h3>
                                    </div>
                                    <div className='top_v2'>
                                    <p className='small_v1'>Assess the candidate through work history, transparent<br/> tests and video interviews.</p>
                                    </div>
                                    <div>
                                      
                                    </div>
                                      </div>
                                      
                                  </div>
                                  <div className='__Learn_small'>
                                  <i className=''><img src={SmallJoin} alt="btn_icon" />
</i> <span className='listingtext'> Learn More </span>
                                  </div>
                           </div>
                            
                        </div>
                        <div className='col-md-6'>
                            <div className='develop_profile'>
                                <img src={DeveTwo} alt="deveTwo"/>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
          <div className='wc_content_card'>
          <div className='container back_ground_grey_color'>
                    <div className='row'>
                        <div className='col-md-6 _path_C'>
                        <div className='develop_text'>
                            <div className='boxes'>
                                <div className=''>
                                      <img src={Three} alt='one' />
                                </div>
                                <div className='padding_18'>
                                    <div className=''>
                                        <h3 className='headerH3'>Start building<br/> your team.</h3>
                                    </div>
                                    <div className='top_v2'>
                                    <p className='small_v1'>Onboard your candidate right away and start <br/>creating the next big thing.</p>
                                    </div>
                                    <div>
                                     
                                    </div>
                                </div>
                                  </div>
                                  <div className='__Learn_small'>
                                  <i className=''><img src={SmallJoin} alt="btn_icon" />
</i> <span className='listingtext'> Learn More </span>
                                  </div>
                           </div>
                            
                        </div>
                        <div className='col-md-6'>
                            <div className='develop_profile'>
                          <img src={DeveThree} alt="deveThree" style={ {  width:"80%"}} /> 
                            </div>
                        </div>
                    </div>
              </div>
              </div>
              </section>
      </>
  )
}

export default Card