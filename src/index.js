import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './layout.css';
import 'bootstrap5/src/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './ecommerce/Navbar';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import LoginPage from './Pages/Login/LoginPage';
import reportWebVitals from './reportWebVitals';
import { ShopcontextProvider } from './Context/shop-context';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <React.StrictMode>
      <ShopcontextProvider>
        <Router>
          <Navbar isLoggedIn={loggedIn} />
          <Routes>
            <Route path='/Shop' element={<Shop />} />
            {loggedIn ? (
              <Route path='/cart' element={<Cart />} />
            ) : (
              <Route path='/cart' element={<LoginPage setLoggedIn={setLoggedIn} />} />
            )}
            <Route path='/' element={<LoginPage setLoggedIn={setLoggedIn} />} />
          </Routes>
        </Router>
      </ShopcontextProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
