import React from 'react'
import ContentLoader from 'react-content-loader'

const Skleton = () => {
  return (
    <ContentLoader className='loader'
    speed={2}
    width={250}
    height={360}
   
    backgroundColor="#cbcacaD5"
    foregroundColor="#fff"
   
  >
    <rect x="0" y="-3" rx="0" ry="8" width="230" height="230" className='skleton1'/> 
    <rect x="12" y="234" rx="6" ry="6" width="200" height="19" className='skleton2'/> 
    <rect x="65" y="264" rx="6" ry="6" width="100" height="16" className='skleton3'/> 
    <rect x="40" y="290" rx="6" ry="6" width="150" height="16" className='skleton4'/> 
    <rect x="0" y="340" rx="6" ry="6" width="40" height="18"className='skleton5' /> 
    <rect x="170" y="340" rx="6" ry="6" width="58" height="18" className='skleton6'/>
  </ContentLoader>
  )
}

export default Skleton