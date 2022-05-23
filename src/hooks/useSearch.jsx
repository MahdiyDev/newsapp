const { SearchContext } = require("contexts");
const { useContext } = require("react");

function useSearch() {
  const {
    search,
    setSearch,
    loading,
    setLoading,
    news,
    setLimit,
    limit,
    sources,
    sourcesActive,
    setSourcesActive,
    source,
    setSource,
  } = useContext(SearchContext);

  return {
    search,
    setSearch,
    loading,
    setLoading,
    news,
    setLimit,
    limit,
    sources,
    sourcesActive,
    setSourcesActive,
    source,
    setSource,
  };
}

export default useSearch;
