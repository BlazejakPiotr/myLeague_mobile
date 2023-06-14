import axios from 'axios';
import {config} from '../../config';

export const instanceData = axios.create({
  baseURL: config.dataDragonUrl,
});

export default instanceData;
