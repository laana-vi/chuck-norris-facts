import { useState } from "react";
import Loading from "./components/Loading";
import Search from "./components/Search";

const App = () => {
  const [searchResult, setSearchResult] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <div className="App">
      <Search setSearchResult={setSearchResult} setLoading={setLoading} />
      {loading ? <Loading /> : console.log(searchResult)}
    </div>
  );
}

export default App;
