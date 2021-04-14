import React, { useRef } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import {
  StyledHeader,
  SearchBar,
  SearchBtn,
  SearchInfo,
  SearchInfoItem,
  SearchInfoSwitch
} from "./style";
import { actionCreators } from "./store";
import { Link } from "react-router-dom";
const Header = ({
  isFocus,
  isMouseIn,
  list,
  page,
  totalPage,
  handleInputFocus,
  handleInputBlur,
  handleInfoMouseIn,
  handleInfoMouseOut,
  handlePageChange
}) => {
  const nodeRef = useRef(null);
  const getListArea = () => {
    const pageList = [];
    const jsList = list.toJS();
    if (jsList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (i < jsList.length) {
          pageList.push(
            <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
          );
        }
      }
    }
    if (isFocus || isMouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleInfoMouseIn}
          onMouseLeave={handleInfoMouseOut}
        >
          <h3 className="d-inbl mr-2">主題</h3>
          <SearchInfoSwitch
            onClick={() => {
              handlePageChange(page, totalPage);
            }}
          >
            換一批
          </SearchInfoSwitch>
          <ul>{pageList}</ul>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };
  return (
    <StyledHeader>
      <Link className="mr-2" to="/">
        index
      </Link>
      <div className="po-re d-inbl mr-2">
        <CSSTransition
          timeout={200}
          in={isFocus}
          classNames="slide"
          nodeRef={nodeRef}
        >
          <SearchBar
            type="text"
            ref={nodeRef}
            className={isFocus ? "focus" : ""}
            onFocus={() => {
              handleInputFocus(list);
            }}
            onBlur={handleInputBlur}
          />
        </CSSTransition>
        <SearchBtn className={isFocus ? "focus" : ""} />
        {getListArea()}
      </div>
      <Link to="/details">details</Link>
    </StyledHeader>
  );
};

const mapStateToProps = (state) => {
  return {
    isFocus: state.getIn(["header", "isFocus"]),
    isMouseIn: state.getIn(["header", "isMouseIn"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList());

      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleInfoMouseIn() {
      dispatch(actionCreators.infoMouseIn());
    },
    handleInfoMouseOut() {
      dispatch(actionCreators.infoMouseOut());
    },
    handlePageChange(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.pageChange(page + 1));
      } else {
        dispatch(actionCreators.pageChange(1));
      }
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
