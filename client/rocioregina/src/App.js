import { Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage.js";
import Portfolio from "./views/Portfolio/Portfolio.js";
import About from "./views/About/About.js";
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/about" component={About}/>
      </Switch>
    </>
  );
}

export default App;
