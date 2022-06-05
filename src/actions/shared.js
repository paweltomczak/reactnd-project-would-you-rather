import {
  getInitialData,
  _saveQuestion,
  _saveQuestionAnswer,
} from '../utils/_DATA';
import { setIsLoading } from './isLoading';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';

export const SAVE_ANSWER = 'SAVE_ANSWER';
export const SAVE_QUESTION = 'SAVE_QUESTION';

function saveAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question,
  };
}

export function setInitialData() {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setIsLoading(false));
    });
  };
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).then(() => {
      dispatch(saveAnswer({ authedUser, qid, answer }));
      dispatch(setIsLoading(false));
    });
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    }).then((question) => {
      dispatch(saveQuestion(question));
      dispatch(setIsLoading(false));
    });
  };
}
