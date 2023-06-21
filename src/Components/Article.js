import React from "react";
import { Link } from "react-router-dom";

const Article = ({ article }) => {
  return (
    <article className="card">
      <Link className="title" to={`/articles/${article.slug}`}>
        {article.title}
      </Link>
      <cite>- {article.author}</cite>
    </article>
  );
};

export default Article;
