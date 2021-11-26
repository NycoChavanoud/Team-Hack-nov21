import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import KaraokeList from "./components/KaraokeList";
import PlayList from "./components/PlayList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/karaoke-list" component={KaraokeList} />
        <Route exact path="/playlist" component={PlayList} />
      </Switch>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
