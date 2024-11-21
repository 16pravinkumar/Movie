export const getMoviesData = async () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  try {
    const response = await fetch(
      `https://omdbapi.com/?apikey=${API_KEY}&s=`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
