import EditProductCard from '@/components/EditProductCard'
import Order from '@/components/Order'
import React from 'react'

function page() {
  return (
      <div className='flex flex-col p-3 justify-center items-center gap-y-3'>
      <EditProductCard/>
      <Order/>
      </div>
  )
}

export default page