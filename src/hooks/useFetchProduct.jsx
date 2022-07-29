import { useEffect, useState } from 'react';
import { getProduct } from '../helpers';

export const useFetchProduct = (id) => {

    const defaultProduct = {
        item: {
            id: '',
            title: '',
            price: {
                currency: '',
                amount: 0
            },
            picture: '',
            condition: '',
            free_shipping: '',
            sold_quantity: '',
            description: ''
        }, 
        categories: []
    }

    const [product, setProduct] = useState(defaultProduct);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const getData = async () => {
            const newProduct = await getProduct(id);
            setProduct(newProduct);
            setIsLoading(false);
        }
    
        getData();
    }, [id]);



    return {
        product,
        isLoading
    };

}