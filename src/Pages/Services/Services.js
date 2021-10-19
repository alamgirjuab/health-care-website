import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-5'>
            <h2 className='text-primary text-center'>Our Services</h2>
            <div className='services-container container my-5'>
                {
                    services.map(service => <Service
                        key={service.sl}
                        service={service}

                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;