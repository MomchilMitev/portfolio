import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import PortfolioIndexPage from '../pages/PortfolioIndexPage/PortfolioIndexPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/portfolio" component={PortfolioIndexPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
