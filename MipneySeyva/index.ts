/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import {ThunkAction} from "redux-thunk"
import { RootState } from "./src/rootReducer";
import { AnyAction } from "redux";
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
export type AppThunkAction = ThunkAction<
  Promise<void>,
  RootState,
  Record<string, unknown>,
  AnyAction
>;

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
