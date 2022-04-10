import './App.scss';
import '../node_modules/@department-of-veterans-affairs/formation/dist/formation.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navmenu from './components/common/Navmenu';
import Home from './components/pages/Home';
import About from './components/pages/About';
import FormExample from './components/pages/FormExample';
import '@department-of-veterans-affairs/component-library/dist/main.css';
import {
  applyPolyfills,
  defineCustomElements,
} from '@department-of-veterans-affairs/component-library';

function App() {
  applyPolyfills().then(() => {
    defineCustomElements();
  });
  return (
    <Router>
      <div>
        <Navmenu />

        <div className="vads-l-col--9 vads-u-padding--1 vads-u-margin-x--auto vads-u-margin-y--1">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/form-example">
              <FormExample />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
