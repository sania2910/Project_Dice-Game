import React from 'react'
import styled from 'styled-components'
const NumberSelector = ({selectedNumber, setSelectedNumber ,error ,setError}) => {
 const arrNum = [1,2,3,4,5,6];
 const numberSelectedNumber = (value) =>{
  setSelectedNumber(value);
  setError("");

 }
  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
    <div className='flex'>
      {arrNum.map((value, i )=> (
        <Box
        isMark={
          value === selectedNumber
        }
        
         key={i} onClick={() => numberSelectedNumber(value)}>
        {value}
      </Box>
      ))}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector
const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
    .flex{
        display: flex;
        gap: 10px;
        padding-top:0px;
        padding-left: 50px;
    }
    p{
        font-size: 20px;
        font-weight: 500px;
        color:  red;
    }
    .error{
      color: red;
    }
`;
const Box = styled.div`
  height: 70px;
  width: 70px;  
  border: 2px solid black;
  border-radius: 5px;
  display: grid;
  place-items: center;
  font-size: 22px;
  font-weight:700px;
  background-color: ${(props)=>(props.isMark ? "red" : "white")};
 color: ${(props) => (!props.isMark ? "black" : "white")};
  `;