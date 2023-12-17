import React from 'react';
import Banner from './Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Makeappoinment from './Makeappoinment';
import Tstimoniel from './Tstimoniel';
import Footer from '../Shared/Footer/Footer';
// import New from '../New/New';

const Home = () => {
     return (
          <div>
              {/* <h2>This is home</h2>  */}
              <Banner></Banner>
              {/* <Info></Info> */}
              <Services></Services>
              <Makeappoinment></Makeappoinment>
              <Tstimoniel></Tstimoniel>

              {/* <New></New> */}
              <Footer></Footer>
          </div>
     );
};

export default Home;