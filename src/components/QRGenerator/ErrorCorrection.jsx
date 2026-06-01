import React from 'react'

const ErrorCorrection = () => {
  return (
    <div className="rounded-lg w-full flex flex-col gap-2">
      {/* slider + input */}
      <span className='text-sm'>Error Correction </span>

      {/* dropdown */}
      <select
        defaultValue="Medium"
        className="text-sm min-h-4 w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400 transition"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <span className="text-zinc-600 text-xs self-end">
        Recommended for most users
      </span>
    </div>
  )
}

export default ErrorCorrection