import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../img/banner-1.jpg';
import banner2 from '../../img/banner-2.jpg';
import banner3 from '../../img/banner-3.jpg';
import banner4 from '../../img/banner-4.jpg';


const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to</h3>
                        <p>React Diagnostic Center</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>World Class Medical Facilities</h3>
                        <p>Our experts ensure you world class medical facilities</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Trust on us</h3>
                        <p>Only we provide quick and right treatment, so trust us</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>We always beside you</h3>
                        <p>Reack digital diagnostic center always beside you</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;