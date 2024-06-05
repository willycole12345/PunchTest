import React from 'react';
import Bullet from '../assets/iconS.svg';
import SliderOne from '../assets/sliderone.svg';

const Slider = () => {
    return (
        <div>
            <div className=' container auto_overflow'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='top'>
                            <h3 className='text-start black headerH1'>Why choose <br /> Zwilt?</h3>
                            <p className='text-start black smallP'>We take complex hiring<br /> processes - and simplify them.<br /> Connecting you to the world’s <br /> highly qualified talent pool.</p>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='boxes'>
                            <div>
                                <div className='CardSliders'>

                                    <div className='spacing float_left'>
                                        <div className='paddingT'>
                                            <h3 className='headerH1 text-start'>Onboard without <br />the risk.</h3>
                                        </div>


                                        <div className="top">
                                            <div className="PriceColumn-checkContainer flex-container">
                                                <img src={Bullet} alt='bullet' />
                                                <span className='padding_18 smallP'> We pick the best for you to select. </span>
                                            </div>
                                            <div className="PriceColumn-checkContainer flex-container">
                                                <img src={Bullet} alt='bullet' />
                                                <span className='padding_18 smallP'>Thousands of vetted candidates in dozens of categories.</span>
                                            </div>
                                            <div className="PriceColumn-checkContainer flex-container">
                                                <img src={Bullet} alt='bullet' />
                                                <span className='padding_18 smallP'> Risk-free resource swapping for the best fit.</span>
                                            </div>
                                        </div>
                                        <div className=''>

                                            button
                                        </div>
                                    </div>

                                    <div className='float_right'>
                                        <img src={SliderOne} alt='' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='CardSliders'>

                                    <div className='spacing float_left'>
                                        <div className='paddingT'>
                                            <h3 className='headerH1 text-start'>Onboard without <br />the risk.</h3>
                                        </div>


                                        <div className="top">
                                            <div className="PriceColumn-checkContainer flex-container">
                                                <img src={Bullet} alt='bullet' />
                                                <span className='padding_18 smallP'> We pick the best for you to select. </span>
                                            </div>
                                            <div className="PriceColumn-checkContainer flex-container">
                                                <img src={Bullet} alt='bullet' />
                                                <span className='padding_18 smallP'>Thousands of vetted candidates in dozens of categories.</span>
                                            </div>
                                            <div className="PriceColumn-checkContainer flex-container">
                                                <img src={Bullet} alt='bullet' />
                                                <span className='padding_18 smallP'> Risk-free resource swapping for the best fit.</span>
                                            </div>
                                        </div>
                                        <div className=''>

                                            button
                                        </div>
                                    </div>

                                    <div className='float_right'>
                                        <img src={SliderOne} alt='' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='CardSliders'>

                                    <div className='spacing float_left'>
                                        <div className='paddingT'>
                                            <h3 className='headerH1 text-start'>Onboard without <br />the risk.</h3>
                                        </div>


                                        <div className="top">
                                            <div className="PriceColumn-checkContainer flex-container">
                                                <img src={Bullet} alt='bullet' />
                                                <span className='padding_18 smallP'> We pick the best for you to select. </span>
                                            </div>
                                            <div className="PriceColumn-checkContainer flex-container">
                                                <img src={Bullet} alt='bullet' />
                                                <span className='padding_18 smallP'>Thousands of vetted candidates in dozens of categories.</span>
                                            </div>
                                            <div className="PriceColumn-checkContainer flex-container">
                                                <img src={Bullet} alt='bullet' />
                                                <span className='padding_18 smallP'> Risk-free resource swapping for the best fit.</span>
                                            </div>
                                        </div>
                                        <div className=''>

                                            button
                                        </div>
                                    </div>

                                    <div className='float_right'>
                                        <img src={SliderOne} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Slider