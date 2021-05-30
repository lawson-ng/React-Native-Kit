import {configureStore} from '@reduxjs/toolkit'
import rootSlice from './slice'

const store = configureStore({
	reducer: rootSlice,
})

export default store
