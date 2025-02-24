import React from 'react';
import Header from '../components/Top/Header';
import Footer from '../components/Footer';
import LodgingList from '../components/LodgingList';

function HomePage() {
  return (
    <>
      <Header />
      <LodgingList />
      <Footer />
    </>
  );
}

export default HomePage;
