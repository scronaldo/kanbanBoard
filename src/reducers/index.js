
import { combineReducers } from "redux";
import listsReducer from "./listsReducer";


// for future expanding and refraction
export default combineReducers({
    lists: listsReducer
});