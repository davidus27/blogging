import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/create"><Create /></Route>
            <Route exact path="/blogs/:id"><BlogDetails /></Route>
            <Route exact path="/404"><NotFound/></Route>
            <Route path="*"><Redirect to="/404"/></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
