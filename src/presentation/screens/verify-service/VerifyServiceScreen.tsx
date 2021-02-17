import { useVerifyZipcode } from 'domain/useVerifyZipcode';
import { PrimaryButton } from 'presentation/components/primary-button/PrimaryButton';
import { ThreeAvocados } from 'presentation/components/ThreeAvocados';
import { TestIDs } from 'presentation/testIDs';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    SafeAreaView, StatusBar, Text, TextInput, View
} from 'react-native';
import { styles } from './VerifyServiceScreen.styles';

const VerifyServiceScreen = () => {
    const [postalCode, setPostalCode] = useState<string>('');
    const { mutateAsync, status } = useVerifyZipcode();
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <KeyboardAvoidingView behavior={'position'} style={styles.container}>
                        <View style={styles.innerContainer}>
                            <ThreeAvocados />
                            <Text style={styles.title}>Enter your zip code to see if we deliver in your area.</Text>
                            <TextInput
                                onChangeText={text => setPostalCode(text)}
                                placeholder='Enter your zipcode'
                                style={styles.input} />
                            <PrimaryButton disabled={postalCode.length <= 0} onPress={() => mutateAsync(postalCode)} title='Go' testID={TestIDs.goButton} />
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </SafeAreaView>
        </>
    );
};

export default VerifyServiceScreen;
