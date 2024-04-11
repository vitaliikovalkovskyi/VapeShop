import React from 'react';
import { FaInfoCircle } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { FaGift } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from './header.module.css';
import './montserrat-font.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { LuSearch } from "react-icons/lu";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Header = () => {
  return (
    <>
      <div className={`${styles.upper_header} ${styles.montserrat}`}>
        <div>
          <ul>
            <li>
              <FaInfoCircle style={{ marginLeft: '10px', width: '11.16' }} />
              <button className={styles.purchase__button}>
                Контакти
              </button>
            </li>
            <li>
              <FiBox style={{ marginLeft: '10px', width: '11.16' }} />
              <button className={styles.purchase__button}>
                Доставка та оплата
              </button>
            </li>
            <li>
              <FaGift style={{ marginLeft: '10px', width: '11.16' }} />
              <button className={styles.purchase__button}>
                Кешбек
              </button>
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginLeft: '10px', width: '11.16' }} />
              <button className={styles.purchase__button}>
                Наші магазини
              </button>
            </li>
          </ul>

        </div>
        <button className={styles.purchase__button} style={{ color: '#333333', marginLeft: '760px' }}>
          Особистий кабінет
        </button>

      </div>
      <header className={styles.superHeader}>
        <div className={styles.mainHeader}>
          <div className={styles.Logo}>
            <img src='logo.png' alt='' />
          </div>
          <div className={styles.Catalog}>
            <button class={styles.catalogButton}>
              <RxHamburgerMenu className={styles.hamburger} style={{ width: '20px', height: '18px' }} />
              <span class={styles.catalogText}>Каталог</span>
              <MdKeyboardArrowDown style={{ marginRight: '15px' }} />
            </button>
            <div className={styles.catalogSearch}>
              <input className={styles.Search} type="search" placeholder="Пошук"

              />
              <VscSettings style={{ color: "#B2BBC5" }} />
              <button className={styles.searchButton} style={{ width: '32px', height: '32px' }}>
                <LuSearch style={{ color: 'white', width: '16px' }} />

              </button>

            </div>
            <div className={styles.catalogShledule}>
              ПН-НД з 8:55 до 21:05
            </div>
            <div className={styles.icoPhone}>
              <img src='icoPhone.png' alt='' />
              <div className={styles.icoNumberStyle}>+38(050)416-95-09</div>
              <MdKeyboardArrowDown style={{ marginLeft: '3px' }} />
            </div>
            <div className={styles.icoBasket}>
              <img src='basket.png' alt='' />
              <div>
                <div style={{ fontSize: '14px' }}>
                  Tоварів,
                </div>
                <div style={{ fontWeight: '600', fontSize: '14px' }}>
                  на 0 грн
                </div>
              </div>
              <MdKeyboardArrowDown style={{ marginLeft: '3px' }} />
            </div>

          </div>


        </div>
        <div className={styles.underHeaderText} style={{backgroundColor:'white'}}>
          <div style={{ fontWeight: '400', fontSize: '12px' }}>
          Я шукаю, наприклад,
          </div>
          <div style={{fontWeight:'500', fontSize: '12px'}}>
          одноразка
          <br/>
          <br/>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;