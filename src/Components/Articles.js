import React from "react";
import Article from "./Article";

const Articles = ({ data }) => {
  return (
    <main className="main">
      <h1>Articles</h1>
      <div className="underline"></div>
      <section className="all-articles grid">
        {data.map((article) => {
          return <Article article={article} />;
        })}
      </section>
    </main>
  );
};

export default Articles;
