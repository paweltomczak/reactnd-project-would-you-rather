import { _saveQuestionAnswer } from '../utils/_DATA';

export const SAVE_ANSWER = 'SAVE_ANSWER';

function saveAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer,
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
