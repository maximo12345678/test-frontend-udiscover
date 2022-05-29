import './styles/App.css';
import {BrowserRouter as Routes, Switch, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>

        <NavBar></NavBar>

        <Switch>

          <Route exact path="/" >
            <Home></Home>
          </Route>

        </Switch>

      </Routes>
    </div>
  );
}

export default App;

