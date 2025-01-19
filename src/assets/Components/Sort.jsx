import React from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import { setOrder } from '../stor/product'


const Sort = () => {const dispatch = useDispatch()

    const  options = [
        {value: "", label:"default"},
        {value: "product.title", label:"name"},
        {value: "product.stock", label:"stock"},
        {value: "product.price", label:"price"},
    ]
    
const changeOption = (info) => {
  dispatch(setOrder(info.value))
}

  return (
    <Select
    className='select'
    classNamePrefix='sort'
    onChange={changeOption}
    options={options}
   
    
    />

    
  )
}

export default Sort