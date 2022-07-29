import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "../../src/ui";
import { BrowserRouter as Router } from 'react-router-dom';


describe('Testing in < Header/>', () => {

    test('you must change the value of the text field', () => {
        render(
            <Router>
                < Header />,
            </Router>,
        );

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'ipad pro' } });

    });

    test('must call SearchSubmit if the input has a value', () => {

        const inputValue = 'Ipad Pro';

        render(
            <Router>
                < Header />
            </Router>
        );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit( form );

    });

    test('should not call navigate if the input is empty', () => {
        render(
            <Router>
                < Header />,
            </Router>,
        );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: '' } });
        fireEvent.submit( form );


    })

});