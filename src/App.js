import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Employee from "./pages/employee"
import Wrapper from "./components/Wrapper";






//add the components with in this class app 
function App() {
  return (
      <Router>
        <div> 
          <Wrapper>
             <Route exact path="/" component={Employee}  />
          </Wrapper>
        </div>
      </Router>
  );
}

export default App;
