export type IRegion = 'BR1' | 'EUN1' | 'EUW1' | 'JP1' | 'KR';

export type IContinent = 'AMERICAS' | 'ASIA' | 'EUROPE' | 'SEA';

export interface IRegionDetails {
  id: IRegion;
  name: string;
  routing: string;
  continent?: IContinent;
}
