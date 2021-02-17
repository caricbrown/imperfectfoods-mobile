import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import React from 'react';
import Root from './Root';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Root', () => {
    const root = (
        <NavigationContainer>
            <Root />
        </NavigationContainer>
    );
    const { findByText, findAllByText } = render(root);
    it('renders Get Started', () => {
        expect(findByText(/Get Started/i));
    });
});
