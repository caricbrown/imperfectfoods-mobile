import { TestIDs } from 'presentation/testIDs';
import React from 'react';
import { renderWithReactQuery } from '../testUtils';
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
        const title = getByText(/Enter your zip code to see if we deliver in your area/i);
        expect(title);
        expect(title).toHaveStyle({ fontSize: 40, fontWeight: '800', marginTop: 24, textAlign: 'center', });
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
        const button = getByText(/go/i);
        expect(button);
        expect(button).toBeDisabled();
    });
});