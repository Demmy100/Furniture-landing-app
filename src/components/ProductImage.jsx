import React from 'react'
import { products } from '../constants'
import { BsPlus } from 'react-icons/bs'

const ProductImage = () => {
  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-20 px-4 gap-6'>
      {products.map((product) => {
        return (
            <div key={product.id} className=''>
                <div className='border-2 rounded-lg h-[280px] md:max-w-[265px] max-w-[100%] px-6 py-12 relative'>
                    <img src={product.img} alt="" className='mx-auto'/>
                    <div className='w-[30px] h-[30px] rounded-[50%] flex items-center justify-center cursor-pointer p-2 bg-[#d9d9d9] absolute right-4 bottom-3'>
                        <BsPlus style={{scale: '1.9'}}/>
                    </div>
                </div>
                <div className='flex flex-col my-4'>
                    <h3 className='font-bold text-[20px] text-[#23262f]'>{product.title}</h3>
                    <div className='flex gap-4 items-center'>
                        <h4 className='text-[18px] font-normal text-[#23262f]'>{product.price}</h4>
                        <span className='text-[16px] line-through text-[#d9d9d9] font-normal'>{product.subPrice}</span>
                    </div>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default ProductImage
