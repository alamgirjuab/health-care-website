import React from 'react';
import banner from '../../img/banner-3.jpg';

const About = () => {
    return (
        <div className='container text-center'>
            <h1 className='text-primary mt-5'>About Us</h1>
            <img className='my-5' src={banner} alt="" />
            <p>
                Who We Are
                Popular Diagnostic Centre Ltd. is an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes of Bangladesh which started its activities in 1983. Popular Diagnostic Centre Ltd. is the largest diagnostic services provider organization in private sector of the country. It is been pioneer in introducing world latest medical equipments and advanced technology to provide round the clock medical investigations and consultancy services.

                LEGAL STATUS Popular Diagnostic Centre Ltd. is a private limited company registered with the Ministry of Health & Family Welfare, People’s Republic Govt. of Bangladesh having License No. 1275 &688.
            </p>
            <h2>Our Goal</h2>
            <p>To establish a referral Diagnostic and Medical Services Centre.</p>
            <h2>Our Objective</h2>
            <p>
                To render the world standard diagnostic service to the people of the country at an affordable cost and in turn to limit the outflow of the patient abroad at the expense of heard earn foreign currency by providing quality diagnostic services.
                Out door basis treatment by renowned General Practitioners, Consultants and Professors in different medical fields.
                To promote Health Education & Medical Services.
                Day care Centre for follow-up cardiac renal and oncology patients.
                To build a full fledged specialized (Tertiary) Hospital.
                Set up Satellite collection Centre.
            </p>
        </div>
    );
};

export default About;