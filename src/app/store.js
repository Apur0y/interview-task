import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/CounterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})