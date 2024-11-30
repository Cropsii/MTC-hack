import React, { useState } from 'react'

export default function Search() {
    const [value, setValue] = useState('')
  
  return (
    <div className=' max-w-[770px] w-full min-h-12  flex items-center justify-around rounded-3xl bg-white'>
      <img src="/searchLoop.svg" className=' max-w-6 w-full max-h-6' alt="" />
      <input type="text"
        placeholder="Search"
        className=" max-w-[80%] w-full outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <img src="/filter.svg" className="w-5 h-5 ml-2 transition duration-200 hover:custom-bright-red cursor-pointer "alt="" />
    </div>
  )
}
