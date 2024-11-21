import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <>

      <section className="w-full max-w-screen-xl mx-auto mt-14">

        {/* Hero Section */}
        <section className="bg-gray-800 py-20">
          <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Discover Your Next Favorite Movie
              </h2>
              <p className="text-gray-400 mb-6">
                Explore the latest blockbusters, timeless classics, and trending
                shows all in one place.
              </p>
             <NavLink to='/movie'>
             <button  className="bg-yellow-400 text-black px-6 py-3 rounded-md hover:bg-yellow-500">
                Browse Now
              </button>
             </NavLink>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/862/449/162/jack-reacher-star-wars-interstellar-movie-john-wick-wallpaper-preview.jpg"
                alt="Movie Night"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
        
        {/* Trending Categories */}
        <section className="bg-gray-800 py-12 text-white mt-10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 ">Trending Categories</h2>
            <div className="flex flex-wrap gap-6">
              {/* Example Category */}
              <div className=" flex items-center bg-gray-700 px-6 py-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition duration-300">
                <span className="text-xl font-bold">🎭 Drama</span>
              </div>
              <div className="flex items-center bg-gray-700 px-6 py-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition duration-300">
                <span className="text-xl font-bold">💥 Action</span>
              </div>
              <div className="flex items-center bg-gray-700 px-6 py-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition duration-300">
                <span className="text-xl font-bold">😂 Comedy</span>
              </div>
              <div className="flex items-center bg-gray-700 px-6 py-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition duration-300">
                <span className="text-xl font-bold">🌌 Sci-Fi</span>
              </div>
            </div>
          </div>
        </section>
      </section>
      </>
    </>
  );
};
export default Home;
