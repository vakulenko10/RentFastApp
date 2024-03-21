"use client"
import { SearchManufacturerProps } from '@/types'
import { useState, Fragment } from 'react'
import React from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { manufacturers } from '@/constants'
import Image from 'next/image'

const SearchManufacturer = ({selected, setSelected}: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');
  
  const filteredManufacturers =
   query === ""
   ? manufacturers 
   : manufacturers.filter((item) =>(
    item.toLowerCase()
    .replace(/\s+/g, "")
    .includes(query.toLowerCase().replace(/\s+/g, ""))));
  return (
    <div className='search-manufacturer'>
      <Combobox value={selected} onChange={setSelected}>
        <div className='relative w-full'>
          <Combobox.Button className="absolute top-[14px] ">
            <Image src="/car-logo.svg" width={20} height={20} className="ml-4 " alt="logo"/>
          </Combobox.Button>
        <Combobox.Input className="search-manufacturer__input " placeholder='volkswagen' displayValue={(selected: string)=>selected} onChange={(e) => setQuery(e.target.value)}/>
        <Transition  as={Fragment} leave="transition ease-in duration-100" leaveFrom='opacity-100' leaveTo="opacity-0" afterLeave={()=>setQuery('')}>
        <Combobox.Options className="absolute z-10 bg-primary-gray-200 text-white-100 w-full">
          {(
            filteredManufacturers.map((item)=>(
              <Combobox.Option key={item} className={({active})=>`
              relative search_manufacturer__option ${active ? 'bg-primary-gray text-white':"text-white-100 "} `} value={item}>
                  {({selected, active })=>(
                    <><span
                    className={`block truncate ${
                      selected ? 'font-medium' : 'font-normal'
                    }`}
                  >
                    {item}
                  </span>
                  {selected ? (
                    <span
                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                        active ? 'text-white' : 'text-teal-600'
                      }`}
                    >
                      
                    </span>
                  ) : null}
                    
                    </>
              )}
              </Combobox.Option>
            ))
          )}
        </Combobox.Options>
        </Transition>
        </div>

      </Combobox>
      </div>
  )
}

export default SearchManufacturer