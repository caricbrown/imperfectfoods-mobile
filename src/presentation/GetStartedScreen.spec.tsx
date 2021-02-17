import { render } from '@testing-library/react-native';
import React from 'react';
import GetStartedScreen from './GetStartedScreen';

describe('GetStartedScreen', () => {
    const { getByText } = render(
        <GetStartedScreen />
    );
    it('renders Get Started', () => {
        expect(getByText(/Get Started/i));
    });
});