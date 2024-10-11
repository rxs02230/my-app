import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
        'x-rapidapi-ua': 'x-rapidapi-ua',
        "accept": "application/json",
    }
};

export const fetchFromAPI = async () => {
    const { data } = await axios.get(`${BASE_URL}?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50`, options);

    return data;
}
    