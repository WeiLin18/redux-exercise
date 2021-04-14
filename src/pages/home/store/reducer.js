import { constants } from "./index";
import { fromJS } from "immutable";
const defaultState = fromJS({
  topicList: [],
  page: 1,
  topicPage: 1,
  isScrollTopShow: false
});

const topicListAdd = (state, action) => {
  return state.merge({
    topicList: state.get("topicList").concat(fromJS(action.topicList)),
    topicPage: action.nextPage
  });
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.TOPICLIST_GET:
      return state.set("topicList", fromJS(action.topicList));
    case constants.TOPICLIST_ADD:
      return topicListAdd(state, action);
    case constants.TOGGLE_TOPSHOW:
      return state.set("isScrollTopShow", action.show);
    default:
      return state;
  }
};

export default reducer;
