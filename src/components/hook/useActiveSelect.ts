import { useState } from 'react';

export const useActiveSelect = () => {
    const [checkList, setCheckList] = useState<{ id: number; text: string }[]>([]);

    const handleClick = (item: { id: number; text: string }) => {
        setCheckList((prevState) =>
            prevState.find((el) => el.id === item.id)
                ? prevState.filter((el) => el.id !== item.id)
                : [...prevState, item],
        );
    };

    console.log(checkList, 'checkList');
    return { handleClick, checkList };
};
