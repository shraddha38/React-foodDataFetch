import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Navbar  from './Navbar';
import Footer from './Footer';
import Consume from './Consume';
import Seafood from './Seafood';
import Homepage from './Homepage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

/*
<TempNav/>
      <Navbar/>
      <Seafood/>
      <Consume/>
*/
export default App;
