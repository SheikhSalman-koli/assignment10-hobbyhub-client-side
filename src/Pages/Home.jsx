import React from 'react';
import Banner from '../Componants/Banner';
import Extra1 from '../Componants/Extra1';
import Extra2 from '../Componants/Extra2';
import FeaturedGroups from '../Componants/FeaturedGroups';
import { Tooltip } from 'react-tooltip';
import { Fade } from "react-awesome-reveal";

const Home = () => {


  return (
    <div>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="this is from react tooltip">
        ◕‿‿◕
      </a>
      <Tooltip id="my-tooltip" />

      <Fade cascade>
  <p>I enter first...</p>
  <p>...then comes my turn...</p>
  <p>...and finally you see me!</p>
</Fade>


      <Banner></Banner>
      <FeaturedGroups></FeaturedGroups>
      <Extra1></Extra1>
      <Extra2></Extra2>
    </div>
  );
};

export default Home;