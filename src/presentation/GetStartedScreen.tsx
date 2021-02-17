import React from 'react';
import {
    SafeAreaView, StatusBar, StyleSheet, Text
} from 'react-native';
import { Button } from './components/Button/Button';

const GetStartedScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Text>GetStartedScreen</Text>
                <Button onPress={() => navigation.navigate('VerifyService')} testID='GET_STARTED' title='Get Started' />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({

});

export default GetStartedScreen;
