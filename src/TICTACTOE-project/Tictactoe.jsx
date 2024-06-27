import React, { useRef, useState } from 'react'
import "./tictactoe.css"
import circle from "../TICTACTOE-project/image/circle.png"
import cross from  "../TICTACTOE-project/image/cross.png"

let data =["","","","","","","","","",]
 function Tictactoe ()  {

    let[count,setCount]= useState(0);
    let[lock,setLock]= useState(false);
    let titleRef = useRef(null);

    const toggle =(e,num) => {
      if(lock){
          return 0;
      }
      if(count%2===0){
         e.target.innerHTML= `<img src= ${circle} alt=''>`;
         data[num]="o";
         setCount(++count);
      }
    else{
        e.target.innerHTML= `<img src= ${cross} alt=''>`;
        data[num]= "x";
        setCount(++count);
        console.log(count,"0");
    }
    checkWin();
  }
  const  checkWin = () => {
  if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
    { 
      won(data[2]);
    }
    else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
    {

      won(data[5]);
    }
    else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
    {
      won(data[8]);
    }
    else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
    {
      won(data[6]);
    }
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
    {
      won(data[7]);
    }
    else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
      {
       won(data[8]);
      }
      else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
      {
       won(data[8]);
      }
      else if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
      {
       won(data[2]);
      }
      else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
      {
       won(data[6]);
      }

  }

  const won = (winner) => {
    setLock(true);
  
    if(winner==="o")
    {
      console.log(winner)
      titleRef.current.innerHTML =`congratulations: <img src=${circle} alt=""> wins` ;
    }
    if(winner==="x")
      {
        console.log(winner)
        titleRef.current.innerHTML =`congratulations: <img src=${cross} alt=""> wins`;
      }

  }
  const reset=()=>{
    window.location.reload();
  }

  return (
    <div className='container'>
      <h1 className="title" ref={titleRef}>TIC TAC TOE In<span>React</span></h1>
      <div className="board">
      <div className="row1">
        <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
        <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
        <div className='boxes' onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        <div className="row2">
        <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
        <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
        <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className="row3">
        <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
        <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
        <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
        </div>
      </div>
     <button className="reset" onClick={reset}>Reset</button>
    </div>
  )
}
export default Tictactoe;


        