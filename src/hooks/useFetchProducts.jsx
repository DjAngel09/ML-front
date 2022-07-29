import { useEffect, useState } from 'react';
import { getProducts } from '../helpers';

export const useFetchProducts = ( nameProduct ) => {
 
    const defaultProduct = {
        items: [],
        categories: []
    }

    const [products, setProducts] = useState(defaultProduct);
    const [isLoading, setIsLoading] = useState( true );

    const getData = async() => {
        const newProducts = await getProducts ( nameProduct );
        setProducts(newProducts);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getData();
    }, [nameProduct]);



    return {
        products,
        isLoading
    }

}