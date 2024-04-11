import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import styles from './novelty.module.css';

const Novelty = () => {
    const [podsInfo, setPodsInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/pods_info');
                // Assuming the response is an array of pod items
                const slicedPods = response.data.slice(0, 5); // Take the first 5 items
                setPodsInfo(slicedPods);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className={styles.novelty}>
                <p className={styles.textFont}>
                    Новинка
                </p>
                <div className={styles.buttonsConteiner}>
                    <button className={styles.buttons}>
                        <IoIosArrowBack style={{ color: '#000000' }} />
                    </button>
                    <button className={styles.buttons}>
                        <IoIosArrowForward style={{ color: '#000000' }} />
                    </button>
                </div>
            </div>
            <div className={styles.novelty}>
                {podsInfo.length > 0 && podsInfo.map(item => (
                    <div key={item.id} className={styles.buttonsForPod}>
                        <img style={{ width: '274px', height: '230px', marginBottom: '15px' }} src={item.product_image} alt={item.product_name} />
                        <p className={styles.monserat} style={{ margin: '15px' }}>{item.product_name}</p>
                        <p className={styles.monserat} style={{ color: '#903718', fontSize: '11px', marginLeft: '25px' }}>Немає в наявності</p>
                        <p className={styles.monserat} style={{ color: '#595959', fontSize: '12px', marginLeft: '15px', marginBottom: '5.5px' }}>14565</p>
                        <p className={styles.monserat} style={{ color: '#333333', fontSize: '14px', marginLeft: '15px' }}>{item.product_description}</p>

                        <div className={styles.imageAndTextContainer}>
                            <p className={`${styles.monserat} ${styles.priceText} ${styles.pricePosition}`}>{item.price}</p>

                            <button className={styles.searchButton} style={{ width: '32px', height: '32px' }}>
                                {/* <LuSearch style={{ color: 'white', width: '16px' }} /> */}

                            </button>

                        </div>

                    </div>
                ))}
            </div>

        </div >
    );
};

export default Novelty;
