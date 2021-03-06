import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import { useDispatch } from "react-redux";
import authReducer from "./pages/auth/reducer/auth.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";


const appReducer = combineReducers({
  auth: authReducer,
});
export type RootState = ReturnType<typeof appReducer>;

export const rootReducer = (state: RootState | undefined, action: any) => {
  return appReducer(state, action);
};

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
