const { createContext, useEffect, useState } = require("react");
const { getNews, getSources } = require("services");

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [search, setSearch] = useState("tesla");
  const [loading, setLoading] = useState(false);
  const [sourcesActive, setSourcesActive] = useState(false);
  const [news, setNews] = useState([]);
  const [limit, setLimit] = useState(5);
  const [sources, setSources] = useState("");
  const [source, setSource] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const news = await getNews({ search, limit: limit, source });

      if (news) {
        setNews(news);
        setLoading(false);
      } else if (news.status === "error") {
        setNews([]);
        setLoading(false);
      }
    })();
  }, [limit, search, source]);

  useEffect(() => {
    (async () => {
      const source = await getSources();
      if (source && source.status === "ok") {
        setSources(source);
      } else if (source.status === "error") {
        setSources([]);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        loading,
        setLoading,
        news,
        setLimit,
        limit,
        sources,
        setSourcesActive,
        sourcesActive,
        source,
        setSource,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
