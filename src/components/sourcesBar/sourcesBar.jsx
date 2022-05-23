import { useSearch } from "hooks";
import "./sourcesBar.scss";

function SourcesBar() {
  const { sources, setSourcesActive, setSource } = useSearch();

  return (
    <div
      className="sources"
      onClick={(e) =>
        e.target.classList[0] === "sources" && setSourcesActive(false)
      }
    >
      <ul className="sources-bar">
        {sources && sources.sources ? (
          sources.sources.map((source, index) => (
            <li
              key={index}
              className="sources-bar-source"
              onClick={() => setSource(source.name)}
            >
              {source.name}
            </li>
          ))
        ) : (
          <li className="sources-bar-source">
            <span>No sources</span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default SourcesBar;
