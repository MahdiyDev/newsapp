import { token, url } from "assets";

async function getNews({ search, limit = "5", date = "2022-04-23", source }) {
  try {
    const response = await fetch(
      `${url}/everything?q=${search}&from=${date}&sortBy=publishedAt&pageSize=${limit}&totalResults&apiKey=${token}` +
        (source ? `&sources=${source}` : "")
    );

    const news = await response.json();

    if (!news || !news.articles || !news.articles.length) {
      news["status"] = "error";
      return news;
    }
    return news;
  } catch (_) {
    return { status: "error" };
  }
}

async function getSources() {
  try {
    const response = await fetch(`${url}/sources?apiKey=${token}`);

    const sources = await response.json();

    if (!sources || !sources.sources || !sources.sources.length) {
      sources["status"] = "error";
      return sources;
    }
    return sources;
  } catch (_) {
    return { status: "error" };
  }
}

export { getNews, getSources };
