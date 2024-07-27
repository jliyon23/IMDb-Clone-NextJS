'use client'
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import { useTheme } from 'next-themes'

const DarkModeSwitch = () => {
    const {theme, setTheme, systemTheme} = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <div>
        {
            currentTheme === 'dark' ? 
            <MdLightMode onClick={() => setTheme('light')} className='text-3xl cursor-pointer'/>
            :
            <MdDarkMode onClick={() => setTheme('dark')} className='text-3xl cursor-pointer'/>
        }
    </div>
  )
}

export default DarkModeSwitch