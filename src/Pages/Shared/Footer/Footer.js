import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (

        <div className='bg-info'>
            <div className='container'>
                <div className='row text-white py-3'>
                    <div className='col-lg-4'>
                        <h5>Contact Us</h5>
                        <p className='pt-3'>
                            House #16, Road # 2, <br />
                            Dhanmondi R/A, Dhaka-1205, Bangladesh <br />
                            Phone : 09613 787801, 09666 787801 <br />
                            E-mail : info@populardiagnostic.com
                        </p>
                    </div>
                    <div className='col-lg-4'>
                        <h5>Important Links</h5>
                        <div className='link p-3'>
                            <a href="#">Pharmaceuticals</a>
                            <a href="#">Medical College</a>
                            <a href="#">Medical College & Hospital</a>
                            <a href="#">Management Team</a>
                            <a href="#">Career</a>

                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <h5>Quick Links</h5>
                        <div className='link p-3'>
                            <a href="#">Our Services</a>
                            <a href="#">Our Branches</a>
                            <a href="#">Call for Appointments</a>
                            <a href="#">Find Docotrs</a>
                            <a href="#">Sitemap</a>

                        </div>
                    </div>
                </div>

            </div>
            <div className='py-3 border-top'>
                <div className='container text-white'>
                    <span className='fw-bold'><small>Copyright &copy; 2021 || react diagnostic center</small></span>
                </div>
            </div>
        </div>
    );
};

export default Footer;