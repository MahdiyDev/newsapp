import { SourcesBar } from "components";
import { useSearch } from "hooks";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  const { setSearch, setLoading, sourcesActive, setSourcesActive } =
    useSearch();
  const searchInput = useRef();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    const search = searchInput.current.value;
    if (search.length) {
      setLoading(true);
      setSearch(search);
    } else {
      setSearch("tesla");
    }
  };

  return (
    <header className="header">
      <Link to="/" className="header-link">
        News.uz
      </Link>
      <form className="header-form" onSubmit={onSearchSubmit}>
        <input className="header-form-input" ref={searchInput} type="search" />
        <button className="header-form-btn" type="submit">
          search
        </button>
      </form>
      <button
        className="header-form-btn"
        onClick={() => {
          setSourcesActive(true);
        }}
      >
        sources
      </button>
      {sourcesActive && <SourcesBar />}
    </header>
  );
}

export default Header;
