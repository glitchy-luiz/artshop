import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Loginpag from './components/Loginpag';
import Cadastropag from './components/Cadastropag';
import { Redirect, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/about" component={About} />
        <Route exact path="/loginpag" component={Loginpag} />
        <Route exact path="/cadastropag" component={Cadastropag} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
