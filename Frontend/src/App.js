import React from 'react'
import Error from './components/Error';
import HomeScreen from './screen/HomeScreen';
import OutletScreen from './screen/OutletScreen';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './util/Footer';

const App = () => {
  return (
    <>
      <Navigation />
      <div className="wrapper">
        <Routes>
          <Route path='/' element={<HomeScreen />} errorElement={<Error />} />
          <Route path='/outlet' element={<OutletScreen />} errorElement={<Error />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App