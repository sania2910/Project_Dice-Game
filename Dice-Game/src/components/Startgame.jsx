import React from 'react'
import { Button } from '../styled/Button'
import styled from 'styled-components'
const Startgame = ({toggle}) => {
  return (
    <Container>
       
    <div className='content'>
        <h1>
            Dice Game
        </h1>
        <Button onClick={toggle}>Play Now</Button>
    </div>
    </Container>
  )
}

export default Startgame
const Container = styled.div`
    max-width: 1230px;
    display: flex;
    height: 100vh;
    align-items: center;
    background-image: url("/public/images/Dicegame.jpg");
  background-size: cover;
 
   
    .content {

    font-size: 45px;
    white-space: nowrap;
    color: white;
    font-weight: 100px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding-left: 600px;
    margin-bottom: 170px;
   
    }
    
   
`;
