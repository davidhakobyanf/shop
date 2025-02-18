import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './PriceFilter.module.css';
const PriceFilter = () => {
    return (
        <div className={styles.priceFilterContainer}>
            <div className={styles.priceContainer}>
                <p>От</p>
                <p>До</p>
                <Input variant={'defInput'} type='number' />
                <Input variant={'defInput'} type='number' />
            </div>
            <div>
                <Button value='Готово' />
            </div>
        </div>
    );
};
export default PriceFilter;
