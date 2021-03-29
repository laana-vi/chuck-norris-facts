import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailedJoke from "./components/DetailedJoke";
import Home from "./Home";

const App = () => {
  const [searchResult, setSearchResult] = useState([])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
          <Home searchResult={searchResult} setSearchResult={setSearchResult}/>
          </Route>
          <Route exact path="/details/:id">
            <DetailedJoke searchResult={searchResult} />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}

export default App
