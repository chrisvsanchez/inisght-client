import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import UploadPosts from "./components/UploadPosts";
import Posts from "./containers/Posts";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/upload" component={UploadPosts} />
            <Route path="/posts" component={Posts} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
