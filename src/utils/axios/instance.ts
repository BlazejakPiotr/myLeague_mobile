import axios from 'axios';
import {config} from '../../config';
import store from '../../store/store';
//@ts-ignore
import {REACT_APP_API_KEY} from '@env';

export const instanceData = axios.create({
  baseURL: config.dataDragonUrl,
});

export const instanceSummoners = axios.create({
  baseURL: config.riotUrl + store.getState().data.region?.routing,
  params: {
    api_key: REACT_APP_API_KEY,
  },
});
