import Header from '@/components/Header'
import React from 'react'
import Card1 from '@/components/Card1'
import Card2 from '@/components/Card2'
import Card3 from '@/components/Card3'
import Card4 from '@/components/Card4'
import Card5 from '@/components/Card5'
import Card6 from '@/components/Card6'
import Card7 from '@/components/Card7'
import Card8 from '@/components/Card8'
import Footer from '@/components/Footer'
import {FiInstagram, FiSearch,FiTwitter} from 'react-icons/fi'
const index = () => {
  return (
    <div className='md:h-screen  w-screen bg-white '>
      <Header/>
      <div className='h-[180%] bg-white'>
      <div className='h-[9%] w-[100%] text- font-seerif border-3 bg-white  '>
      <div className='text-center cursor-pointer font-serif md:text-2xl   text-lg'> 
          
          <span id="" class='ml-2 hover:underline'>  New & Featured     </span>           
             <span id="" class='prill-sm ml-2 hover:uppercase hover:underline'>   Men  </span>           
                <span id="" class='prill-sm ml-2 hover:uppercase hover:underline'>   Women</span>           
            <span id="" class='prill-sm ml-2 hover:uppercase hover:underline'>   Kids</span>           
          <span id="hf_header_sale" class='prill-sm ml-2 hover:uppercase hover:underline'>   Sale</span>           
      <span id="" class='prill-sm ml-2 hover:uppercase hover:underline'>   SNKRS</span>           
      
      <div className='text-black' > 
      
      <div className='md:ml-[80%]   text-3xl  mr-10 text-white text-center border-3 hover:bg-blue-00 bg-gray-300 rounded-xl '> search 
      <h1 className='absolute text-2xl ml-2 mt-[-5%] md:mt-[-2%] md:ml-4 text-black'>
      <FiSearch/>
      <div className='flex  hover:bg-slate-300 rounded-full gap-6 mt-4 md:mt-20%]'>
      <FiTwitter/>
      <FiInstagram/>
      </div>
      </h1>
       </div>
      </div>

        <img src='nike.jpg' className='md:h-[90%] ml-9 mt-[-8%] h-20 md:mt-[-6%] md:w-[10%]' />
        
        </div>
        <div className='h-[485%] w-[25%] ml-4 bg-white'>
          <h1 className=' text-center text-2xl font-bold '> Brands</h1>
          <div className='text-xl cursor-pointer mx-8 gap-8 font-serif'>
          <h1 className='hover:underline mt-1'>NIke</h1>
          <h1 className='hover:underline mt-2'>Jordan</h1>
          <h1 className='hover:underline  mt-2'>Adidas</h1>
          <h1 className='hover:underline  mt-2'> Bata</h1>
          <h1 className='hover:underline  mt-2'>Sparx</h1>
          <h1 className='hover:underline  mt-2'> Puma</h1>
          <h1 className='hover:underline  mt-2'>Rebook</h1>
          <h1 className='hover:underline  mt-2'> Sketchers</h1>
          <h1 className='mt-1'>------------</h1>
        </div>
        <div className=' cursor-pointer font-bold ml-10'>
          <h1 className='  md:ml-[30%] ml-1 text-2xl  ] font-bold'> Gender </h1> 
          <h1 className='flex'>MALE
          <img src='Square.png' className='h-[10%] w-[10%] mt-[-2%] ml-8 hover:text-lg bg-blue-100'></img> </h1>
          <h1 className='flex mt-2'> FEMALE
          <img src='Square.png' className='h-[10%] w-[10%] mt-[-2%]  ml-4 hover:text-lg bg-blue-100'></img> </h1>
        
          <h1 className='flex mt-2'> OTHER
          <img src='Square.png' className='h-[10%] w-[10%] mt-[-2%] ml-6 hover:text-lg bg-blue-100'></img> </h1>
          <h1 className='mt-4  font-bold'> --------------------------</h1>
          <h1 className='md:hidden mt-2 font-bold'>-------------</h1>
        </div>
      </div>
      </div>
      <div className=' mt-[-110%] md:mt-4 grid grid-cols-2 md:grid-cols-3   h-[40%] ml-[28%] mr-5 gap-2 md:gap-8'>
     
    
        <Card1/>
        <Card2/>
        <Card3/>
        


        </div>
      <div className='mt-2 ml-[28%] md:ml-1 grid grid-cols-2 md:grid-cols-5 md:mt-20 h-[40%]   mr-6 md:gap-8 gap-2'> 
      <Card4/>
      <Card5/>
        <Card6/>
        <Card7/>
        <Card8/>
        
        
      
        </div>
        </div>
      <Footer/>
    </div>
  
  )
}
export default index