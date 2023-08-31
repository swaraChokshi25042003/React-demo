import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main_bar from './Main_bar';
import Header from './Header';
import Info_Footer from './Info_footer';
import Footer from './Footer';
import Navbar from './Navbar';
import Offerbar from './Code_offerbar';
import Advt from './Advt';
import Currently_trending from './Currently_tending';
import Shop_category from './Shop_category';
import Trust_bar from './Trust_bar';
import Promo from './Promo';
import As_seen from './As_seen';
import Blog from './Blog';
import About_us from './About_us';
import Featured_product from './Featured_product';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Main_bar />
  <Header />
  <Navbar/>
  <Offerbar/>
  <Advt/>
  <Currently_trending/>
  <Blog/>
  <Featured_product/>
  <About_us/>
  <Promo/>
  <As_seen/>
  <Shop_category/>
  <Trust_bar/>
  <Info_Footer/>
  <Footer/>
  </>
    
);


