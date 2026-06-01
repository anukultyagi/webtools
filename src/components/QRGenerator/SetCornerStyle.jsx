import React from "react";
import { FaRegSquare } from "react-icons/fa6";
import { FaVectorSquare } from "react-icons/fa";
import { TbBorderCornerSquare } from "react-icons/tb";
const SetCornerStyle = () => {
  return (
    <div className="rounded-lg w-full ">
      <span className='text-sm'>SetCornerStyle</span>
      <div className="flex gap-2 p-2">
        <button className="pl-2 pr-2 p-1 border rounded-sm cursor-pointer hover:bg-zinc-100 border-purple-600">
          <FaRegSquare className="text-2xl" />
        </button>
        <button className="pl-2 pr-2 p-1 border rounded-sm cursor-pointer hover:bg-zinc-100 border-purple-600">

          <FaVectorSquare className="text-2xl" />
        </button>
        <button className="pl-2 pr-2 p-1 border rounded-sm cursor-pointer hover:bg-zinc-100 border-purple-600">

          <TbBorderCornerSquare className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default SetCornerStyle;
