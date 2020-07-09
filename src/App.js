import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import MainFrame from "./container/layout/mainframe";
import FilterSection from "./container/FilterSection/FilterSection";
import Heart from "./styling/HeartIcon";
// import SearchBar from "./component/SearchButton";
import GreekIcon from './styling/GreekIcon';


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const TitleSection = styled.div`
  animation: ${fadeIn} 2s;
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.color.secondaryDark};
  justify-content: center;
`;

const MainPanel = styled.div`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.color.white};
  animation: ${fadeIn} 2s;
  width: 100%;
`;

const QuotePanel = styled.div`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.color.white};
  animation: ${fadeIn} 2s;
  width: 100%;
`;

const SourcePanel = styled.div`
  color: ${(props) => props.theme.color.secondaryDark};
  font-size: ${(props) => props.theme.fontSize.small};
  padding: 8px 0px;
  animation: ${fadeIn} 2s;
`;


const App = () => {
  const [randomQuote, setRandomQuote] = useState("default");
  const [quoteSource, setQuoteSource] = useState("default");
  const [quoteID, setQuoteID] = useState("default");
  const [trigger, setTrigger] = useState(false);


  return (
    <MainFrame>
      <TitleSection>epictetus<GreekIcon/>speaks</TitleSection>
      {/* <SearchBar type="text" placeholder="search for a quote..." /> */}
      <FilterSection setQuote={setRandomQuote} setSource={setQuoteSource} setQuoteID={setQuoteID} quoteID={quoteID} trigger={trigger}/>
      <MainPanel onClick={() => setTrigger(!trigger)}>
        <SourcePanel>{quoteSource}</SourcePanel>
                <br/>
        <QuotePanel>{randomQuote ? `"${randomQuote}"` : null}</QuotePanel>
      </MainPanel>
      {randomQuote ? <Heart quoteID={quoteID} trigger={trigger}/>: null}
    
    </MainFrame>
  );
};

export default App;
