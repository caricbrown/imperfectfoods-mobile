import React from 'react';
import {
    Pressable, Text
} from 'react-native';
import { styles } from './Button.styles';

type ButtonProps = {
    onPress: () => void;
    testID: string;
    title: string;
}

export const Button = ({ onPress, testID, title }: ButtonProps) => {

    return (
        <Pressable onPress={onPress} style={styles.button} testID={testID} >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

