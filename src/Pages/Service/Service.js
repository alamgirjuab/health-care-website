import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    // const { service } = props;
    const { name, description, img } = service;
    return (
        <div className="container service">
            <img className="img-fluid" src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Service;