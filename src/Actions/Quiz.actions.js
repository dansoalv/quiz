import{
    GET_QUESTIONS,
    GET_QUESTIONS_FAIL,
    GET_QUESTIONS_SUCCESS,
    SEND_QUESTIONS,
    SEND_QUESTIONS_FAIL,
    SEND_QUESTIONS_SUCCESS
} from './../Types/index'
import {questionsList} from "../questions";
import Swal from "sweetalert2";
import clientAxios from "../Config/axios";

export function getQuestionsList() {
    return (dispatch) => {
        dispatch(getQuestionsListAction())
        try {
            dispatch(getQuestionsListSuccess(questionsList))
        }catch (e) {
            console.log(e)
            dispatch(geQuestionsListFail(true))
        }
    }
}

const getQuestionsListAction = () => ({
    type: GET_QUESTIONS,
    payload: true
})

const getQuestionsListSuccess = (questions) => ({
    type: GET_QUESTIONS_SUCCESS,
    payload: questions
})

const geQuestionsListFail = (state) => ({
    type: GET_QUESTIONS_FAIL,
    payload: state
})

export function addAnswers(Answers) {
    return async (dispatch) => {
        dispatch(addAnswersAction())
        try{
            const response = await clientAxios.post('/users', Answers)
            if(response.status === 201) {
                dispatch(addAnswersSuccess(Answers))
                Swal.fire(
                    'Done',
                    'Answers saved',
                    'success'
                )
            }


        }catch (e) {
            dispatch(addAnswersFail(true))
            Swal.fire({
                    icon:"error",
                    title: "Error!",
                    text: "Have an error, Try Again!"
                }
            )
        }
    }
}

const addAnswersAction = () => ({
    type: SEND_QUESTIONS,
    payload: true
})

const addAnswersSuccess = answers => ({
    type: SEND_QUESTIONS_SUCCESS,
    payload: answers
})

const addAnswersFail = (state) => ({
    type: SEND_QUESTIONS_FAIL,
    payload: state
})