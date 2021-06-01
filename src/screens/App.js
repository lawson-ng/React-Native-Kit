import React from 'react'
import {useSelector} from 'react-redux'
import Navigation from 'navigation'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
	React.useEffect(() => SplashScreen.hide(), [])
	const isLogged = useSelector((state) => state.Auth.isLogged)
	return <Navigation isLogged={isLogged} />
}

export default App
