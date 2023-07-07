
import React, { useEffect, useState } from 'react'


import axios, { AxiosResponse } from 'axios';
import { useSelector } from 'react-redux';
import { useRouter } from "next/router";

import Image from "next/image";

import Product from '../component/product';
import {GrLogout, GrSearch} from 'react-icons/Gr'
import { Dialog } from '@material-tailwind/react';

import Description from '@/component/description';
export async function getServerSideProps() {
  let prod=[];
  let category=[];
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      prod = response.data;
      const res = await axios.get('https://fakestoreapi.com/products/categories');
      category = res.data;
    
   
   
   

     return{
      props:{
        prod:prod,
        category:category,
        
      }
     }
     
     
    } catch (error) {
      console.error(error);
      return{
        props:{
          prod:[],
          category:[]
        }
       }
    
      
    }

}



export default  function page({prod,category}:any) {
  console.log("prod",prod,"category",category)
  const router = useRouter();
  const  data:any = useSelector((state) => state);
  const[tok,setTok]=useState<any>()
  console.log("data",data)

 
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  const [open, setOpen] = useState(false);

 
const [products,setProducts]=useState(prod)
const[prodbycat,setProdbycat]=useState<any>({});
const [cat,setCat]= useState<any>("");

useEffect(()=>{
  const result=localStorage.getItem('accessToken')
  setTok(result)
  if(!result)
  {
    router.push('/')
  }
  if(!prod){
    router.reload();
  }
},[tok])

useEffect(() => {
  if(!prod){
    router.reload();
  }
  const fetchData = async () => {
    
      
         await axios.get(`https://fakestoreapi.com/products/category/${cat}`).then((response)=> setProdbycat(response.data)).catch((err)=>console.log(err))
         ;
    
     
      
   
  };
  const fetchCata = async () => {
    
      
    await axios.get(`https://fakestoreapi.com/products`).then((response)=> setProdbycat(response.data)).catch((err)=>console.log(err))
    ;


 

};
{cat.length>0? fetchData(): fetchCata()}
 

  return () => {
   
  };
}, [cat]);

  return (<>
  <div className='relative'>
   {/* header */}
   <div className='bg-[#080d0d] flex flex-wrap gap-4 justify-between items-center w-full  h-fit p-4 shadow-lg text-[#eff1f6bf] '>
{/* <p className='capitalize text-2xl'>{data.email} <span className='text-lg lowercase'>{data.password}</span> </p> */}
<div className='flex gap-2 items-center text-[#ECECEC] text-[24px] font-medium font-poppins'>
<Image src="/logo.svg" alt={""} width={59.5} height={55.25} />
            <p>Logo</p>
            </div>
<div className='flex gap-2 '>
<select
              className="border-none text-[#282828] font-bold px-2 md:px-12  py-2"
              onChange={({ target }) =>
              setCat((target.value))
            }
             
            >
               <option value="" key="">
                      ALL
                    </option>
              
                   {category.map((item:any,index:number)=>{
                    return (
                    <>
                      <option value={item} key={index}>
                      {item}
                    </option>
                    </>)
                   })}
                
            </select>
            {/* search box */}


       {/* <div className='flex   '>
            <input type='search' className='border-2  outline-none p-2' />
          <i className='position absolute  flex right-5 top-6  text-2xl'><GrSearch/></i>
            </div> */}

            <div className='w-12 h-12 rounded-full bg-white  flex justify-center items-center cursor-pointer' onClick={()=>router.push('/')}>

<GrLogout className='' />
            </div>

            </div>

    </div>


    {/* body */}


    <div className="flex flex-wrap">
       
        
          {cat.length==0 ?
          
          
          products.map((item:any,index:any)=>{
          return(
           <div className='w-full  md:w-1/3 lg:w-1/4  p-4 mb-5"'>
            <Product item={item} key={index} />
            </div>
          )
 
          }):
           prodbycat.map((item:any)=>{
            return(
             <div className='w-full md:w-1/4  p-4 mb-5"'>
              <Product item={item}/>
              </div>
            )
   
            })
         

          
          
          
          }
          
       
        
       
    </div>

   </div>

   <Dialog open={open} handler={setOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}>
     
      </Dialog>
    
    </>
  )
}
