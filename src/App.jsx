import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailedJoke from "./components/DetailedJoke";
import Home from "./components/Home";
import { GlobalStyle } from "./components/styled/GlobalStyle"

const App = () => {
  const [searchResult, setSearchResult] = useState([])

  return (
    <>
      <GlobalStyle />
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Home searchResult={searchResult} setSearchResult={setSearchResult} />
            </Route>
            <Route exact path="/details/:id">
              <DetailedJoke searchResult={searchResult} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
