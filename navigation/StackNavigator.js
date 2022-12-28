import *as React from 'react'
import Home from '../screens/homeScreen'
import Details from '../screens/details'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

export default class StackNavigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Home' Component={Home} />
                    <Stack.Screen name='Details' Component={Details} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}