import { createContext, useContext, useState, ReactNode } from 'react';
import { BrandItem, FilterContextType, FilterState, shopItemType } from '../type/type';

const FilterContext = createContext<FilterContextType | null>(null);

interface FilterProviderProps {
    children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
    const [dataFilter, setDataFilter] = useState<FilterState>({
        rating: false,
        price: { from: '', to: '' },
        brandCheckList: [],
    });

    console.log(dataFilter, 'dataFilter');

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDataFilter((prev) => ({
            ...prev,
            price: { ...prev.price, [name]: value },
        }));
    };

    const toggleRating = () => {
        setDataFilter((prev) => ({
            ...prev,
            rating: !prev.rating,
        }));
    };

    const handleBrandClick = (item: BrandItem) => {
        setDataFilter((prev) => ({
            ...prev,
            brandCheckList: prev.brandCheckList.some((el) => el.id === item.id)
                ? prev.brandCheckList.filter((el) => el.id !== item.id)
                : [...prev.brandCheckList, item],
        }));
    };

    const filterProducts = (products: shopItemType[]): shopItemType[] => {
        const filteredProducts = products.filter((product) => {
            const { price, brandCheckList } = dataFilter;
            if (brandCheckList.length > 0 && !brandCheckList.some((brand) => brand.text === product.brand)) {
                return false;
            }
            const fromPrice = price.from ? parseFloat(price.from) : 0;
            const toPrice = price.to ? parseFloat(price.to) : Infinity;

            return product.price >= fromPrice && product.price <= toPrice;
        });

        if (dataFilter.rating) {
            filteredProducts.sort((a, b) => b.rating - a.rating);
        }

        return filteredProducts;
    };

    return (
        <FilterContext.Provider
            value={{ dataFilter, setDataFilter, handlePriceChange, toggleRating, handleBrandClick, filterProducts }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = (): FilterContextType => {
    const context = useContext(FilterContext);
    if (!context) throw new Error('useFilter must be used within a FilterProvider');
    return context;
};
