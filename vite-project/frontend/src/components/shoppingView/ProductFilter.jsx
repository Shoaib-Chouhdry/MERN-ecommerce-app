import React, { Fragment } from 'react'
import { filterOptions } from '../config/Config'

const ProductFilter = ({filters,handlefilter}) => {
  return (
    <div className='rounded-lg shadow-sm'>
        <div className='p-4 border-b'>
         <h2 className='text-lg font-semibold'>Filters</h2>
        </div>
        <div className='p-4 space-y-4 '>
            {
               Object.keys(filterOptions).map((keyitem)=>(
                  <Fragment>
                   <div>
                     <h3 className='text-base font-bold'>{keyitem}</h3>
                     <div className='grid gap-2 mt-2'>
                        {
                          filterOptions[keyitem].map(items=><label className='flex items-center gap-2 font-normal'>
                          <input 
                           className="w-3" 
                           type='checkbox' 
                           value={items.id}
                          checked={
                            filters && Object.keys(filters).length > 0 &&
                            filters[keyitem] ? filters[keyitem].indexOf(items.id) > -1 :false
                            
                    
                          }
                           onChange={() => handlefilter(keyitem,items.id)}
                        
                          />
                          {items.label}
                          </label>
                          )
                        }
                     </div>
                   </div>
                   </Fragment>
                ))
            }
        </div>
    

    </div>
  )
}

export default ProductFilter