import React from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const doctors = [
    {
        id: 1,
        name: "Dr. Aminul Islam",
        expertize: "Eye Specialist",
        img: "https://i.ibb.co/RHNvpX0/Dr-Aminul.png"
    },
    {
        id: 2,
        name: "Dr. Amisul Islam",
        expertize: "Medicine Specialist",
        img: "https://i.ibb.co/pWbgFKH/Dr-Anisul.png"
    },
    {
        id: 3,
        name: "Dr. Muhammad Ibrahim ",
        expertize: "Heart Specialist",
        img: "https://i.ibb.co/NNHr82m/Dr-Ibrahim.png"
    },
    {
        id: 4,
        name: "Dr. Kaniz Farhana",
        expertize: "Dental Specialist",
        img: "https://i.ibb.co/yPT9b1P/Dr-Kaniz.png"
    },
    {
        id: 5,
        name: "Dr. Marzia Sultana",
        expertize: "Kedney Specialist",
        img: "https://i.ibb.co/SVTjT5p/Dr-Marzia.png"
    },
    {
        id: 6,
        name: "Dr. Monalisa Islam",
        expertize: "Liver Specialist",
        img: "https://i.ibb.co/2t7mths/Dr-monalisa.png"
    }
]

const Doctors = () => {
    return (
        <div className='container mb-5'>
            <h2 className='text-primary text-center my-5'>Our Specialists</h2>
            <div className='row doctors'>
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>

        </div>
    );
};

export default Doctors;