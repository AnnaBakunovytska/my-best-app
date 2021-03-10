import { combineReducers } from "redux";
import { changeColor } from "./color";
import { postsReduser } from "./posts";

export const rootReduser = combineReducers({
  colorState: changeColor,
  postsState: postsReduser
})