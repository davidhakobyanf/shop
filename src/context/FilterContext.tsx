import { createContext, useContext, useState, ReactNode } from 'react';
import { BrandItem, FilterContextType, FilterState } from '../type/type';

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

    return (
        <FilterContext.Provider
            value={{ dataFilter, setDataFilter, handlePriceChange, toggleRating, handleBrandClick }}
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
