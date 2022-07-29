import { renderHook, waitFor } from "@testing-library/react"
import { useFetchProducts } from "../../src/hooks"

describe('testing in hook useFetchProducts', () => {

    test('should return the initial state of the hook', () => {

        const { result } = renderHook( () => useFetchProducts('ipad pro'));
        const { products, isLoading } = result.current;

        expect( isLoading ).toBeTruthy();
        expect( products ).toStrictEqual({"categories": [], "items": []});

    });

    test('It must return an object of items and categories and the isLoading in false', async () => {

        const { result } = renderHook( () => useFetchProducts('ipad pro'));

        await waitFor (
            () => expect( result.current.products.categories.length ).toBeGreaterThan(0),
            {
                timeout: 6000
            }
        );

        const { products, isLoading } = result.current;

        expect( isLoading ).toBeFalsy();
        expect( products.items.length ).toBeGreaterThan(0);

    });

});