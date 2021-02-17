import { fireEvent, render } from '@testing-library/react-native';
import { Colors } from 'presentation/colors';
import React from 'react';
import { PrimaryButton } from './PrimaryButton';

describe('PrimaryButton', () => {
    const mockCallback = jest.fn();
    const { getByTestId, getByText } = render(
        <PrimaryButton onPress={mockCallback} testID='button' title='title' />
    );

    it('has style and callback', () => {
        const button = getByTestId('button');

        expect(button).toHaveStyle({ 'backgroundColor': Colors.magenta });
        expect(button).toHaveStyle({ 'borderRadius': 6 });
        expect(button).toHaveStyle({ 'paddingVertical': 12 });

        fireEvent.press(button);
        expect(mockCallback).toBeCalledTimes(1);
    });
});