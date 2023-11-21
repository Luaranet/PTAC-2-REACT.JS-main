import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ToDo from './Todo/ToDo';
import Detalhe from './Detalhe/detalhe';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>   
        <Route path='/' element={<ToDo />}></Route>
        <Route path='/detalhe/:id' element={<Detalhe  />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
