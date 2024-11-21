import { NavLink, useLoaderData } from "react-router-dom";

const MovieDetail = () => {
  const data = useLoaderData();
  console.log(data);

  const {
    Poster,
    Actors,
    Title,
    Year,
    Runtime,
    Plot,
    Writer,
    Director,
    Rated,
    Genre,
    Released,
    imdbRating,
  } = data;

  const time = Runtime.replace("min", "");
  const hr = Math.floor(time / 60);
  const min = time % 60;

  return (
    <>
      <>
        <div className="bg-gray-900 text-white min-h-screen">
          {/* Header */}
          <header className="bg-gray-800 py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
              <h1 className="text-3xl font-bold text-yellow-400">
                🎬 MovieVerse
              </h1>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500">
                Back to Home
              </button>
            </div>
          </header>

          {/* Movie Details Section */}
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Movie Poster */}
              <div className="flex-shrink-0">
                <img
                  src={Poster || "https://via.placeholder.com/300x450"}
                  alt={Title}
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Movie Info */}
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-4">{Title}</h2>
                <p className="text-gray-400 text-lg mb-6">
                  {Year} | {Rated} | {`${hr}hr ${min}min`}
                </p>

                <p className="text-gray-300 mb-6">
                  {Plot || "No plot information available."}
                </p>

                <div className="flex flex-wrap gap-6 mb-6">
                  <div>
                    <span className="block text-gray-400 text-sm">Genre</span>
                    <span className="text-yellow-400 font-bold">
                      {Genre || "N/A"}
                    </span>
                  </div>
                  <div>
                    <span className="block text-gray-400 text-sm">
                      Director
                    </span>
                    <span className="text-yellow-400 font-bold">
                      {Director || "N/A"}
                    </span>
                  </div>
                  <div>
                    <span className="block text-gray-400 text-sm">
                      Released
                    </span>
                    <span className="text-yellow-400 font-bold">
                      {Released || "N/A"}
                    </span>
                  </div>
                  <div>
                    <span className="block text-gray-400 text-sm">
                      IMDB Rating
                    </span>
                    <span className="text-yellow-400 font-bold">
                      {imdbRating || "N/A"}
                    </span>
                  </div>
                </div>

                <NavLink to='/movie'>
                  <button className="bg-yellow-400 text-black px-6 py-3 rounded-md hover:bg-yellow-500">
                    Back To Movie
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          {/* Cast Section */}
          <div className="bg-gray-800 py-12">
            <div className="container mx-auto px-6">
              <h3 className="text-3xl font-bold mb-8">Top Cast</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Actors
                  ? Actors.split(", ").map((actor, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
                          <span className="text-lg font-bold text-white">
                            {actor[0]}
                          </span>
                        </div>
                        <h4 className="mt-4 font-bold">{actor}</h4>
                        <p className="text-sm text-gray-400">Actor</p>
                      </div>
                    ))
                  : "No actor information available."}
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
export default MovieDetail;
