import axios from 'axios';

export function getImage(imgInfo) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '49113920-f9af0cc3a936c3f1f6e808981',
        q: imgInfo,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      console.log(response);
      return response.data.hits;
    })
    .catch(error => {
      return [];
    });
}