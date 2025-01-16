import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";


const StarRating =({rating})=>{
const totalStars = 5;

return(
  <div className="star-rating">
  {Array.from({ length: totalStars }, (_, index) => (
    <span key={index} className="star">
      {index < Math.floor(rating) ? "★" : "☆"}
    </span>
  ))}
</div>
)
}



const Homeid = () => {
  const { id } = useParams(); 

  const { data, error, isError, isFetching } = useQuery({
    queryKey: ['product', id], 
    queryFn: () =>
      axios
        .get(`https://dummyjson.com/products/${id}`) 
        .then((res) => res.data),
  });

  if (isFetching) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;

  return (
    <div className='Homeid'>
      <div className="container">
      <Link className='error_link' to={'/'}>Back</Link>
          <div className="id_card" key={data.id}>
            <div className="homeid_box">
              <img className='id_img' src={data.thumbnail} alt={data.title} />
              
              {data.images.map((img, index) => (
                <img key={index} className='id_imgs' src={img} alt={`Image ${index}`} />
              ))}
              {Number(data.discountPercentage) > 1 && (
  <p className="id_foiz">{Number(data.discountPercentage).toFixed()}%</p>)}
            </div>
            
            <h2 className='id_title'>{data.title}</h2>
            <h3 className='id_brand'>{data.brand}</h3>
            <div className="id_box">
              <h4 className='id_stoc'>Stock: {data.stock}</h4>
              <p className='id_price'>Price: ${data.price}</p>
            </div> 
            <h3 className="id_rating"> {data.rating} </h3>
            <StarRating  rating={data.rating} className="star" />
            <p className="id_description">{data.description}</p>
            <button className="basket">
            <h4 className='basket_title'>Buy</h4> <FiShoppingCart />
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default Homeid;
