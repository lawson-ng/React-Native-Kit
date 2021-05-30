import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {SignIn, SignUp} from 'screens/auth'
import Home from 'screens/home'

import {ROUTES} from 'utilities/constants'

const Stack = createStackNavigator()

export const HomeStack = () => (
	<Stack.Navigator>
		<Stack.Screen
			name={ROUTES.HOME.name}
			component={Home}
			options={ROUTES.HOME.options}
		/>
	</Stack.Navigator>
)

export const AuthStack = () => (
	<Stack.Navigator>
		<Stack.Screen
			name={ROUTES.SIGNIN.name}
			component={SignIn}
			options={ROUTES.SIGNIN.options}
		/>
		<Stack.Screen
			name={ROUTES.SIGNUP.name}
			component={SignUp}
			options={ROUTES.SIGNUP.options}
		/>
	</Stack.Navigator>
)
