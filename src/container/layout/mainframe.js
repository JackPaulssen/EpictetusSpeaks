import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  text-align: center;
  min-height: 100%;
  width:100%;
  overflow: hidden;
  justify-content: space-between;
  overflow: scroll;
`;



const FlexItem = styled.div`
  padding: 10px 20px;
  flex: ${(props) => props.relativeSize};
  order: ${(props) => props.order};
  height: ${(props) => props.height};
  display: flex;
  align-items: center; 
  justify-content: center; 
`;

const MainFrame = (props) => {
  return (
    <FlexContainer direction={"column"}>
      <FlexItem relativeSize={1} order={1}>
        {props.children[0]}
      </FlexItem>
      <FlexItem relativeSize={1} order={2}>
        {props.children[1]}
      </FlexItem>
      <FlexItem relativeSize={1} order={3}>
        {props.children[2]}
      </FlexItem>
      <FlexItem relativeSize={7} order={4}>
        {props.children[3]}
      </FlexItem>
      <FlexItem relativeSize={1} order={5}>
        {props.children[4]}
      </FlexItem>
      <FlexItem relativeSize={1} order={6}>
        {props.children[5]}
      </FlexItem>
    </FlexContainer>
  );
};

export default MainFrame;
