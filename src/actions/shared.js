import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';

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

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).then(() => dispatch(saveAnswer({ authedUser, qid, answer })));
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    _saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    }).then((question) => dispatch(saveQuestion(question)));
  };
}
