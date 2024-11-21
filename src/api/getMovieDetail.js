export const getMovieDetail = async ({params}) => {
  console.log(params)
  try {
    const response = await fetch(
      `https://omdbapi.com/?i=${params.movieId}&apikey=${import.meta.env.VITE_API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
