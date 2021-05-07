import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import SearchBar from './components/searchBar';
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";





//add the components with in this class app 
function App() {
  return (
      <Router>
        <div>
          <Navbar />
          <SearchBar/>
          <Wrapper>

          </Wrapper>
          <Footer />
        </div>
      </Router>

  );
}

export default App;
