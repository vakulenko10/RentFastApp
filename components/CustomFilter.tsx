"use client"
import Image from 'next/image'
// import { useRouter } from 'next/navigation'
import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { CustomFilterProps } from '@/types'
import { updateSearchParams } from '@/utils'

const CustomFilter = ({title, options, setFilter}:CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  

   return (

    <div className='w-fit '>
        <Listbox
        value={selected}
        onChange={(e)=>
          {
            setSelected(e);
           setFilter(e.value)
          }}
        >
          <div className='relative w-fit z-10 '>
            <Listbox.Button className="custom-filter__btn">
                <span className='block truncate'>{selected.title}</span>

                <Image src="/chevron-up-down.svg" width={20} height={20} className='ml-4 object-contain fill-white' alt="chevron up and down"/>
              </Listbox.Button> 
              <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
              >
                <Listbox.Options className="custom-filter__options ">
                    {options.map((option)=>{
                      return <Listbox.Option key={option.title} value={option} className={({active})=>`relative cursor-default py-2 px-4 ${active?'bg-primary-gray text-white':'text-white'}`}>
                        {({selected, })=>(<span className={`block truncate ${selected?'font-medium ':'font-normal'}`}>{option.title}</span>)}
                      </Listbox.Option>
                    })}
                </Listbox.Options>

              </Transition>
            </div>
        </Listbox>
    </div>
  )
}

export default CustomFilter