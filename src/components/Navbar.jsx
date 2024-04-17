// import React from 'react'
 
// const Navbar = () => {
//   return (
//     <nav className="flex justify-between bg-slate-900 rounded-xl text-white py-1">
//         <div className='logo'>
//             <span className='font-bold text-xl mx-8'>iTask</span>

//         </div>
//         <ul className='flex gap-9 mx-9'> 
       
//         <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
//         <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        
//         </ul>
//     </nav>
//   )
// }

// export default Navbar
// ===========
import React from 'react';

const Navbar = ({ toggleMode, isNightMode }) => {
  return (
    <nav className="flex justify-between bg-slate-900 rounded-xl text-white py-1">
      <div className='logo'>
        <span className='font-bold text-xl mx-8'>...iTask</span>
      </div>
      <ul className='flex gap-9 mx-9'>
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        <li className="cursor-pointer">
          <button onClick={toggleMode} className={`focus:outline-none ${isNightMode ? 'text-gray-300' : 'text-white'}`}>
            <svg className={`w-6 h-6 fill-current ${isNightMode ? 'text-gray-300' : 'text-black'}`} viewBox="0 0 24 24">
              <path d="M12 2C6.487 2 2 6.487 2 12s4.487 10 10 10 10-4.487 10-10S17.513 2 12 2zm-1 16h2v-2h-2v2zm0-4h2v-6h-2v6zm4 0h2v-2h-2v2zm0-4h2v-2h-2v2z"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
