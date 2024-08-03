import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './welcomeScreen';
import TaskScreen from './TaskPage';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome to Tasky" component={WelcomeScreen} />
                <Stack.Screen name="Tasks" component={TaskScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
