import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import { homeObjThree } from '../HomePage/Data';

function SignUp() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
