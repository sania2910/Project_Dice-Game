import React from 'react'
import styled from 'styled-components'
const Rolldice = ({currentDice, rolldice, } ) => {
  
  return (
   <DiceContainer>
    
     <div className='dice'>
      <img onClick={rolldice} src={`public/images/dices/dice_${currentDice}.png`} alt="public/images/dice_1.png"/>;
    </div>
        <p>Click On Dice to roll</p>
   </DiceContainer>
  )
}

export default Rolldice
const DiceContainer = styled.div`
margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dice{
    cursor: pointer;
    padding: 0px;
  }
  p{
    font-size: 20px;
    line-height: 0px;
    padding-bottom: 0px;
    color: red;
  }

`;