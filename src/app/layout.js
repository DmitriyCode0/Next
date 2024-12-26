import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "English Learning Hub",
  description: "Improve your English with our resources and articles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-10 bg-white shadow-md">
          <div className="container mx-auto flex justify-between items-center p-4">
            <Link
              href="/"
              className="text-black text-xl font-bold hover:underline"
            >
              English Learning Hub
            </Link>
            <nav className="flex space-x-4">
              {/* Home Link */}
              <Link href="/" className="text-darkGray hover:text-black">
                Home
              </Link>
              {/* Articles Link */}
              <Link href="/articles" className="text-darkGray hover:text-black">
                Articles
              </Link>
              {/* Telegram Link */}
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-darkGray hover:text-black flex items-center space-x-2"
              >
                <span>Telegram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 inline-block"
                >
                  <path d="M11.944 13.138 9.68 15.89c-.197.244-.452.366-.764.366h-.006c-.236 0-.447-.072-.632-.216-.185-.145-.278-.342-.278-.592v-3.275l.028-3.2-.567 3.356L5.7 15.246l-1.485-.582-1.467-.573c-.22-.095-.4-.232-.538-.409a.918.918 0 0 1-.172-.576c0-.205.066-.4.197-.585a1.19 1.19 0 0 1 .444-.382l18.15-8.072a1.579 1.579 0 0 1 .666-.15c.279 0 .502.08.669.239.167.159.25.372.25.639 0 .194-.048.371-.145.53a1.289 1.289 0 0 1-.405.438l-6.295 5.18-3.842 3.145ZM8.8 12.078c.197 0 .367.071.511.215.144.143.217.316.217.518v2.293l1.1-1.358 3.268-4.036c.09-.1.21-.15.36-.15.12 0 .222.037.307.111a.49.49 0 0 1 .136.353.586.586 0 0 1-.175.364l-4.407 4.418c-.138.138-.306.207-.503.207H8.8Z" />
                </svg>
              </a>
              {/* Dark Mode Toggle */}
            </nav>
          </div>
        </header>

        <main className="flex-grow max-w-7xl mx-auto p-8">{children}</main>

        <footer className="bg-black text-white py-6 text-center text-sm">
          &copy; 2024 English Learning Hub. <br />
          <Link href="/privacy" className="text-highlightBlue hover:underline">
            Privacy Policy
          </Link>
        </footer>
      </body>
    </html>
  );
}
