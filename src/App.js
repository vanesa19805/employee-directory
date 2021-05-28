import React from "react";
 
import './App.css';
import Employee from "./pages/employee"
import Wrapper from "./components/Wrapper";






//add the components with in this class app 
function App() {
  return (
      
        <div> 
          <Wrapper>
             <Employee   />
          </Wrapper>
        </div>
    
  );
}

export default App;
