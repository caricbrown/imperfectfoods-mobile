import { render } from '@testing-library/react-native';
import React from 'react';
import VerifyZipcode from './VerifyZipcode';

describe('VerifyZipcode', () => {
    const { getByText } = render(
        <VerifyZipcode />
    );
    it('renders title', () => {
        expect(getByText(/Enter your zip code to see if we deliver in your area/i));
    });
});