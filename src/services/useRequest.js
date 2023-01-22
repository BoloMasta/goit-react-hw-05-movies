import useSwr from 'swr';

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';

export const useRequest = (path, page, query) => {
  if (!path) {
    throw new Error('Path is required');
  }

  const url = query
    ? `${baseUrl}${path}?api_key=${apiKey}&query=${query}&page=${page}`
    : page
    ? `${baseUrl}${path}?api_key=${apiKey}&page=${page}`
    : `${baseUrl}${path}?api_key=${apiKey}`;

  const { data, error } = useSwr(url);

  return { data, error };
};
