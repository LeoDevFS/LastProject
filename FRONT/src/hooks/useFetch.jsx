
import { useEffect, useState } from 'react';

const useFetch = (url) => {//pasamos parametros cual props
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const dataJson = await response.json();
                setData(dataJson);
            } catch (error) {
                console.log( error);
            }
        };

        fetchData();//EJECUTAR PARA QUE NO SE QUEDE CARGANDO

        return () => {
            setData(null);
        };
    }, []);

    return data;
};

export default useFetch;

