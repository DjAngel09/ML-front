import { render, screen } from "@testing-library/react";
import { Products } from "../../src/pages";
import { BrowserRouter as Router } from 'react-router-dom';
import { useFetchProducts } from "../../src/hooks";

jest.mock('../../src/hooks');


describe('testing in <Products />', () => {

    test('it should show the loading initially', () => {

        useFetchProducts.mockReturnValue({
            products: {
                items: [],
                categories: []
            },
            isLoading: true
        });

        render(
            <Router>
                <Products />
            </Router>
        );
        expect(screen.getByText('Cargando...'))
    });

    test('must show the products', () => {

        useFetchProducts.mockReturnValue({
            products: {
                items: [{
                    "id": "MLA1111948731",
                    "title": "Apple iPad Pro De 12.9  Wi-fi  256gb Gris Espacial (5ª Generación)",
                    "price": "355,699.00",
                    "picture": "http://http2.mlstatic.com/D_857823-MLA46975173456_082021-I.jpg",
                    "condition": "new",
                    "free_shipping": true,
                    "city": "Barracas"
                },
                {
                    "id": "MLA1130780887",
                    "title": "Apple iPad Pro De 12.9  Wi-fi  128gb Gris Espacial (5ª Generación)",
                    "price": "389,999.00",
                    "picture": "http://http2.mlstatic.com/D_689310-MLA46975173451_082021-I.jpg",
                    "condition": "new",
                    "free_shipping": true,
                    "city": "Balvanera"
                }],
                categories: [{
                    "id": "MLA1648",
                    "name": "Computación"
                }]
            },
            isLoading: false
        });

        const { container } = render(
            <Router>
                <Products />
            </Router>
        );
        expect( screen.getAllByRole('heading').length ).toBe(2);
        expect( container ).toMatchSnapshot();

    })

})