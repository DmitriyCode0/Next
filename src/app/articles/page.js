"use client";

import { useState } from "react";
import ArticleCard from "../components/ArticleCard";

const categories = [
  { id: "a1", label: "A1" },
  { id: "a2", label: "A2" },
  { id: "b1", label: "B1" },
  { id: "b2", label: "B2" },
  { id: "c1", label: "C1" },
  { id: "other", label: "Other" },
];

const articlesData = {
  a1: [
    {
      title: "Basic Greetings",
      description: "Learn how to greet people.",
      link: "#",
    },
    {
      title: "Introducing Yourself",
      description: "Basic introductions.",
      link: "#",
    },
  ],
  a2: [
    {
      title: "Daily Routines",
      description: "Learn how to describe routines.",
      link: "#",
    },
    {
      title: "Shopping Vocabulary",
      description: "Common words for shopping.",
      link: "#",
    },
  ],
  b1: [
    {
      title: "Advantages and Disadvantages Essays",
      description: "Learn how to write this type of IELTS essay.",
      link: "#",
    },
    {
      title: "Common Phrasal Verbs",
      description: "Expand your vocabulary.",
      link: "#",
    },
  ],
  b2: [
    {
      title: "Writing Formal Emails",
      description: "Tips for writing formal correspondence.",
      link: "#",
    },
    {
      title: "Expressing Opinions",
      description: "How to share opinions effectively.",
      link: "#",
    },
  ],
  c1: [
    {
      title: "Advanced Grammar Structures",
      description: "Master complex sentence structures.",
      link: "#",
    },
    {
      title: "Debating Techniques",
      description: "How to argue persuasively.",
      link: "#",
    },
  ],
  other: [
    {
      title: "Learning Resources",
      description: "Additional tools for learning.",
      link: "#",
    },
    {
      title: "Study Tips",
      description: "How to improve your study habits.",
      link: "#",
    },
  ],
};

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("a1");

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-100 p-4">
        <nav className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`w-full text-left py-2 px-4 rounded ${
                activeCategory === category.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Articles Section */}
      <main className="w-3/4 p-8">
        <h2 className="text-2xl font-bold mb-4">
          {categories.find((cat) => cat.id === activeCategory)?.label} Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesData[activeCategory]?.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description}
              link={article.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
