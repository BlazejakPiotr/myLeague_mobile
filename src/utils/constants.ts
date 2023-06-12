import {Dimensions} from 'react-native';
import {IRegion, IRegionDetails} from '../models/locales';

export const {height: DEVICE_HEIGHT, width: DEVICE_WIDTH} =
  Dimensions.get('screen');

export const PLATFORMS: IRegion[] = ['BR1', 'EUN1', 'EUW1', 'JP1', 'KR'];

export const LOCALES: IRegionDetails[] = [
  {
    id: 'BR1',
    name: 'Brazil',
    routing: 'br1.api.riotgames.com',
    continent: 'AMERICAS',
  },
  {
    id: 'EUN1',
    name: 'Europe Nordic & East',
    routing: 'eune1.api.riotgames.com',
    continent: 'EUROPE',
  },
  {
    id: 'EUW1',
    name: 'Europe West',
    routing: 'eune1.api.riotgames.com',
    continent: 'EUROPE',
  },
  {
    id: 'JP1',
    name: 'Japan',
    routing: 'jp1.api.riotgames.com',
    continent: 'ASIA',
  },
  {
    id: 'KR',
    name: 'Korea',
    routing: 'kr.api.riotgames.com',
    continent: 'ASIA',
  },
];

export const PLATFORM_ROUTING = {
  // LA1:	'la1.api.riotgames.com'
  // LA2:	la2.api.riotgames.com
  // NA1	:na1.api.riotgames.com
  // OC1	:oc1.api.riotgames.com
  // TR1	:tr1.api.riotgames.com
  // RU	:ru.api.riotgames.com
  // PH2:	ph2.api.riotgames.com
  // SG2:	sg2.api.riotgames.com
  // TH2	:th2.api.riotgames.com
  // TW2	:tw2.api.riotgames.com
  // VN2	:vn2.api.riotgames.com
};

export const REGIONAL_ROUTING = {
  AMERICAS: 'americas.api.riotgames.com',
  ASIA: 'asia.api.riotgames.com',
  EUROPE: 'europe.api.riotgames.com',
  SEA: 'sea.api.riotgames.com',
};
