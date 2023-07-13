import React from 'react'

const Header = () => {
  return (
    <div className='h-[5%] w-[100%]  text-inherit  mr-[6%] cursor-pointer font-sans hover-text-blue-500 '>
      <span id="hf_header_Find_a_store" class='prill-sm hover:underline ml-[75%] hover:bg-red-200'>find a store</span>   
      <span id="hf_header_Find_a_store" class='prill-sm ml-2'>       |</span><span id="" class='prill-sm ml-2 hover:underline'>    Help</span>           
         <span  class='prill-sm ml-2'>       |</span>           
           <span  class='prill-sm ml-2 hover:underline'>    Join Us</span>           
         <span class='prill-sm ml-2'>       |</span>  
      <span  class='prill-sm ml-2 hover:underline'>    Sign in</span>           
    </div>
  )
}

export default Header
