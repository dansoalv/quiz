import {combineReducers} from "redux";
import QuizReducer from './Quiz.reducer'

export default combineReducers({
    Quiz: QuizReducer
})