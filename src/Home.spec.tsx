import { render } from '@testing-library/react-native';
import React from 'react';
import Home from './Home';

describe('Home', () => {
    const { getByText } = render(
        <Home />
    );
    it('renders Get Started', () => {
        expect(getByText(/Get Started/i));
    });
});