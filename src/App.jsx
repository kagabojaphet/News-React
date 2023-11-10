import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Weclome from './pages/Welcome';
import About from './pages/About';


function Index() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<Weclome/>}></Route>
    <Route path='/about' element={<About/>}></Route>
  </Routes>
</Router>
  );
}

export default Index;
