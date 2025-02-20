import { useEffect, useRef, useState } from 'react';

const useOutSideClick = () => {
    const dropDownRef = useRef<HTMLDivElement>(null);
    const [isOpenOutSide, setIsOpenOutSide] = useState<boolean>(false);

    const open = () => setIsOpenOutSide((prev) => !prev);
    const close = () => setIsOpenOutSide(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
                close();
            }
        };

        if (isOpenOutSide) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return { isOpenOutSide, open, close, dropDownRef };
};

export default useOutSideClick;
