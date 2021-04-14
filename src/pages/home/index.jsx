import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import { actionCreators } from "./store";
import { StyledMain, StyledBackTop } from "./style";
class Home extends PureComponent {
  // constructor(props) {
  //   super(props);
  // }
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <StyledMain>
        <Topic />
        {this.props.isScrollTopShow && (
          <StyledBackTop onClick={this.handleScrollTop}>Top</StyledBackTop>
        )}
      </StyledMain>
    );
  }
  componentDidMount() {
    this.props.handleHomeListGet();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}
const mapState = (state) => ({
  isScrollTopShow: state.getIn(["home", "isScrollTopShow"])
});
const mapDispatch = (dispatch) => ({
  handleHomeListGet() {
    dispatch(actionCreators.getTopicList());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});
export default connect(mapState, mapDispatch)(Home);
