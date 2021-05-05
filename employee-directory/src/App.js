import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/search" component={Search} />
          </Wrapper>
          <Footer />
        </div>
      </Router>

  );
}

export default App;
