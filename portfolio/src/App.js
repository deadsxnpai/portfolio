import './App.scss';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/';

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Layout />} />
      </Routes>
    </>
  );
  
}

export default App;
