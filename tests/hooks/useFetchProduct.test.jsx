import { renderHook, waitFor } from "@testing-library/react"
import { useFetchProduct } from "../../src/hooks"

describe('testing in hook useFetchProduct', () => {

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

    test('should return the initial state of the hook', () => {

        const { result } = renderHook( () => useFetchProduct('MLA1130780887'));
        const { product, isLoading } = result.current;

        expect( isLoading ).toBeTruthy();
        expect( product ).toStrictEqual(defaultProduct);

    });

    test('It must return an object of items and categories and the isLoading in false', async () => {

        const { result } = renderHook( () => useFetchProduct('MLA1130780887'));

        await waitFor (
            () => expect( result.current.product.categories.length ).toBeGreaterThan(0),
            {
                timeout: 6000
            }
        );

        const { product, isLoading } = result.current;

        expect( isLoading ).toBeFalsy();
        expect( product.item ).toEqual({
            id: expect.any(String),
            category_id: expect.any(String),
            title: expect.any(String),
            price: expect.any(Object),
            picture: expect.any(String),
            condition: expect.any(String),
            free_shipping: expect.any(Boolean),
            sold_quantity: expect.any(Number),
            description: expect.any(String)
        });

    });

});