import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Search from "./components/Search";
import { getPreviousSearches } from "./service";

const App = () => {
  const [searchResult, setSearchResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [previousSearches, setPreviousSearches] = useState([])

  useEffect(() => {
    setPreviousSearches(getPreviousSearches("history"))
  }, [setPreviousSearches])


  return (
    <div className="App">
      <Search setSearchResult={setSearchResult} setLoading={setLoading} setPreviousSearches={setPreviousSearches} />
      {loading ? <Loading /> : console.log(searchResult)}
      {console.log(previousSearches)}
    </div>
  );
}

export default App;
