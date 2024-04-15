import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import styles from './novelty.module.css';
import { MdOutlineShoppingCart } from "react-icons/md";
import PodButton from './pod_button.jsx'; //
import Slider from "react-slick";
const Novelty = () => {
    const [podsInfo, setPodsInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/pods_info');
                // Assuming the response is an array of pod items
                const slicedPods = response.data; // Take the first 5 items
                setPodsInfo(slicedPods);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,

    };
    const sliderRef = useRef()

    const goToNext = () => sliderRef.current.slickNext()
    const goToPrev = () => sliderRef.current.slickPrev()
    return (
        <div className={styles.slider}>
            <div className={styles.novelty}>
                <p className={styles.textFont}>
                    Новинка
                </p>
                <div className={styles.buttonsConteiner} >
                    <button onClick={goToPrev}  className={styles.buttons}>
                        <IoIosArrowBack style={{ color: '#000000' }} />
                    </button>
                    <button  onClick={goToNext} className={styles.buttons}>
                        <IoIosArrowForward  style={{ color: '#000000' }} />
                    </button>
                </div>

            </div>
            {/* <div className={styles.novelty}> */}
            <div className="slider-container" >
                <Slider ref={sliderRef} {...settings}>
                    {podsInfo.length > 0 && podsInfo.map(item => (

                        <PodButton key={item.id} styles={styles} item={item} />
                    ))}

                </Slider>
            </div>
            {/* </div> */}

        </div >
    );
};

export default Novelty;
