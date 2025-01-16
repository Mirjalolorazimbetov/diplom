import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import { setOffset } from '../stor/product'

const Paginate = () => {
  const dispatch = useDispatch()
  const handleClick = ({selected})=>{
     dispatch(setOffset(selected))
  }
 
  return (
    <ReactPaginate
    className='paginate'
    pageCount={9}
    previousLabel = {'<<'}
    nextLabel = {'>>'}
    marginPagesDisplayed={2}
    renderOnZeroPageCount={2}
    previousClassName='paginate_prev'
    nextLinkClassName='paginate_next'
    pageLinkClassName='paginate_link'
    breakClassName='paginate_break'
    activeLinkClassName={'paginate_active'}
    onPageChange={handleClick}

    />
  )
}

export default Paginate
