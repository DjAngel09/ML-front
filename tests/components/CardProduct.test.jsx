const { render } = require("@testing-library/react");
const { CardProduct } = require("../../src/components");

import { BrowserRouter as Router } from 'react-router-dom';

describe('Testing in CardProduct components', () => {

    const product = {
        "id": "MLA1111948731",
        "title": "Apple iPad Pro De 12.9  Wi-fi  256gb Gris Espacial (5ª Generación)",
        "price": "355,699.00",
        "picture": "http://http2.mlstatic.com/D_857823-MLA46975173456_082021-I.jpg",
        "condition": "new",
        "free_shipping": true,
        "city": "Barracas"
    }

    test('Must match the snapshot', () => {

        const { container } = render(
            <Router >
                <CardProduct product={product} />
            </Router >
        );
        expect(container).toMatchSnapshot();

    });

    // test('should first', () => { second })

})