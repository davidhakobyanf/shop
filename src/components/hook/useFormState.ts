import { useState } from 'react';

export const useFormState = <T extends Record<string, string | number>>(initialState: T) => {
    const [initialValue, setInitialValue] = useState<T>(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        if (typeof initialState === 'object') {
            setInitialValue((prevState) => ({ ...prevState, [name]: value }));
        }
    };

    return { initialValue, handleChange };
};
