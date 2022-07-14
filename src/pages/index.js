import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import { homeContent, signupInfo } from '../components/shared/data';
import Service from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar {...{ isOpen, toggle }} />
      <Navbar {...{ toggle }} />
      <Hero />
      {homeContent?.map((item) => (
        <Info {...item} key={item.id} />
      ))}
      <Service />
      <Info {...signupInfo} />
      <Footer />
    </>
  );
};

export default Home;
