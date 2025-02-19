import Button from '../Button/Button';
import { useFormState } from '../hook/useFormState';
import Input from '../Input/Input';
import styles from './PriceFilter.module.css';

const PriceFilter = () => {
    const { initialValue, handleChange } = useFormState({ from: 0, to: 0 });

    console.log(initialValue, 'initialValue');

    return (
        <div className={styles.priceFilterContainer}>
            <div className={styles.priceContainer}>
                <p>От</p>
                <p>До</p>
                <Input variant={'defInput'} type='number' placeholder='0' name={'from'} onChange={handleChange} />
                <Input variant={'defInput'} type='number' placeholder='0' name={'to'} onChange={handleChange} />
            </div>
            <div>
                <Button value='Готово' />
            </div>
        </div>
    );
};
export default PriceFilter;
