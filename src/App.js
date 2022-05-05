import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage'
import StudentSignup from './components/StudentSignup';
import TmSignup from './components/TmSignup'
import Login from './components/Login'
import StudentDashboard from './components/StudentDashboard'
import TmDashboard from './components/TmDashboard'

// import {SPrivateRoute, TPrivateRoute} from './private/PrivateRoute'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/studentsignup" component={StudentSignup}/>
          <Route exact path="/tm/signup" component={TmSignup}/>
          <Route exact path="/login" component={Login}/>

          <Route exact path="/student/dashboard" component={StudentDashboard}/>
          <Route exact path="/tm/dashboard" component={TmDashboard}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
