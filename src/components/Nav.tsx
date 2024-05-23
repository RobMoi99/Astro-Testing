import React, { useEffect } from 'react'
import useOnScreen from '../hooks/useOnScreen';

import { Squash as Hamburger } from 'hamburger-react'

import ResponsiveMenu from './ResponsiveMenu';
import { calendlyPopup } from '../util/utils';

const Nav = () => {
  const bottomRef = React.useRef(null);
  const [isOpen, setOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const top = useOnScreen(bottomRef);
  useEffect(()=>setLoading(false),[])

  return (
      <>
      <div className='absolute h-24 top-0' ref={bottomRef}></div>
      <div className='fixed w-full  z-50'>
        <div  className={`w-full h-24 px-2  sm:px-12 top-0 flex justify-between  transition-colors duration-300 text-white  ${loading || top ? 'bg-transparent ' : 'bg-black'} `}>
          <img src="/logo.png" alt="" width={'2rem'} height={'2.25rem'} className='p-2 w-auto object-contain h-[inherit]' />
          <ul className='utsm:hidden text-white text-lg font-bold my-auto utsm:flex-col flex gap-4 md:gap-12 lg:gap-24'>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>

          <a href={calendlyPopup} target='_blank' className={`hover:brightness-125 flex items-center active:brightness-75  utsm:hidden px-6  h-14 font-bold bg-black rounded-full my-auto  ${top ? ' border-2 border-transparent': 'border-2 border-gradGreenFrom'} transition-colors duration-300`}>
            <span className={'text-gradGreenFrom my-'}>Book A Free Call</span>
          </a>

          <span className='my-auto sm:hidden'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </span>
        </div>
        <ResponsiveMenu openState={isOpen} top={top} /> 
    </div>
    </>
  )
}

export default Nav