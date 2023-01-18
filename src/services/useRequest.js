import useSwr from 'swr';

// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = '92be59e0090ddfe5570b8756c403476a';
const baseUrl = 'https://api.themoviedb.org/3';

export const useRequest = (path, page, query) => {
  if (!path) {
    throw new Error('Path is required');
  }

  const url = query
    ? `${baseUrl}${path}?api_key=${apiKey}&query=${query}&page=${page}&limit=10`
    : page
    ? `${baseUrl}${path}?api_key=${apiKey}&page=${page}&limit=10`
    : `${baseUrl}${path}?api_key=${apiKey}`;

  // const url = query
  //   ? baseUrl + path + '?api_key=' + apiKey + '&query=' + query
  //   : baseUrl + path + '?api_key=' + apiKey;
  const { data, error } = useSwr(url);

  return { data, error };
};
