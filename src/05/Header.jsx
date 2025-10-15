import React from 'react'

const Header = () => {
  return (
    <div>
      <header className='bg-fuchsia-200 text-gray-800 shadow-md' >
        <nav className='container h-15 mx-auto flex justify-between items-center'>
          <div className='text-2xl font-bold text-fuchsia-900'>KDT03</div>
          <ul className='flex space-x-4'>
            <li className='hover:font-bold'>홈으로 </li>
            <li className='hover:font-bold'>로또</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
