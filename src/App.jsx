import './App.css';
import Main from './components/Main';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './components/Profile';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          
        </Switch>
    </Router>

  );
}

export default App;
