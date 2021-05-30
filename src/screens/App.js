import React from 'react'
import {useSelector} from 'react-redux'
import Navigation from 'navigation'

const App = () => {
	const isLogged = useSelector((state) => state.Auth.isLogged)
	return <Navigation isLogged={isLogged} />
}

export default App
