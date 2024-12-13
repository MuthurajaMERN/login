import React from 'react';
import Header from '../components/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Product from './Product';


function Home() {
  return (
    <div>
       <Header/>
       <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path='/product/:id' element={<Product/>} />      
        </Routes>
    </div>
  );
}

export default Home;
