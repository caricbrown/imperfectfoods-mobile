import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Colors } from './colors';
import GetStartedScreen from './screens/GetStartedScreen';
import VerifyServiceScreen from './screens/VerifyServiceScreen';

const Stack = createStackNavigator();

const Root = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: Colors.magenta,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="GetStarted"
                component={GetStartedScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="VerifyService" component={VerifyServiceScreen} />
        </Stack.Navigator>
    );
};

export default Root;
