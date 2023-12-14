import { combineReducers, configureStore } from "@reduxjs/toolkit"
import mainSliceReducer from "Store/Slices/MainSlice"
import { SpaceTradersAPI } from "Services/SpaceTradersService"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { setupListeners } from "@reduxjs/toolkit/query"

const persistConfig = {
  key: "root",
  storage,
}

export const persistedReducer = persistReducer(persistConfig, mainSliceReducer)
export const mainReducer = combineReducers({
  main: persistedReducer,
  [SpaceTradersAPI.reducerPath]: SpaceTradersAPI.reducer,
})

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(SpaceTradersAPI.middleware),
  devTools: process.env.NODE_ENV !== "production",
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof mainReducer>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export const persistor = persistStore(store)
