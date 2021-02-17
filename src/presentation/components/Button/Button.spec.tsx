import { fireEvent, render } from '@testing-library/react-native';
import { Colors } from 'presentation/colors';
import React from 'react';
import { Button } from './Button';

describe('Button', () => {
    const mockCallback = jest.fn();
    const { queryByTestId } = render(
        <Button onPress={mockCallback} testID='button' title='title' />
    );
    const button = queryByTestId('button');

    it('has style', () => {
        expect(button).toHaveStyle({ 'backgroundColor': Colors.magenta });
        expect(button).toHaveStyle({ 'borderRadius': 6 });
        expect(button).toHaveStyle({ 'maxWidth': '50%' });
        expect(button).toHaveStyle({ 'paddingVertical': 12 });
    });
    // it('fires callback', () => {
    //     fireEvent.press(button);
    //     expect(mockCallback).toBeCalledTimes(1);
    // });
});