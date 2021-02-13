import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import PortfolioIndexPage from '../pages/PortfolioIndexPage/PortfolioIndexPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <Router basename={process.env.REACT_APP_BASE_URL}>
        <div className="container">
          <Navigation />
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/projects" component={PortfolioIndexPage} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
