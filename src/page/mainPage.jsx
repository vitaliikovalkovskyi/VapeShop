import React from 'react';
import Header from '../components/header/header'; // Assuming correct path
import Category from '../components/category/category'; // Assuming correct path
import Novelty from '../components/novelty/novelty';
import Sales_leader from '../components/sales_leader/sales_leader';
import VapehubDescription from '../components/vapehubDescription/vapehubDescription';
import Footer from '../components/footer/footer';

const MainPage = () => {
  return (
    <div>
      <Header />
      <Category />
      <Novelty />
      <Sales_leader />
      <VapehubDescription />
      <Footer />
    </div>
  );
};

export default MainPage;