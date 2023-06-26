import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Personaje from '../pages/Personaje';
import Details from '../pages/Details';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personaje" element={<Personaje />} />
      <Route path="/personaje/:name" element={<Details />} />
      <Route path='*' element={<h1>Not Found 404 - Página no encontrada</h1>} />
    </Routes>
  );
};

export default AppRoutes;
