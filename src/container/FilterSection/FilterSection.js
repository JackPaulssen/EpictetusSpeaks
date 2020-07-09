import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import * as EpictetusQuotes from "./QuoteDB.json";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MainSection = styled.div`
  color: ${(props) => props.theme.color.secondaryDark};
`;

const Button = styled.button`
  animation: ${fadeIn} 1s;
  color: ${(props) =>
    props.active ? props.theme.color.white : props.theme.color.secondaryDark};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: 600;
  padding: 8px 12px;
  margin: 0px;
  background: none;
  outline: none;
  border: none;
  height: auto;
`;

const FilterSection = (props) => {
  const [fundamentalLabel, setFundamentalLabel] = useState(false);
  const [relationshipsLabel, setRelationshipsLabel] = useState(false);
  const [religionLabel, setReligionLabel] = useState(false);
  const [deathLabel, setDeathLabel] = useState(false);
  const [tranquilityLabel, setTranquilityLabel] = useState(false);
  const [instructionLabel, setInstructionLabel] = useState(false);
  const [favouriteLabel, setFavouriteLabel] = useState(false);


  const [totalFilter, setTotalFilter] = useState([]);

  const quotes = EpictetusQuotes.default;

  const listOfTags = [
    ["fundamentals", fundamentalLabel, setFundamentalLabel],
    ["relationships", relationshipsLabel, setRelationshipsLabel],
    ["religion", religionLabel, setReligionLabel],
    ["death", deathLabel, setDeathLabel],
    ["tranquility", tranquilityLabel, setTranquilityLabel],
    ["instruction", instructionLabel, setInstructionLabel],
    ["favourites", favouriteLabel, setFavouriteLabel],

  ];

  useEffect(() => {
    // this builds a concatenated array of whatever tags are toggled on, not currently required if users can only select one tag at a time
    let searchQuery = [];
    listOfTags.map((tag) => tag[1] && searchQuery.push(tag[0]));
    searchQuery = searchQuery.filter(el => el !== "favourites");  // to allow users to select favourite & another label
    setTotalFilter(searchQuery);
  }, [
    fundamentalLabel,
    relationshipsLabel,
    religionLabel,
    deathLabel,
    tranquilityLabel,
    instructionLabel,
    favouriteLabel,
    
  ]);

  useEffect(() => {quotePickerFn()}, [totalFilter, props.trigger]);

  const quotePickerFn = () => {
   

    const filteredQuote = quotes.filter((q) =>
      totalFilter.every((key) => q.keywords.includes(key))
    );
    let randomFilteredQuote = pickRandomQuote(filteredQuote);

    
    if(favouriteLabel){
     
      let favouriteArray = []

      for (let i = 0; i < filteredQuote.length; i++){
        for(let key in localStorage){
          if(filteredQuote[i].id === key){
            favouriteArray.push({description: filteredQuote[i].description, source: filteredQuote[i].source, id: filteredQuote[i].id})
          }
        }

      }

      randomFilteredQuote = pickRandomQuote(favouriteArray);
      if (!randomFilteredQuote) {
        // if there are no matching quotes by keyword, or if there are no key words applied
        setButtonProps("", "no matches", "");
        return;
      }
      setButtonProps(
        randomFilteredQuote.description,
        randomFilteredQuote.source,
        randomFilteredQuote.id
      );
      return;
    }

    if (filteredQuote.length === quotes.length) {
      // if there are no matching quotes by keyword, or if there are no key words applied

      setButtonProps("", "select a keyword to get started", "");
      return;
    }
    if (!randomFilteredQuote) {
      // if there are no matching quotes by keyword, or if there are no key words applied
      setButtonProps("", "no matches", "");
      return;
    }
    if (randomFilteredQuote.id === props.quoteID) {
      // my attempt to prevent the same quote being presented twice, calling the function to pick another quote
      // doesn't work...
      randomFilteredQuote = pickRandomQuote(filteredQuote);
    }

    setButtonProps(
      randomFilteredQuote.description,
      randomFilteredQuote.source,
      randomFilteredQuote.id
    );
  };

  const setButtonProps = (quote, source, id) => {
    props.setQuote(quote);
    props.setSource(source);
    props.setQuoteID(id);
  };

  const pickRandomQuote = (quote) => quote[Math.floor(Math.random() * quote.length)];

  // const resetAllFilters = () => listOfTags.forEach((tag) => tag[2](false));

  const filterButtonHandler = (keyword) => {
    for (let i = 0; i < listOfTags.length; i++) {
      if (listOfTags[i][0] === keyword) {
        listOfTags[i][2](!listOfTags[i][1]);
      }
    }
  };


  return (
    <MainSection>
      {listOfTags.map((tag) => (
        <Button
          key={tag}
          onClick={() => filterButtonHandler(tag[0])}
          active={tag[1]}
        >
          #{tag[0]}
        </Button>
      ))}
    </MainSection>
  );
};

export default FilterSection;
