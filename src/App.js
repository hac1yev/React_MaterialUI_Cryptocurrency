import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Switch,Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Cryptocurrencies from './pages/Cryptocurrencies';
import CryptoDetail from './pages/CryptoDetail';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/cryptocurrencies' component={Cryptocurrencies} />
          <Route path='/coin/:Id' component={CryptoDetail} />
          <Route path='/news' component={NewsPage} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;