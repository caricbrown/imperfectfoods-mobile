import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import GetStartedScreen from './GetStartedScreen';
import VerifyServiceScreen from './VerifyServiceScreen';

const Stack = createStackNavigator();

const Root = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="GetStarted" component={GetStartedScreen} />
            <Stack.Screen name="VerifyService" component={VerifyServiceScreen} />
        </Stack.Navigator>
    );
};

export default Root;