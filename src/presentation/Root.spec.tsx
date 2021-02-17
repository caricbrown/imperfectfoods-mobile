import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import Root from './Root';

describe('Root', () => {
    const root = (
        <NavigationContainer>
            <Root />
        </NavigationContainer>
    );
    it('renders Get Started', async () => {
        const { getByText } = render(root);

        expect(getByText(/Get Started/i));
    });
    it('navigates', async () => {
        const { getByText } = render(root);

        fireEvent.press(getByText(/Get Started/i));
        await waitFor(() => {
            expect(getByText(/Enter your zip code/i));
        });
    });
});
