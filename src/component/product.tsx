"use client";
import React, { useState } from 'react'
import Image from "next/image";
import { Dialog } from '@material-tailwind/react';
import Description from './description';
export default function Product(item:any) {
 let items=item.item;
 const [open1, setOpen1] = useState(false);
 const[description,setDescription]=useState("");
  return (
<div className={` md:flex justify-center `}>
            <div
            className={` bg-white border-2 rounded-md  border-gray-200   shadow-md hover:shadow-2xl  `}
         
          >
            <div className={`flex flex-col justify-center overflow-hidden items-center mt-5  `}>
              <div className='img h-[100px] w-[100px] overflow-hidden  p-4'>
              
                  <Image
                    src={items.image}
              width={200}
              height={200}
              
                   
                    alt={items.title}
                    className=" "
                  />
                
                 
          
              </div>
            
              <div className="mt-8 text-center px-1">
          
                <h5 className="   overflow-hidden line-clamp-1  text-lg text-primary font-spicy bg-yellow-300  py-2 h-16   font-spicyRice transition-all duration-700 cursor-pointer hover:text-secondary ">
                  {items.title }
                </h5>
              
                <p className="text-gray-500  desc pt-3  normal-case px-[1px] text-[11px] md:text-[11px] leading-[17px] ">
{items?.description.slice(0,150)}            
    </p>
    {
      items.description.length>150 ? <div className='flex justify-end mx-4  h-16 py-3 md:py-8' > 

        <div className='bg-[#282828] flex justify-center items-center py-2 px-4 text-[#eff1f6bf] hover:bg-blue-200 shadow-2xl  transition-all duration-700 cursor-pointer hover:text-black' onClick={()=>{
          setOpen1(!open1);
        }} >Read more</div>
      </div>
      :

<div className='  h-16 ' > 
{/* <div className='bg-white py-2 px-4 text-transparent   ' >Read more</div> */}
      
      </div>
    }

             
              </div>
            </div>
          </div>
          <Dialog open={open1} handler={setOpen1}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}>
        < Description  desc={items}/>
      </Dialog>
          </div>
       
  )
}

