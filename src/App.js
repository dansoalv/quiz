import React from 'react';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import QuizComponent from "./Components/Quiz.component";

function App() {
  return (
      <React.Fragment>
          <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">Quiz</a>
          </nav>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={QuizComponent}/>
            </Switch>
          </Router>
        </Provider>
      </React.Fragment>
  );
}

export default App;
