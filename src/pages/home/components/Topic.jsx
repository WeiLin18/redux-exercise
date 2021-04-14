import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { StyledTopicItem, StyledTopicList, StyledLoadMoreBtn } from "../style";
import { actionCreators } from "../store";
const Topic = ({ topicList, topicPage, handleLoadMoreClick }) => {
  return (
    <StyledTopicList>
      {topicList &&
        topicList.map((item, index) => {
          return (
            <Link key={index} to={`/details/${item.get("id")}`}>
              <StyledTopicItem className="mb-2">
                <img alt="" src={item.get("imgURL")} />
                <div>
                  <h3 className="mb-2">{item.get("title")}</h3>
                  <p className="font-sm">{item.get("details")}</p>
                </div>
              </StyledTopicItem>
            </Link>
          );
        })}
      <StyledLoadMoreBtn
        onClick={() => {
          handleLoadMoreClick(topicPage);
        }}
      >
        顯示更多
      </StyledLoadMoreBtn>
    </StyledTopicList>
  );
};
const mapState = (state) => {
  return {
    topicList: state.getIn(["home", "topicList"]),
    topicPage: state.getIn(["home", "topicPage"])
  };
};
const mapDispatch = (dispatch) => {
  return {
    handleLoadMoreClick(topicPage) {
      dispatch(actionCreators.getMoreList(topicPage));
    }
  };
};

export default connect(mapState, mapDispatch)(Topic);
