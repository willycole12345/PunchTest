import React from 'react'

function Tab() {
  return (
      <>
          <div className='top'></div>
          <div className='tabparent'>
              <div className='tabgroup'>
                  <div className='tabwrapper'>
                      <div className='tabheaderContent_1'>{`IT & Development`}</div>
                  </div>
                  <div className='tabwrapper__ '>
                      <div className='tabheaderContent_2'>Design and Creative</div>
                  </div>
              </div>
              <div className='list_container'>
                  <div className=''>
                      <div className='container'>
                          <div className='row'>
                              <div className='col-md-4'>
                                  <ul className='list_style'>
                                      <li className='text-start listingtext graycolor padding'>Python Developer</li>
                                      <li className='text-start listingtext graycolor padding'>Shopify Developer</li>
                                      <li className='text-start listingtext boldText black padding'>MERN Stack Developer</li>
                                      <li className='text-start listingtext graycolor padding'>Full Stack Developer</li>
                                  </ul>
                              </div>
                              <div className='col-md-4'>
                              <ul className='list_style'>
                                      <li className='text-start listingtext graycolor padding'>Data Science</li>
                                      <li className='text-start listingtext graycolor padding'>Front End Developer</li>
                                      <li className='text-start listingtext graycolor padding'>Shopify Developer</li>
                                      <li className='text-start listingtext graycolor padding'>Python Developer</li>
                                  </ul>
                              </div>
                              <div className='col-md-4'>
                              <ul className='list_style'>
                                      <li className='text-start listingtext graycolor padding'>Shopify Developer</li>
                                      <li className='text-start listingtext graycolor padding'>Python Developer</li>
                                      <li className='text-start listingtext graycolor padding'>Full Stack Developer</li>
                                      <li  className='text-start listingtext  padding boldText black'>Explore More</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Tab;