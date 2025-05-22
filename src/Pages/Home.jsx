import React from 'react';
import Banner from '../Componants/Banner';
import Extra1 from '../Componants/Extra1';
import Extra2 from '../Componants/Extra2';
import FeaturedGroups from '../Componants/FeaturedGroups';
import { Tooltip } from 'react-tooltip';

const Home = () => {


  return (
    <div>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="this is from react tooltip">
        ◕‿‿◕
      </a>
      <Tooltip id="my-tooltip" />
      <Banner></Banner>
      <FeaturedGroups></FeaturedGroups>
      <Extra1></Extra1>
      <Extra2></Extra2>
    </div>
  );
};

export default Home;