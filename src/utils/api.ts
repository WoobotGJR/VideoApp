import axios from 'axios';
import { REACT_APP_RAPID_API_KEY, BASE_URL } from './constants';

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const api = async (endpoint: string) => {
  const { data } = await axios.get(`${BASE_URL}/${endpoint}`, options);
  return data;
};
