import React from 'react';
import {
    Button,
    SafeAreaView, StatusBar, StyleSheet, Text
} from 'react-native';

const Home = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Text>Home</Text>
                <Button onPress={() => {}} title='Get Started' />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({

});

export default Home;
