import React from 'react';
import Banner from '../Componants/Banner';
import Extra1 from '../Componants/Extra1';
import Extra2 from '../Componants/Extra2';
import FeaturedGroups from '../Componants/FeaturedGroups';

const Home = () => {


    return (
        <div>
          <Banner></Banner>
          <FeaturedGroups></FeaturedGroups>
          <Extra1></Extra1>
          <Extra2></Extra2>
        </div>
    );
};

export default Home;