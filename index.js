import React from 'react'
import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import App from 'screens/App'
import {Provider} from 'react-redux'
import store from 'store'

const Main = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
}

AppRegistry.registerComponent(appName, () => Main)
