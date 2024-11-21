import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Movie = () => {
  const [searchTerm, setSearchTerm] = useState("");  // Track search input
  const [movieData, setMovieData] = useState([]); // Store the movie data
  const [loading, setLoading] = useState(false);  // Loading state
  const [hasMovies, setHasMovies] = useState(false); // Flag for no movies

  const fetchMovies = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`https://omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${query}&page=1`);
      const data = await response.json();
      if (data.Response === "True") {
        setMovieData(data.Search);
        setHasMovies(true);
      } else {
        setMovieData([]);
        setHasMovies(false);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setHasMovies(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    // Fetch movies when the component loads
    fetchMovies("avatar"); // Default search term
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term as the user types
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchMovies(searchTerm); // Fetch movies based on the search term
  };

  return (
    <>
      {/* Search Form */}
      <form onSubmit={handleSearchSubmit} className="max-w-md mx-auto mt-28">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            value={searchTerm} // Bind the input value to the state
            onChange={handleSearchChange} // Update state on input change
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            placeholder="Search Movies..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Search
          </button>
        </div>
      </form>

      {/* Movie List */}
      <div className="mt-4">
        {loading ? (
          <div className="text-center text-white mt-10">
            <p>Loading...</p>
          </div>
        ) : hasMovies ? (
          <ul className="w-full max-w-screen-xl mx-auto grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 bg-[#0d1829] p-3">
            {movieData.map((curMovie) => (
              <MovieCard key={curMovie.imdbID} movieData={curMovie} />
            ))}
          </ul>
        ) : (
          <div className="text-center  mt-10">
            <h2 className="text-2xl font-bold">No Movies Found</h2>
            <p>Try searching for a different keyword.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Movie;
