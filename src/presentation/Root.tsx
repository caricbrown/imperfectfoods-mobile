import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Colors } from './colors';
import GetStartedScreen from './screens/get-started/GetStartedScreen';
import VerifyServiceScreen from './screens/verify-service/VerifyServiceScreen';

const Stack = createStackNavigator();

const Root = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: Colors.magenta,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen
                name="GetStarted"
                component={GetStartedScreen}
                options={{ headerShown: false, title: '' }}
            />
            <Stack.Screen
                name="VerifyService"
                component={VerifyServiceScreen}
                options={{ title: '' }} />
        </Stack.Navigator>
    );
};

export default Root;
