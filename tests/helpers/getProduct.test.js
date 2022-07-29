import { getProduct } from "../../src/helpers";

describe('Testing in getProduct', () => {

    test('must return a product', async () => {

        const product = await getProduct('MLA1130780887');
        expect(product.item).toEqual({
            id: expect.any(String),
            category_id: expect.any(String),
            title: expect.any(String),
            price: expect.any(Object),
            picture: expect.any(String),
            condition: expect.any(String),
            free_shipping: expect.any(Boolean),
            sold_quantity: expect.any(Number),
            description: expect.any(String)
        })

    })

})