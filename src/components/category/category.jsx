import React from 'react'
import styles from './category.module.css';

const Category = () => {
    return (
        <div className={styles.category}>
            <div className={styles.categoryName}>
                Категорії
            </div>

            <div className={styles.categoryList}>
                <button className={styles.categoryButtons}>
                    <div>
                        <img style={{ width: '150px', height: '150px' }} src='button_device.png' alt='' />
                        <p style={{ marginTop: '25px', fontSize: '14px', fontFamily: 'Montserrat' }}>
                            Девайси
                        </p>
                    </div>
                </button>

                <button className={styles.categoryButtons}>
                    <div>
                        <img style={{ width: '150px', height: '150px' }} src='button_odorazka.png' alt='' />
                        <p style={{ marginTop: '25px', fontSize: '14px', fontFamily: 'Montserrat' }}>
                            Одноразки
                        </p>
                    </div>
                </button>

                <button className={styles.categoryButtons}>
                    <div>
                        <img style={{ width: '150px', height: '150px' }} src='button_jija.png' alt='' />
                        <p style={{ marginTop: '25px', fontSize: '14px', fontFamily: 'Montserrat' }}>
                            Рідини
                        </p>
                    </div>
                </button>

                <button className={styles.categoryButtons}>
                    <div>
                        <img style={{ width: '150px', height: '150px' }} src='button_cartrige.png' alt='' />
                        <p style={{ marginTop: '25px', fontSize: '14px', fontFamily: 'Montserrat' }}>
                            Комплектуючі
                        </p>
                    </div>
                </button>
            </div>
            <div className={styles.containerButtons}>
                <button className={styles.categoryButtons_down}>
                    <div>
                        <img className={styles.categoryButton_downImage} src='categoryDown1.png' alt='' />
                        <p style={{ marginTop: '41px', fontSize: '20px', fontFamily: 'Montserrat', fontWeight: '600' }}>
                            Безкоштовна доставка від 999 грн
                        </p>
                    </div>
                </button>
                <button className={styles.categoryButtons_down}>
                    <div>
                        <img className={styles.categoryButton_downImage} src='categoryDown2.png' alt='' />
                        <p style={{ marginTop: '41px', fontSize: '20px', fontFamily: 'Montserrat', fontWeight: '600' }}>
                            Акції | Новини | Розіграші | Чат
                        </p>
                    </div>
                </button>
                <button className={styles.categoryButtons_down}>
                    <div>
                        <img className={styles.categoryButton_downImage} src='categoryDown3.png' alt='' />
                        <p style={{ marginTop: '41px', fontSize: '20px', fontFamily: 'Montserrat', fontWeight: '600' }}>
                            Оплачуй до 100% вартості
                            замовлення
                        </p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Category