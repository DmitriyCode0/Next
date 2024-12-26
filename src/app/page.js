import React from "react";
import ArticleCard from "./components/ArticleCard";

export default function Home() {
  return (
    <div>
      <h1 className="text-black text-5xl font-bold text-center">
        Welcome to English Learning Hub!
      </h1>
      <p className="text-darkGray text-lg text-center mt-4">
        Your go-to resource for improving your English skills through articles,
        resources, and practical exercises.
      </p>

      <div className="text-center mt-6">
        <a
          href="#"
          className="bg-highlightBlue text-white py-3 px-6 rounded-full shadow hover:opacity-90 transition"
        >
          Start Learning
        </a>
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-customBlue text-center mb-6">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCard
            title="Understanding Present Continuous"
            description="Learn the basics of Present Continuous tense and how to use it."
            link="/articles/present-continuous"
          />
          <ArticleCard
            title="Advantages and Disadvantages Essays"
            description="Master IELTS Writing Task 2 essays with this comprehensive guide."
            link="/articles/advantages-disadvantages"
          />
          <ArticleCard
            title="Interactive Grammar Table"
            description="Explore an interactive way to learn grammar rules."
            link="/articles/interactive-table"
          />
        </div>
      </section>
    </div>
  );
}
