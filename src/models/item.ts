import {IDataDragonImage} from './image';

interface IItemCost {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
}

export interface IItem {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: IDataDragonImage;
  gold: IItemCost;
  tags: string[];
  maps: any;
  stats: any;
}

interface IAllItems extends Record<string, IItem> {}

export interface IItemsData {
  data: IAllItems;
}
