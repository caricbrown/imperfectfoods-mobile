import { StackNavigationProp } from '@react-navigation/stack';
import { LogoTitle } from 'presentation/components/LogoTitle';
import { PrimaryButton } from 'presentation/components/primary-button/PrimaryButton';
import React from 'react';
import {
    SafeAreaView, StatusBar, Text, View
} from 'react-native';
import { styles } from './GetStartedScreen.styles';

type StackParamList = {
    GetStarted: undefined;
    VerifyService: undefined;
};

type ScreenProps = {
    navigation: StackNavigationProp<StackParamList, 'GetStarted'>;
}

const GetStartedScreen = ({ navigation }: ScreenProps) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <LogoTitle />
                    <View style={styles.box}>
                        <Text style={styles.text1} >Sustainable, Affordable Groceries</Text>
                        <Text style={styles.text2}>Delivered Weekly To Your Door</Text>
                    </View>
                    <PrimaryButton onPress={() => navigation.navigate('VerifyService')} testID='GET_STARTED' title='Get Started' />
                </View>
            </SafeAreaView>
        </>
    );
};

export default GetStartedScreen;
