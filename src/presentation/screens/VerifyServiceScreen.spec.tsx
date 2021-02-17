import { render } from '@testing-library/react-native';
import React from 'react';
import VerifyServiceScreen from './VerifyServiceScreen';

describe('VerifyServiceScreen', () => {
    const { getByText } = render(
        <VerifyServiceScreen />
    );
    it('renders title', () => {
        expect(getByText(/Enter your zip code to see if we deliver in your area/i));
    });
});