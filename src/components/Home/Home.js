import React from 'react';
import Banner from './Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Makeappoinment from './Makeappoinment';
import Tstimoniel from './Tstimoniel';

const Home = () => {
     return (
          <div>
              {/* <h2>This is home</h2>  */}
              <Banner></Banner>
              <Info></Info>
              <Services></Services>
              <Makeappoinment></Makeappoinment>
              <Tstimoniel></Tstimoniel>
          </div>
     );
};

export default Home;