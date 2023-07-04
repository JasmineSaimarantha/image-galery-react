import React, { useState } from 'react'
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

function GetOne() {
    const [images, setImage] = useState('')
    const getImage = () => {
        const randomImages = [img1, img2, img3, img4, img5, img7, img8, img9, img10, img6]
        const randomIndex = Math.floor(Math.random() * randomImages.length);
        const randomImage = randomImages[randomIndex];
        setImage(randomImage)
    }

    return (
        <div className='container-fluid' style={{ textAlign: 'center' }}>
            <a href="#" onClick={getImage}>
                <h1 className='display-6' style={{ fontFamily: 'serif' }}>Random Image</h1>
            </a>
            <div className='container'>
                {images && <img src={images} className="img-fluid" alt="" />}
            </div>
        </div>
    )
}

export default GetOne