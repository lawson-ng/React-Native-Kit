import {useNavigation} from '@react-navigation/core'
import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {ROUTE_NAME} from 'utilities/constants'

const SignIn = () => {
	const navigation = useNavigation()
	const goSignUp = () => navigation.navigate(ROUTE_NAME.SIGNUP)
	return (
		<View>
			<Text>SignIn Screen</Text>
			<TouchableOpacity onPress={goSignUp}>
				<Text>Go sign Up</Text>
			</TouchableOpacity>
		</View>
	)
}

export default SignIn
