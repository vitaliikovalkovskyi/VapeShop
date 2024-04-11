import React from 'react'
import styles from './footer.module.css'
import { TbExclamationMark } from "react-icons/tb";

const Footer = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.firstbock}>
                    <div className={styles.logo}>
                        <TbExclamationMark style={{ color: 'white', backgroundColor: '#4B4B4B', borderRadius: '100px', marginRight: '3px' }} />
                        ПН-НД з 8:55 до 21:05
                    </div>
                    <div className={styles.photo}>
                        <a href="https://t.me/vapehub" target="_blank">
                            <img src="tg.png" alt="Telegram" />
                        </a>
                        <a href="https://www.instagram.com/vapehub_official_" target="_blank">
                            <img src="inst.png" alt="Instagram" />
                        </a>
                        <a href="https://www.tiktok.com/@vapehub.rivne" target="_blank">
                            <img src="tiktok.png" alt="TikTok" />
                        </a>
                        <a href="https://www.youtube.com/@vapehubtm" target="_blank">
                            <img src="youtube.png" alt="YouTube" />
                        </a>
                    </div>
                    <div>
                        <img style={{ width: '174px', height: '168.5px' }} src="logo.png" alt="phone" />
                    </div>

                </div>

                <div className={styles.secondblock}>
                    <div className={styles.text} style={{ fontSize: '16px' }}>
                        Особистий кабінет
                    </div>
                    <div>
                        <button className={styles.button}>Особистий кабінет</button>
                        <button className={styles.button}>Історія замовлень</button>
                        <button className={styles.button}>Закладки</button>
                        <button className={styles.button}>Розсилка</button>
                    </div>



                </div>

                <div className={styles.secondblock}>
                    <div className={styles.text} style={{ fontSize: '16px' }}>
                        Додатково
                    </div>
                    <div>
                        <button className={styles.button}>Виробники</button>
                        <button className={styles.button}>Подарункові сертифікати</button>
                        <button className={styles.button}>Акції</button>
                        <button className={styles.button}>Карта сайту</button>
                        <button className={styles.button}>Одноразки</button>
                        <button className={styles.button}>Под системи</button>
                        <button className={styles.button}>Рідини</button>
                        <button className={styles.button}>Комплектуючі</button>
                    </div>



                </div>

                <div className={styles.secondblock}>
                    <div className={styles.text} style={{ fontSize: '16px' }}>
                        Інформація
                    </div>
                    <div>
                        <button className={styles.button}>Вакансії</button>
                        <button className={styles.button}>Кешбек</button>
                        <button className={styles.button}>Наші магазини</button>
                        <button className={styles.button}>Про компанію</button>
                        <button className={styles.button}>Доставка та оплата</button>
                        <button className={styles.button}>Політика конфіденційності</button>
                        <button className={styles.button}>Умови використання сайту</button>
                        <button className={styles.button}>Повернення та обмін</button>
                        <button className={styles.button}>Контакти</button>
                    </div>

                </div>

            </div >
            <div style={{color:'4B4B4B', fontFamily:'Montserrat', fontSize:'14px', marginTop:'25px', display: 'flex', justifyContent: 'center'}}>
                © 2018-2024 VAPEHUB – «Інтернет-магазин вейпів та електронних сигарет
            </div>

        </div>

    )
}

export default Footer