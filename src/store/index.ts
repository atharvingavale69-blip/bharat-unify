import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

interface UIState {
  sidebarOpen: boolean;
  language: "en" | "hi";
  commandPaletteOpen: boolean;
}

const initialUI: UIState = {
  sidebarOpen: false,
  language: "en",
  commandPaletteOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUI,
  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setLanguage(state, action: PayloadAction<"en" | "hi">) {
      state.language = action.payload;
    },
    toggleCommandPalette(state) {
      state.commandPaletteOpen = !state.commandPaletteOpen;
    },
  },
});

export const { toggleSidebar, setLanguage, toggleCommandPalette } = uiSlice.actions;

export const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
