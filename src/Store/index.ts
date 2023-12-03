import { combineReducers, configureStore } from "@reduxjs/toolkit"
import mainSliceReducer from "Store/Slices/MainSlice"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage,
}

export const persistedReducer = persistReducer(persistConfig, mainSliceReducer)
export const mainReducer = combineReducers({ main: persistedReducer })

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof mainReducer>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export const persistor = persistStore(store)
