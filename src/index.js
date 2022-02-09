import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "primereact/resources/themes/saga-green/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import './index.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Detail from './pages/Detail';
import Quote from './pages/Quotes';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/shop"
        element={<Shop />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="/detail/:id"
        element={<Detail />}>
      </Route>
      <Route
        path="/quote/:id"
        element={<Quote />}>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
