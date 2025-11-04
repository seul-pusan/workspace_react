import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const baseStyle = "px-3 py-2 rounded-md font-semibold transition duration-200";
  const activeStyle = "bg-indigo-600 text-white";
  const inactiveStyle = "text-gray-800 hover:bg-indigo-300 hover:text-indigo-900";

  return (
    <header className="bg-indigo-200 text-gray-800 shadow-md">
      <nav className="container h-16 mx-auto flex justify-between items-center px-4">
        {/* 좌측 로고 */}
        <div className="text-2xl font-bold text-indigo-900">KDT03</div>

        {/* 우측 메뉴 */}
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              🏡
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lotto"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              🎊
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/food"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              🍚
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/box"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              🎞
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/traffic"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              🚗
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              🚃
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/festival"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              🐬
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
