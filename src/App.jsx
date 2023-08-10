import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PostByCategoryPage from './Pages/PostByCategoryPage';
import DetailsPage from './Pages/DetailsPage';

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/byCategory/:categoryID' element={<PostByCategoryPage/>}/>
        <Route path='/postDetails/:detailsID' element={<DetailsPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
};

export default App;