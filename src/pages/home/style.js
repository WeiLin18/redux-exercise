import styled from "styled-components";
export const StyledMain = styled.main`
  background-color: #f2f2f2;
`;
export const StyledLoadMoreBtn = styled.button`
  border-radius: 10px;
  background-color: #fa0;
  display: block;
  padding: 8px;
  margin: 0 auto;
  color: #fff;
  cursor: pointer;
  box-shadow: 5px 5px 5px #f2f2f2;
  :hover {
    background-color: #fa8;
  }
`;
export const StyledTopicList = styled.ul`
  max-width: 480px;
  margin: 0 auto;
  padding: 10px;
`;

export const StyledBackTop = styled.div`
  border-radius: 50%;
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 60px;
  right: 60px;
  line-height: 60px;
  text-align: center;
  color: #fff;
  background-color: #fa0;
  &:hover {
    background-color: #fa8;
  }
`;
export const StyledTopicItem = styled.li`
  padding: 10px;
  display: flex;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  &:hover {
    background-color: #f0f0f0;
  }
`;
