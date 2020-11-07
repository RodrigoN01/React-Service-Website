import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjFour, homeObjTwo, homeObjThree, homeObjOne } from './Data';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
