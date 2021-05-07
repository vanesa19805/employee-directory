import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import SearchBar from './components/searchBar';
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import About from "./pages/About";
// import Search from "./pages/Search";



//add the components with in this class app 
function App() {
  return (
      <Router>
        <div>
          <Navbar />
          <SearchBar/>
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/search" component={Search} /> */}
          </Wrapper>
          <Footer />
        </div>
      </Router>

  );
}

export default App;
