import{
    GET_QUESTIONS,
    GET_QUESTIONS_FAIL,
    GET_QUESTIONS_SUCCESS,
    SEND_QUESTIONS,
    SEND_QUESTIONS_FAIL,
    SEND_QUESTIONS_SUCCESS
} from './../Types/index'

const initialState = {
    questions : [],
    answers: [],
    error: null,
    loading: false
}

export default function (state=initialState, action) {
    switch (action.type) {
        case GET_QUESTIONS:
        case SEND_QUESTIONS:
            return {...state, loading: action.payload}
        case GET_QUESTIONS_SUCCESS:
            return {...state, loading: false, error: false, questions:  state.questions.concat(action.payload)}
        case SEND_QUESTIONS_SUCCESS:
            return {...state, loading: false, answers: state.answers.concat(action.payload)}
        case GET_QUESTIONS_FAIL:
        case SEND_QUESTIONS_FAIL:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}