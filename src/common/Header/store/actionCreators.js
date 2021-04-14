import axios from "axios";
import { fromJS } from "immutable";
import { constants } from "./index";

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});
export const infoMouseIn = () => ({
  type: constants.INFO_MOUSEIN
});
export const infoMouseOut = () => ({
  type: constants.INFO_MOUSEOUT
});
export const pageChange = (page) => ({
  type: constants.PAGE_CHANGE,
  page
});

export const getList = () => {
  return (dispatch) => {
    axios
      .get("/api/headerList.json")
      .then((res) => {
        if (res.data.success) {
          dispatch(changeList(res.data.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
