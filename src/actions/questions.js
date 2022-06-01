import { _getQuestions } from "../utils/_DATA";

export const GET_ALL_QUESTIONS = 'GET_ALL_QUESTIONS';

export function receiveQuestions(questions) {
  return {
    type: GET_ALL_QUESTIONS,
    questions,
  };
}

export function getQuestions() {
  return dispatch => {
    return _getQuestions().then(questions => {
      dispatch(receiveQuestions(questions))
    })
  }
}
