import React from 'react';
import './Doctor.css';

const Doctor = ({ doctor }) => {
    const { name, expertize, img } = doctor;
    return (
        <div className='doctor container col-lg-4 col-sm-6'>
            <img className='img-fluid' src={img} alt="" />
            <h2>{name}</h2>
            <h4>{expertize}</h4>
        </div>
    );
};

export default Doctor;