import styled from 'styled-components';
import React from 'react';
import * as EpictetusIcon from '../Assets/EpictetusIcon.png'


const HeartCSS = styled.div`    
    height: 50px;
    width: 50px;
   background-image: url(${EpictetusIcon});
   background-size: cover;
   display: inline-flex;
   margin: 0px 5px 0px 0px;
`;

const GreekHead = () => <HeartCSS/>;

export default GreekHead; 