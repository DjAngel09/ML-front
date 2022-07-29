const { render } = require("@testing-library/react")
const { Bredcrumbs } = require("../../src/components")

describe('Testing in Bredcrumbs components', () => {

    const categories = [
        {
            "id": "MLA1144",
            "name": "Consolas y Videojuegos"
        },
        {
            "id": "MLA438578",
            "name": "Accesorios para Consolas"
        },
        {
            "id": "MLA373767",
            "name": "Para Xbox"
        },
        {
            "id": "MLA121980",
            "name": "Xbox One"
        },
        {
            "id": "MLA121989",
            "name": "Controles y Joysticks"
        },
        {
            "id": "MLA121995",
            "name": "Joysticks"
        }
    ]

    test('Must match the snapshot', () => {

       const { container } = render( <Bredcrumbs categories={categories}/> );
       expect( container ).toMatchSnapshot();

    });

})