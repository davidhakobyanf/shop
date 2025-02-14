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
