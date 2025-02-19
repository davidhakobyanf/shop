import { CatalogCategory, ListItem, shopItemType } from '../type/type';
import dataJson from './data.json';
import catalogJson from './catalogFilter.json';

export const imagePath = '../../public/';

export const data = dataJson as shopItemType[];
export const catalogFilter = catalogJson as CatalogCategory[];
export const brandData: ListItem[] = [
    { id: 1, text: 'Brand A' },
    { id: 2, text: 'Brand B' },
    { id: 3, text: 'Brand C' },
    { id: 4, text: 'Brand D' },
    { id: 5, text: 'Brand E' },
];
