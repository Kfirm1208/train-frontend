import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './components/page1'
import Page2 from './components/page2'
import Page3 from './components/page3'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Page1 />} />
          <Route path='/page2'element={<Page2 />} />
          <Route path='/page3'element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );



}
export default App;
