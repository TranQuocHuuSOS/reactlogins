import './App.css';
import './Add.css';
import './Register.css';
// import './Detail.css';
import React from 'react';
// import { Button } from 'react-bootstrap';
import Header from './component/Layout/Header';
import Footer from './component/Layout/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Product_list from './Product_list';
import Home from './Pages/Home';
import HomeUser from './Pages/HomeUser';
import About from './Pages/About';
import Detail from './Pages/Detail';
import Contact from './Pages/Contact';
// import PageNotFound from './Pages/PageNotFound';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AddProduct from './Pages/Detail';
import EditProduct from './Pages/EditProduct';
import Add from './Pages/Add';
import Basket from './Pages/Basket';
import User_info from './Pages/User_info';

function App() {
  return (
    <div className="App">
    
      <Router>
        <Header />
        <Routes>
          
          <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/Detail/:id" element={<Detail/>} />
          
          <Route exact path="/HomeUser" element={<HomeUser/>} />
          <Route exact path="/About" element={<About/>} />
          <Route exact path="/Contact" element={<Contact/>} />
          <Route path="*" element={<Register/>} />
          <Route exact path="/Login" element={<Login />} />
          {/* <Route exact path="/Register" element={<Register />} /> */}
          <Route exact path="/AddProduct" element={<AddProduct />} />
          <Route exact path="/Add" element={<Add />}/>
          <Route exact path="/EditProduct/:id" element={<EditProduct />} />
          <Route exact path="/Basket" element={<Basket />} />
          <Route exact path="/User_info/:id" element={<User_info />} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
