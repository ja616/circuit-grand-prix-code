
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="mk-title text-4xl md:text-5xl font-bold mb-6">404</h1>
          <p className="text-xl md:text-2xl font-racing text-gray-700 mb-6">
            Oops! You went off the track!
          </p>
          <div className="text-6xl mb-6">🏎️💨</div>
          <p className="text-gray-600 mb-8">
            The page you're looking for has spun out or doesn't exist. Let's get you back to the race.
          </p>
          <Link to="/" className="mk-btn">
            Return to Home Track
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
