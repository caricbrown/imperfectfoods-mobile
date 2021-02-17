import { useVerifyZipcode } from 'domain/useVerifyZipcode';
import React from 'react';
import {
    Button,
    SafeAreaView, StatusBar, StyleSheet, Text, TextInput
} from 'react-native';

const VerifyZipcode = () => {
    const { mutateAsync } = useVerifyZipcode();

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Text>Enter your zip code to see if we deliver in your area.</Text>
                <TextInput placeholder='Enter your zipcode' />
                <Button onPress={() => mutateAsync} title='Go' />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({

});

export default VerifyZipcode;
