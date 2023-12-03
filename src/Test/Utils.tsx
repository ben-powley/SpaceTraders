import { PreloadedState, configureStore } from "@reduxjs/toolkit"
import { RenderOptions, render } from "@testing-library/react"
import React from "react"
import { Provider } from "react-redux"
import { AppStore, RootState, persistedReducer } from "Store/"

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: { main: persistedReducer },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
      devTools: process.env.NODE_ENV !== "production",
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: { children: React.ReactElement }) {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export default renderWithProviders
