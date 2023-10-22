export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '40200874-547048583c7345e80dbf7bd64';
export const options = {
    params: {
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
        page: 1,
        q: '',
    },
}