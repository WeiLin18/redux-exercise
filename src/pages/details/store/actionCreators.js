import axios from "axios";
import { constants } from "./index";

const changeDetailsList = (title, content) => ({
  type: constants.DETAILSLIST_GET,
  title,
  content
});

export const getDetails = (id) => {
  return (dispatch) => {
    axios
      .get(`/api/detailsList?id=${id}.json`)
      .then((res) => {
        dispatch(changeDetailsList(res.data.data.title, res.data.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
