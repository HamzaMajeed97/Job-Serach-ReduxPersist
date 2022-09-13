import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import favouriteReducer from '../reducers/favourite'
import jobReducer from '../reducers/job'

import { persistStore, persistReducer } from 'redux-persist'


const bigReducer = combineReducers({
  favourite: favouriteReducer,
  job: jobReducer,
})




const persistConfig = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer(persistConfig,bigReducer)





export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
})

export const persistor = persistStore(store)
