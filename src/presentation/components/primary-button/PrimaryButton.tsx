import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './PrimaryButton.styles';

type PrimaryButtonProps = {
    disabled?: boolean;
    onPress: () => void;
    testID: string;
    title: string;
}

export const PrimaryButton = ({ disabled, onPress, testID, title }: PrimaryButtonProps) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.button} testID={testID} >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

