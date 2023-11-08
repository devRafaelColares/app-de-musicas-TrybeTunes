import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Search from './components/search/Search';
import Album from './components/album/Album';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
      <Route path="/album/:id" element={ <Album /> } />
    </Routes>
  );
}

export default App;
