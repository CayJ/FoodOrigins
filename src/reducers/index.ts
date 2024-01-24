import { combineReducers } from "redux";
import originReducer from "./orginReducer";

const rootReducer = combineReducers({
  origin: originReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
