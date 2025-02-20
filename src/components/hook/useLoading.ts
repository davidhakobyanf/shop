import { useEffect, useState } from 'react';

export const useLoading = () => {
    const [isLoading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const time = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(time);
    }, []);

    return isLoading;
};
