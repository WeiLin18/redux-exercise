import { constants } from "./index";
import { fromJS } from "immutable";
const defaultState = fromJS({
  title: "你好嗎",
  content:
    "<img src='https://fakeimg.pl/250x100/' alt=''/><p>lorem dede dcdcw dwefrgrwa ekgerg ddd oor</p>"
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.DETAILSLIST_GET:
      return state.merge({
        title: action.title,
        content: action.content
      });
    default:
      return state;
  }
};

export default reducer;
