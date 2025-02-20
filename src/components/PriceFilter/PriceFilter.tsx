import Input from '../Input/Input';
import { useFilter } from '../../context/FilterContext';
import styles from './PriceFilter.module.css';

const PriceFilter = () => {
    const { dataFilter, handlePriceChange } = useFilter();

    return (
        <div className={styles.priceFilterContainer}>
            <div className={styles.priceContainer}>
                <p>От</p>
                <p>До</p>
                <Input
                    variant='defInput'
                    type='number'
                    placeholder='0'
                    name='from'
                    value={dataFilter.price.from}
                    onChange={handlePriceChange}
                />
                <Input
                    variant='defInput'
                    type='number'
                    placeholder='0'
                    name='to'
                    value={dataFilter.price.to}
                    onChange={handlePriceChange}
                />
            </div>
        </div>
    );
};

export default PriceFilter;
