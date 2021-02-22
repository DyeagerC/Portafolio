import './App.css';
// import ScrollReveal from 'scrollreveal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './components/pages/index/index';
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Route path="/" component={Index}></Route>
      </Router>
      
    </div>
  );
}

export default App;
