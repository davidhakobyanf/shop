import { CatalogCategory, shopItemType } from '../type/type';
import dataJson from './data.json';
import catalogJson from './catalogFilter.json';
export const imagePath = '../../public/';

export const data = dataJson as shopItemType[];
export const catalogFilter = catalogJson as CatalogCategory[];
