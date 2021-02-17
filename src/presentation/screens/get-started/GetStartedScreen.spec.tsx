import { render } from '@testing-library/react-native';
import React from 'react';
import GetStartedScreen from './GetStartedScreen';

describe('GetStartedScreen', () => {
    it('renders Get Started', () => {
        const { getByText } = render(
            <GetStartedScreen />
        );
        expect(getByText(/Sustainable/i));
        expect(getByText(/Delivered weekly/i));
        expect(getByText(/Get started/i));
    });
});