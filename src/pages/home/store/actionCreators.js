import axios from "axios";
import { constants } from "./index";

const changeTopicList = (topicList) => ({
  type: constants.TOPICLIST_GET,
  topicList
});

const addTopicList = (topicList, nextPage) => ({
  type: constants.TOPICLIST_ADD,
  topicList,
  nextPage
});

export const pageChange = (page) => ({
  type: constants.PAGE_CHANGE,
  page
});

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_TOPSHOW,
  show
});
export const getTopicList = () => {
  return (dispatch) => {
    axios
      .get("/api/homeList.json")
      .then((res) => {
        dispatch(changeTopicList(res.data.data));
      })
      .catch((err) => {
        console.log(err, "e");
      });
  };
};

export const getMoreList = (topicPage) => {
  return (dispatch) => {
    axios
      .get(`/api/topicList.json?page=${topicPage}`)
      .then((res) => {
        dispatch(addTopicList(res.data.data.topicList, topicPage + 1));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
