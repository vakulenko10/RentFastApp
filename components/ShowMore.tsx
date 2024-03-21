"use client"
import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'
import { CustomButton } from '.'
import { updateSearchParams } from '@/utils'

const ShowMore = ({pageNumber, isNext, setLimit} : ShowMoreProps) => {
    const router = useRouter();
    const handleNavigation = () =>{
        const newLimit = (pageNumber + 1) * 10 
        // const newPathName = updateSearchParams("limit", `${newLimit}`);
        // router.push(newPathName)
        setLimit(newLimit)
    }
  return (
    <div className='w-full flex-center gap-5 mt-10 '>
        {!isNext &&(
            <CustomButton title="Show more" btnType='button' containerStyles='bg-primary-gray-100 rounded-full text-white' handleClick={handleNavigation}/>
        )}
    </div>
  )
}

export default ShowMore