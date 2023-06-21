import { useParams } from "react-router-dom";

const SingleArticle = ({ data }) => {
  const { slug } = useParams();
  let currentArticle = {};

  data.filter((article) => {
    if (article.slug === slug) {
      return (currentArticle = article);
    }
    return;
  });

  return (
    <main className="main">
      <h1>{currentArticle.title}</h1>
      <div className="underline"></div>

      <p className="author">- {currentArticle.author}</p>
    </main>
  );
};

export default SingleArticle;
