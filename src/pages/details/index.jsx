import React, { Component } from "react";
import { StyledDetailsWrapper, StyledTitle, StyledContent } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";
class Details extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <StyledDetailsWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledContent dangerouslySetInnerHTML={{ __html: content }} />
      </StyledDetailsWrapper>
    );
  }
  componentDidMount() {
    this.props.getDetails(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  title: state.getIn(["details", "title"]),
  content: state.getIn(["details", "content"])
});

const mapDispatch = (dispatch) => {
  return {
    getDetails(id) {
      dispatch(actionCreators.getDetails(id));
    }
  };
};

export default connect(mapState, mapDispatch)(Details);
