import React, { useState } from 'react'
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from './components/Main'

function App() {

  return (
    <div className='app row'>
      <Main/>
    </div>
  );
}

export default App;
