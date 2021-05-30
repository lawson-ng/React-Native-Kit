import {createSlice} from '@reduxjs/toolkit'

const prefix = 'auth'

const initialState = {
	isLogged: false,
}

const authSlice = createSlice({
	name: prefix,
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
})

const {reducer, actions} = authSlice

export default reducer
