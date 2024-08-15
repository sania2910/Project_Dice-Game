import React from 'react'
import Totalscore from './Totalscore'
import Rolldice from './Rolldice'
import Numberselector from './Numberselector'
import { useState } from 'react'
import Rules from './Rules'
import { Button } from '../styled/Button'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Gameplay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("")
  const [showrules, setShowRules] = useState(false)
  
 function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rolldice = ()=> {
    const randNum = getRandom(1,7);
    setCurrentDice((prev)=> randNum);
  if(!selectedNumber){
  setError("You have not selected any no.")
  return;
  }

    if(selectedNumber === randNum){
      setScore((prev) => prev + randNum);
     toast.success("You guessed it right");
    }
    else{
      setScore((prev) => prev - 2)
      toast.error('You are wrong')
      
    }
    setSelectedNumber(undefined);
  };
 
  const resetScore= ()=> {
    setScore(0);
  }
  return (
    <MainContainer>
     <div className='top_section'>
        <Totalscore score={score}/>
        <div className="select">
        <Numberselector
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        />

        </div>
     </div>
     <Rolldice
currentDice={currentDice}
rolldice={rolldice}
     />
        <div className="btns">
        <Button onClick={resetScore}>Reset score </Button>
        <Button
        onClick={()=> setShowRules((prev)=>!prev)}
        >
        
          {showrules ? "Hide" : "Show"}  rules</Button>
        </div>{
          showrules && <Rules/>
          }
       
        <ToastContainer position="top-center" autoClose={2500} hideProgressBar={true} theme="colored"/>
   
    </MainContainer>
  )
}

export default Gameplay
const MainContainer = styled.div`
 padding-top: 10px;
 
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .select{
    align-items: end;
    padding-left: 500px;
  }
  
  .btns {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;