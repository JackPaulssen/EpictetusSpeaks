import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import * as whiteStar from '../Assets/whiteStar.png';
import * as redStar from '../Assets/redStar.png'



const HeartCSS = styled.div`    
    height: 30px;
    width: 30px;
   background-image: url(${props => props.selected ? whiteStar : redStar});
   background-size: cover;
   display: inline-flex;
   opacity: ${props => props.selected ? '.8' : '.8'};

`;

const Heart = (props) => {
    const [favouriteSelected, setFavouriteSelected] = useState(localStorage.getItem(props.quoteID) === 'true' ? true : false );

    useEffect(() => {
        setFavouriteSelected(localStorage.getItem(props.quoteID) === 'true' ? true : false );

    }, [props.quoteID, props.trigger])
    const heartClickHandler = () => {
        setFavouriteSelected(!favouriteSelected);
        if(favouriteSelected){
            localStorage.removeItem(props.quoteID);
        } else{
            localStorage.setItem(props.quoteID, true);
        }
    }

    return <HeartCSS onClick={() => heartClickHandler()} selected={favouriteSelected}/>
};

export default Heart; 