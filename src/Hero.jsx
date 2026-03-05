import React, { useEffect, useState } from "react";

const MyButton = (value) => {
return(
<>
  <button className="h-full w-full"> 
{value}
    </button>
    </>
)
};





export const Hero = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="h-full w-full absolute flex flex-col justify-center items-center  gap-1">
        <div className=" flex gap-1">
          <div className="square  border-b-black border-4 flex items-center justify-center text-9xl ">
            <MyButton value="1"/>
          </div>
          <div className="square  border-b-black border-4 flex items-center justify-center text-9xl ">
            <MyButton value="2" />
          </div>
          <div className="square  border-b-black border-4 flex items-center justify-center text-9xl ">
            <MyButton value="3"/>
          </div>
        </div>
        <div className=" flex gap-1">
          <div className="square  border-b-black border-4 flex items-center justify-center text-9xl ">
            {" "}
            <MyButton value="4" />
          </div>
          <div className="square  border-b-black border-4 flex items-center justify-center text-9xl ">
            {" "}
            <MyButton value="5"/>
          </div>
          <div className="square  border-b-black border-4 flex items-center justify-center text-9xl ">
            {" "}
            <MyButton value="6"/>
          </div>
        </div>
        <div className=" flex gap-1">
          <div className="square  border-b-black border-4 flex items-center justify-center text-9xl ">
            {" "}
            <MyButton  value="7"/>
          </div>
          <div className="square  border-b-black border-4 flex items-center justify-center text-9xl ">
            {" "}
            <MyButton value="8"/>
          </div>
          <div className="square  border-b-black border-4 flex items-center justify-center text-9xl ">
            <MyButton value="9"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
