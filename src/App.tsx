import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Search from './components/search/Search';
import Album from './components/album/Album';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/" element={ <Layout /> }>
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
      </Route>

    </Routes>
  );
}

export default App;
