import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ToDo from './Todo/ToDo';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/todo' element={<ToDo />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
