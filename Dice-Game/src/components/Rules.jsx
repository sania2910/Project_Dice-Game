import React from 'react'
import styled from 'styled-components'
const Rules = () => {
  return (
    <RulesContainer>
        <h1>How to play dice game</h1>
    <ul><li> Select any number</li>
     <li>Click on dice image</li>
    <li>after click on  dice  if selected number is equal to dice number you will get same point as dice {""}</li>
     <li>if you get wrong guess then  2 point will be deducted</li> </ul>
    </RulesContainer>
  )
}

export default Rules
const RulesContainer = styled.div`
padding: 20px;
background-color: white;
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
border-radius: 10px;
h1{
    width: 280px;
height: 36px;
font-family: Poppins;
font-size: 24px;
font-weight: 700;
line-height: 36px;
text-align: left;

}
ul li{
    width: Hug (754px)px;
height: Hug (108px)px;
gap: 4px;
opacity: 0px;
}


`;