import styled from "styled-components";
export const StyledHeader = styled.header`
  background-color: #ccc;
  height: 40px;
  > * {
    line-height: 40px;
  }

  .slide-enter {
    transition: all 0.2s ease-out;
  }
  .slide-enter-active {
    width: 160px;
  }
  .slide-exit {
    transition: all 0.2s ease-out;
  }
  .slide-exit-active {
    width: 120px;
  }
`;

export const SearchBar = styled.input`
  width: 120px;
  border-radius: 4px;
  border: none;
  padding: 4px;
  /* transition: all 0.2s ease-in; */
  &.focus {
    width: 160px;
  }
`;

export const SearchBtn = styled.span`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #fa0;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  transition: all 0.2s ease-out;
  &.focus {
    border-radius: 50%;
    background-color: #faa;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  padding: 20px;
  width: 200px;
  box-shadow: 2px 2px 2px #ccc;
  left: 0;
  top: 50px;
  background-color: #fff;
`;

export const SearchInfoSwitch = styled.button``;

export const SearchInfoItem = styled.a`
  border: 1px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  line-height: 1;
  cursor: pointer;
  padding: 4px;
  margin-right: 8px;
  &:hover {
    background-color: #f2f2f2;
  }
`;
