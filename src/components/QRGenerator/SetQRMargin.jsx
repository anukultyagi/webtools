import { useState } from "react";

export default function SetQRMargin() {
  const min = 100;
  const max = 500;

  const [value, setValue] = useState(250);

  const handleChange = (e) => {
    let val = Number(e.target.value);

    if (val < min) val = min;
    if (val > max) val = max;

    setValue(val);
  };

  return (
    <div className="rounded-lg w-full ">
      {/* slider + input */}
      <span>Margin</span>
      <div className="flex w-full items-center gap-4">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          className="w-full accent-purple-600"
        />

        <input
          type="number"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          className="w-20 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-400 transition"
        />
      </div>

      {/* labels */}
      <div className="flex justify-between mt-2  text-zinc-600 text-xs ">
        <span>min : {min}px</span>
        {/* <span>{value}px</span> */}
        <span>max : {max}px</span>
      </div>
    </div>
  );
}
