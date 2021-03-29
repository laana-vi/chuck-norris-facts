import { useEffect, useState } from "react";
import Jokes from "./components/Jokes";
import Loading from "./components/Loading";
import Search from "./components/Search";
import PreviousSearches from "./PreviousSearches";
import { getPreviousSearches } from "./service";

const App = () => {
  const [searchInput, setSearchInput] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [previousSearches, setPreviousSearches] = useState([])

  useEffect(() => {
    setPreviousSearches(getPreviousSearches("history"))
  }, [setPreviousSearches])


  return (
    <div className="App">
      <Search setSearchResult={setSearchResult} setLoading={setLoading} setPreviousSearches={setPreviousSearches} searchInput={searchInput} setSearchInput={setSearchInput} />
      <PreviousSearches previousSearches={previousSearches} setSearchInput={setSearchInput} setPreviousSearches={setPreviousSearches} />
      {loading ? <Loading /> : <Jokes searchResult={searchResult} />}
    </div>
  );
}

export default App;
