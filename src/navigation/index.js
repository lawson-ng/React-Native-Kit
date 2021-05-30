import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {enableScreens} from 'react-native-screens'
import {HomeStack, AuthStack} from './stack'
// Optimize memory usage and performance
enableScreens()

const Navigation = ({isLogged}) => (
	<NavigationContainer>
		{isLogged ? <HomeStack /> : <AuthStack />}
	</NavigationContainer>
)

export default Navigation
