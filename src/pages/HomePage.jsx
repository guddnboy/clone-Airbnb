import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LodgingList from '../components/LodgingList';

function HomePage() {
  return (
    <div>
      <Header />
      <LodgingList />
      <Footer />
    </div>
  );
}

export default HomePage;
