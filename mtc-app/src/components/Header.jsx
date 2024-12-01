export default function Header({ searchQuery, onSearchChange }) {

  return (
    <div className='w-screen min-h-16 flex justify-around items-center px-5 py-3 '>
        <img src="/MTC_Logo.svg" className=' max-w-12 max-h-12'  alt="" />
          <div className=' max-w-[770px] w-full min-h-12  flex items-center justify-around rounded-3xl bg-white'>
        <img src="/searchLoop.svg" className=' max-w-6 w-full max-h-6' alt="" />
        <input type="text"
          placeholder="Search"
          className=" max-w-[80%] w-full outline-none"
          value={searchQuery}
          onChange={onSearchChange}
        />
      </div>
    <div></div>
    </div>
  )
}
