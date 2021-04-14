import axios from 'axios';

const BaseUrl = 'https://rickandmortyapi.com/api/episode';

export const getAllEpisodes = (page: number, search: string) => {
    return axios.get(`${BaseUrl}?page=${page}&name=${search}`)
    .then(res => {
      return res.data;
    })
};