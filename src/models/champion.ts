import {IDataDragonImage} from './image';

export interface IChampions {
  data: {
    [key: string]: {
      info: {};
    };
  };
}

interface IChmapionInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

interface IChampionStats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}

export interface IChampions {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: IChmapionInfo;
  image: IDataDragonImage;
  tags: string[];
  partype: string;
  stats: IChampionStats;
}

interface IAllChampions extends Record<string, IChampions> {}

export interface IChampionsData {
  data: IAllChampions;
}
