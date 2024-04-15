import React from 'react';

import { MdOutlineShoppingCart } from "react-icons/md";

const PodButton = ({ styles, item }) => {

    return (
        <div className={styles.buttonsForPod}>
            <img style={{ width: '274px', height: '230px', marginBottom: '15px' }} src={item.product_image} alt={item.product_name} />
            <p className={styles.monserat} style={{ margin: '15px' }}>{item.product_name}</p>
            <p className={styles.monserat} style={{ color: '#903718', fontSize: '11px', marginLeft: '25px' }}>Немає в наявності</p>
            <p className={styles.monserat} style={{ color: '#595959', fontSize: '12px', marginLeft: '15px', marginBottom: '5.5px' }}>14565</p>
            <p className={styles.monserat} style={{ color: '#333333', fontSize: '14px', marginLeft: '15px' }}>{item.product_description}</p>

            <div className={styles.imageAndTextContainer}>
                <p className={`${styles.monserat} ${styles.priceText} ${styles.pricePosition}`}>{item.price}</p>

                <button className={styles.searchButton} style={{ width: '32px', height: '32px' }}>
                    <MdOutlineShoppingCart />
                </button>
            </div>
        </div>
    );
}

export default PodButton;
