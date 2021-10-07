import React, { useEffect, useState } from 'react';
import Logo from '~/assets/images/logo.png';
import prevDef from '~/helpers/prevDef';
import '~/assets/style/global.css';
import { switchTheme } from '~/helpers/switchTheme';
import { FaSun, FaMoon } from 'react-icons/fa';

const App = () => {
  const [count, changeCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    switchTheme(darkMode);
  }, [darkMode]);

  const ThemeIcon = darkMode ? FaSun : FaMoon;
  
  return (
    <div className='flex flex-col h-screen items-center text-xl dark:bg-gray-900 dark:text-white'>
      <ThemeIcon className='absolute top-4 right-4 text-5xl cursor-pointer' onClick={() => setDarkMode(x => !x)} />
      <img src={Logo} alt='' className='h-80  animate-spin-slow select-none'/>
      <p className='m-0'>Hello Vite + Preact Comp!</p>
      <p className='m-0'>Just write in react, run in preact</p>
      <p className='m-0'>Hooks work without issues: {count}</p>
      <button
        className='border-current text-current bg-transparent text-lg rounded w-32 mt-3
        cursor-pointer hover:bg-gray-100 transition-colors duration-300'
        onClick={() => changeCount(old => old + 1)}
        onContextMenu={prevDef(() => changeCount(old => old - 1))}
      >
        Click
      </button>
    </div>
  );
};

export default App;
