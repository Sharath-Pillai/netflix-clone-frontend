import { API_KEY, base_Url } from './Constants/constants';

export const imageUrl = 'https://image.tmdb.org/t/p/original';

// These point to your new Vercel Backend!
export const trending = `${base_Url}/api/movies/trending`;

// (Still using TMDB for originals because the backend doesn't have a TV route yet)
export const originals = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;

export const action = `${base_Url}/api/movies/category/28`;
export const comedy = `${base_Url}/api/movies/category/35`;
export const horror = `${base_Url}/api/movies/category/27`;
export const romance = `${base_Url}/api/movies/category/10749`;
export const documentaries = `${base_Url}/api/movies/category/99`;
