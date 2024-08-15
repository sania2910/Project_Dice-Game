import React from 'react'
import styled from 'styled-components'
const Totalscore = ({score}) => {
  return (
   <TotalScoreContainer>
     <div>
      <h1>{score}</h1>
     <p>Total Score</p>
    </div>
   </TotalScoreContainer>
  )
}

export default Totalscore
const TotalScoreContainer = styled.div`
 max-width: 200px;  

border-radius: 10px;
background-color: white;
text-align: center;

h1{
    font-size: 96px;
    line-height: 100px;
    color: red;
}
p{
    font-size: 20px;
    font-weight: 300px;
}
`;
