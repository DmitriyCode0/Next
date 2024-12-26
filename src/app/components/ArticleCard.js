import React from "react";

const ArticleCard = ({ title, description, link }) => {
  return (
    <a
      href={link}
      className="block bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2"
    >
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <p className="text-gray-600 mt-3">{description}</p>
    </a>
  );
};

export default ArticleCard;
