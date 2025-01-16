
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ImSearch } from "react-icons/im";
import { ImFire } from "react-icons/im";
import { Link } from 'react-router-dom';
import { IoChevronBackCircle } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import Paginate from './Paginate';
import { useDebounce } from 'use-debounce';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../stor/product';
import Skleton from './Skleton';
import Sort from './Sort';


const Home = () => {
  const order = useSelector((state) => state.product.order);
  const offset = useSelector((state) => state.product.offset);
  const limit = useSelector((state) => state.product.limit); 
  const search = useSelector((state) => state.product.search);
  const [searchActive, setSearchActive] = useState(false);
  const [value, setValue] = useState('');
  const [products, setProducts] = useState([]);  
  const skleton = [...new Array(8)].map(() => <Skleton />);
  const [debouncedValue] = useDebounce(value, 1500);
  const dispatch = useDispatch();

  useEffect(() => {
    if (debouncedValue !== search) {
      dispatch(setSearch(debouncedValue || ''));
    }
  }, [debouncedValue, search, dispatch]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=100')
      .then((res) => setProducts(res.data.products))
      .catch((error) => console.error(error));
  }, []);
  

  const sortedProducts = React.useMemo(() => {
    if (!products) return [];

    switch (order) {
      case "product.category":
        return [...products].sort((a, b) =>
          a.category.localeCompare(b.category)
        );
      case "product.stock":
        return [...products].sort((a, b) => a.stock - b.stock);
      case "product.price":
        return [...products].sort((a, b) => a.price - b.price);
      default:
        return products;
    }
  }, [products, order]);

  const filteredProducts = React.useMemo(() => {
    return sortedProducts.filter((product) =>
      product.title.toLowerCase().includes(search.trim().toLowerCase())
    );
  }, [sortedProducts, search]);


  const currentProducts = filteredProducts.slice(offset, offset + limit);
  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="nav_box">
            <div className="fire">
              <ImFire />
            </div>
            <Sort />
            <button className="btn_search" onClick={() => setSearchActive(true)}>
              <ImSearch />
            </button>
          </div>
        </div>
      </div>
      {searchActive && (
        <div className="nav">
          <div className="container">
            <div className={`nav_box search ${searchActive ? 'active' : ''}`}>
              <button
                className="arrov_back"
                onClick={() => setSearchActive(false)}
              >
                <IoChevronBackCircle />
              </button>
              <input
                type="text"
                placeholder="Qidiruv..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button className="clear" onClick={() => setValue('')}>
                <IoMdCloseCircle />
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="product">
          {currentProducts.length > 0
            ? currentProducts.map((product) => (
                <Link
                  to={`/Home/${product.id}`}
                  className="product_card"
                  key={product.id}
                >
                  <img src={product.thumbnail} alt={product.title} />
                  {Number(product.discountPercentage) > 1 && (
                    <p className="product_foiz">
                      {Number(product.discountPercentage).toFixed()}%
                    </p>
                  )}
                  <h2 className="product_title">{product.title}</h2>
                  <h3 className="product_brand">{product.brand}</h3>
                  <h3 className="product_category">{product.category}</h3>
                  <div className="card_box">
                    <h4 className="card_box_stock">{product.stock}</h4>
                    <p className="card_box_price"> ${product.price}</p>
                  </div>
                </Link>
              ))
            : skleton.map((val, idx) => (
                <div className="product_card" key={idx}>
                  {val}
                </div>
              ))}
        </div>
      </div>
      <Paginate />
    </>
  );
};

export default Home;

