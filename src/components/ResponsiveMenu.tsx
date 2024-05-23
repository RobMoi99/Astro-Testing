
import React from 'react'
import { calendlyPopup } from '../util/utils'

const ResponsiveMenu = ({openState,top}:{openState:boolean,top:boolean}) => {
  return (
    <div className='sm:hidden  relative -z-20'>
      <div
      /* Open state determines if the menu is open or not */
      className={`
      ${top && 
        (openState ? " bg-[#00000020] backdrop-blur-xl " : "") 
      } 
      ${(openState ? "opacity-100 translate-y-0 " : "translate-y-[-24rem] opacity-0")}
      
        ${openState && 'shadow-lg'} 
        ${!top && 'bg-black'} 
        
        utsm:h-96  text-white font-bold transition-all duration-500 ease-in-out overflow-hidden    font-inriaserif text-center flex flex-col  justify-around `}>
    
      {/* Menu choices */}
      <a>item</a>
      <a>item</a>
      <a>item</a>
      <a href={calendlyPopup} target='_blank' className={`hover:brightness-125 active:brightness-75  sm:hidden px-6 py-4 w-48 h-16 mx-auto font-bold bg-black rounded-full   ${top ? ' border-2 border-transparent': 'border-2 border-gradGreenFrom'} transition-colors duration-300`}>
        <span className={'text-gradGreenFrom'}>Book A Free Call</span>
      </a>

    </div>
  </div>
  )
}

export default ResponsiveMenu

/* Mobile dropdown menu */

