import React, { useState } from "react";

const ForegroundColor = () => {
  const [value, setValue] = useState("#000000");

  return (
    <div className="rounded-lg flex flex-col gap-2 w-full">
      <span className='text-sm'>Foreground Color</span>

      <div className="w-full flex items-center gap-2 border border-gray-300 rounded-md pl-4">
        <input
          type="color"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-8 h-8 p-0 border-none cursor-pointer"
        />

        <span className="text-sm text-zinc-700">{value}</span>
      </div>
    </div>
  );
};

export default ForegroundColor;