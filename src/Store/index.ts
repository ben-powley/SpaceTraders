import { configureStore } from "@reduxjs/toolkit"
import mainSliceReducer from "Store/Slices/MainSlice"

export const store = configureStore({
  reducer: { main: mainSliceReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
