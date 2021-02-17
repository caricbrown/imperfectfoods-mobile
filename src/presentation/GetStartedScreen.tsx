import React from 'react';
import {
    Button,
    SafeAreaView, StatusBar, StyleSheet, Text
} from 'react-native';

const GetStartedScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Text>GetStartedScreen</Text>
                <Button onPress={() => navigation.navigate('VerifyService')} title='Get Started' />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({

});

export default GetStartedScreen;
