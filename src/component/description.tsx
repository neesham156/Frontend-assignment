import React from 'react'
import Image from "next/image";

export default function Description({desc}:any) {
    console.log(desc)
  return (
    <>
    <div className='p-4 flex flex-col items-center gap-2'>
    <Image
                    src={desc.image}
                width={200}
                height={200}
                   
                    alt={desc.title}
                    className=" object-cover"
                  />
    <div className='text-[#282828] text-2xl '>{desc.title}</div>
    <div className='pt-4'>{desc.description}</div>
    </div>
    </>
  )
}
