import React from 'react';
import Banner from './Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';

const Home = () => {
     return (
          <div>
              {/* <h2>This is home</h2>  */}
              <Banner></Banner>
              <Info></Info>
              <Services></Services>
          </div>
     );
};

export default Home;