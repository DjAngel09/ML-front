import { screen } from "@testing-library/react";
import { getProducts } from "../../src/helpers";


describe('Testing in helper getProduct', () => {

    test('You must return the products and categories', async () => {

        const product = await getProducts('ipad pro');

        expect( product.items.length ).toBeGreaterThan(0);
        expect( product.categories.length ).toBeGreaterThan(0);

    });

    test('the items must have the required structure', async () => {

        const product = await getProducts('ipad pro');

        expect( product.items[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            price: expect.any(String),
            picture: expect.any(String),
            condition: expect.any(String),
            free_shipping: expect.any(Boolean),
            city: expect.any(String)
        });

        expect( product.categories[0] ).toEqual({
            id: expect.any(String),
            name: expect.any(String)
        })
    });

});