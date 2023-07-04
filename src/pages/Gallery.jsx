import React from 'react'
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'
import img5 from '../assets/images/5.jpg'
import img6 from '../assets/images/6.jpg'
import img7 from '../assets/images/7.jpg'
import img8 from '../assets/images/8.jpg'
import img9 from '../assets/images/9.jpg'
import img10 from '../assets/images/10.jpg'
import { useEffect } from 'react'

function Gallery() {
    useEffect(() => {
        const carousel = document.querySelector('#myCarousel');
        const carouselInstance = new window.bootstrap.Carousel(carousel, { interval: 5000 });

        const cleanup = () => {
            carouselInstance.dispose();
          };
        return cleanup;
    }, [])
    const images = [img1, img2, img3, img4, img5, img7, img8, img9, img10, img6]

    return (
        <div className='container-fluid' style={{ textAlign: 'center'}}>
            <h1 className='display-6' style={{ fontFamily: 'serif' }}>Image Gallery</h1>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={img1}
                            className="d-block w-100"
                            alt="Slide 1"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={img2}
                            className="d-block w-100"
                            alt="Slide 2"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={img3}
                            className="d-block w-100"
                            alt="Slide 3"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={img4}
                            className="d-block w-100"
                            alt="Slide 3"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={img5}
                            className="d-block w-100"
                            alt="Slide 3"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={img6}
                            className="d-block w-100"
                            alt="Slide 3"
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <img
                            src={img7}
                            className="img-fluid"
                            alt="Image 1"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src={img8}
                            className="img-fluid"
                            alt="Image 2"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src={img9}
                            className="img-fluid"
                            alt="Image 3"
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            src={img10}
                            className="img-fluid"
                            alt="Image 4"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery