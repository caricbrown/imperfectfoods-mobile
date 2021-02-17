import { TestIDs } from 'presentation/testIDs';
import React from 'react';
import { renderWithReactQuery } from './testUtils';
import VerifyServiceScreen from './VerifyServiceScreen';

describe('VerifyServiceScreen', () => {
    it('renders image', () => {
        const { getByTestId } = renderWithReactQuery(
            <VerifyServiceScreen />
        );
        expect(getByTestId(TestIDs.threeAvocados));
    });
    it('renders title', () => {
        const { getByText } = renderWithReactQuery(
            <VerifyServiceScreen />
        );
        expect(getByText(/Enter your zip code to see if we deliver in your area/i));
    });
    it('renders text input', () => {
        const { getByPlaceholderText } = renderWithReactQuery(
            <VerifyServiceScreen />
        );
        expect(getByPlaceholderText(/Enter your zipcode/i));
    });
    it('renders button', () => {
        const { getByText } = renderWithReactQuery(
            <VerifyServiceScreen />
        );
        expect(getByText(/go/i));
    });
});