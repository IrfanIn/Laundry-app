import React from 'react'
import Error from './components/Error';
import HomeScreen from './screen/HomeScreen';
import OutletScreen from './screen/OutletScreen';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} errorElement={<Error />} />
      <Route path='/outlet' element={<OutletScreen />} errorElement={<Error />} />
    </Routes>
  )
}

export default App