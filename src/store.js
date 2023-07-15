import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/signup-signin/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bookReducer from "./pages/books/BookSlice.js";
import burrowReducer from "./pages/burrow-History/BurrowSlice";
import systemReducer from "./system/systemSlice";
import reviewReducer from "./pages/review/reviewSlice";

const userPersistConifg = {
  key: "userInfo",
  storage,
};

const persistedUserReducer = persistReducer(userPersistConifg, userReducer);

const store = configureStore({
  reducer: {
    userInfo: persistedUserReducer,
    bookInfo: bookReducer,
    burrowInfo: burrowReducer,
    system: systemReducer,
    reviewInfo: reviewReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
