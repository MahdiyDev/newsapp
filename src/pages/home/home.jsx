import { useSearch } from "hooks";
import "./home.scss";

function Home() {
  const { news, loading, setLimit, limit } = useSearch();

  const moreBtnClick = () => {
    setLimit((prev) => prev + 5);
  };

  return (
    <>
      <div className="article-list">
        {!loading && news && news.status === "ok" ? (
          news.articles.map((article, index) => (
            <div key={index} className="article">
              <img
                className="article-img"
                src={article.urlToImage}
                alt={article.title}
              />
              <div className="article-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a
                  className="article-link"
                  target="_blank"
                  href={article.url}
                  rel="noreferrer"
                >
                  Read more
                </a>
              </div>
            </div>
          ))
        ) : news.status === "error" ? (
          <div className="article">
            <div className="loading">Not Found</div>
          </div>
        ) : (
          <div className="article">
            <div className="loading">Loading...</div>
          </div>
        )}
      </div>

      {limit >= 40 || news.status === "error" ? null : (
        <button onClick={moreBtnClick} className="more-btn header-form-btn">
          Load more
        </button>
      )}
    </>
  );
}

export default Home;
