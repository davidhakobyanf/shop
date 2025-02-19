export interface filter {
    category: categories[];
    brend: brands[];
    minPrice: number;
    maxPrice: number;
    rating: rating[];
}
export type rating = 1 | 2 | 3 | 4 | 5;
export type categories = 'Electronics' | 'Footwear' | 'Clothing';
export type brands = 'Brand A' | 'Brand B' | 'Brand C' | 'Brand D' | 'Brand E';
export interface shopItemType {
    id: number;
    name: string;
    category: categories;
    brand: brands;
    price: number;
    rating: rating;
    imageUrl: string;
}
export type CardItemTextType = Omit<shopItemType, 'id' | 'imageUrl'>;
export type CardItem = Omit<shopItemType, 'id'>;
export interface CatalogCategory {
    id: number;
    name: string;
}
export interface ListItem {
    id: number;
    text: string;
}
export interface CustomListProps {
    items: ListItem[];
}
export interface PriceRange {
    from: string;
    to: string;
}

export interface BrandItem {
    id: number;
    text: string;
}

export interface FilterState {
    rating: boolean;
    price: PriceRange;
    brandCheckList: BrandItem[];
    searchQuery: string;
}

export interface FilterContextType {
    dataFilter: FilterState;
    setDataFilter: React.Dispatch<React.SetStateAction<FilterState>>;
    handlePriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    toggleRating: () => void;
    handleBrandClick: (item: BrandItem) => void;
    filterProducts: (products: shopItemType[]) => shopItemType[];
    handleSearch: (query: string) => void;
}
