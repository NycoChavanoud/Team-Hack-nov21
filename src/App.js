import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import BlindTest from "./components/BlindTest";
import Theme1 from "./components/Theme1";
import Theme2 from "./components/Theme2";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blind-test" component={BlindTest} />
        <Route
          exact
          path="/blind-test/themes/hit-du-moment"
          component={Theme1}
        />
        <Route exact path="/blind-test/themes/2000" component={Theme2} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
