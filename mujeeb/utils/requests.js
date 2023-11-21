const API_KEY = "72acbab2ea7124b2ae3bad212540e2cf";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
    const res = await fetch(`${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`);
    const data = await res.json();
    return data.results
}
export const getMovies = async (query) => {
    const res = await fetch(`${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}
export const getMoviesDetails = async (id) => {
    const res = await fetch(`${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`);
    const data = await res.json();
    return data;
}
export const getSimilarMovies = async (id) => {
    const res = await fetch(`${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}