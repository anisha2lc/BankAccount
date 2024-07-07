import axios from "axios";
import React, { useEffect, useState } from "react";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(6);
  const fetchNewsData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=bank&from=2024-06-06&sortBy=publishedAt&apiKey=${
          import.meta.env.VITE_API_URL
        }`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setNews(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNewsData();
  }, []);

  const showMoreArticles = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 3);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.slice(0, visibleArticles).map((article, index) => (
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            key={index}
          >
            <img
              className="w-full h-48 object-cover"
              src={article.urlToImage}
              alt={article.title}
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-700 mb-4">
                {article.description}
              </p>
              <a
                href={article.url}
                className="text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
      {visibleArticles < news.length && (
        <div className="mt-4 text-center">
          <button
            onClick={showMoreArticles}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default LatestNews;
