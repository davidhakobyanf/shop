import { useState } from 'react';

export const useFormState = (initialState = {}) => {
    const [initialValue, setInitialValue] = useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        if (typeof initialState === 'object') {
            setInitialValue((prevState) => ({ ...prevState, [name]: value }));
        } else {
            setInitialValue(value);
        }
    };

    return { initialValue, handleChange };
};
