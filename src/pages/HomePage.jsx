import React from 'react';
import TopNavigator from '../components/TopNavigator';
import Footer from '../components/Footer';
import LodgingList from '../components/LodgingList';

function HomePage() {
  return (
    <div>
      <TopNavigator />
      <LodgingList />
      <Footer />
    </div>
  );
}

export default HomePage;
