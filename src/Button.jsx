import React, { useState } from 'react'

const Square=({value,click})=>{
return(
    <button className='square border-b-black h-30 w-25 border-4 flex items-center justify-center text-9xl md:text-9xl md:h-30 md:w-30 ' onClick={click}>{value}</button>
)
}


export default  function Button(){

const [square,setsquare]=useState(Array(9).fill(null))
const [isNext,setIsNext]=useState(true)
const handleClick=(i)=>{
    if(square[i] || calculateWinner(square)){
        return;}
    else{
        const newsquare=square.slice()
        if(isNext ){
        newsquare[i]="X";}
        else{
            newsquare[i]="O"
        }
        setsquare(newsquare);
        setIsNext(!isNext)

        

    }

}
const winner=calculateWinner(square)
let status;
        if(winner){
            status="winner : "+ winner;
        }
        else(
            status= (isNext?"X":"O")+ " : Turn"
        )

  return (
    <>
    <div className="w-full overflow-hidden flex justify-center" id="container ">
        <div id="title" className='text-5xl' >{status}</div>
        
        <div className="h-full w-full absolute flex flex-col justify-center items-center my-8  gap-1">
 
               <div className=" flex gap-1">
                <Square value={square[0]} click={()=>{handleClick(0)}}/>
                <Square value={square[1]} click={()=>{handleClick(1)} }/>
                <Square value={square[2]}  click={()=>{handleClick(2)} }/>
               </div>
               <div className=" flex gap-1">
 <Square value={square[3]} click={()=>{handleClick(3)} }/>
 <Square value={square[4]} click={()=>{handleClick(4)} }/>
 <Square value={square[5]} click={()=>{handleClick(5)} }/>
               </div>
               <div className=" flex gap-1">
 <Square value={square[6]} click={()=>{handleClick(6)} }/>
 <Square value={square[7]} click={()=>{handleClick(7)} }/>
 <Square value={square[8]} click={()=>{handleClick(8)} } />
               </div>
        </div>
         <button onClick={() => window.location.reload(false)} id="reset" className='absolute flex justify-center bottom-8 md:absolute
          md:top-30 md:left-190'>Reset</button>
    </div>
    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}