import React from 'react';
import Header from '../components/Top/Header';
import Footer from '../components/Footer';
import LodgingList from '../components/LodgingList';
import CategoryFilter from '../components/CategoryFilter';

function HomePage() {
  return (
    <>
      <Header />
      <CategoryFilter />
      <LodgingList />
      <Footer />
    </>
  );
}

export default HomePage;
