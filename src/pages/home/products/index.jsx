import { memo, useEffect, useState } from 'react';
import "./Products.scss";
import axios from '../../../api';
import { MdStarRate } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import Loading from '../../../components/loading';
import { Link } from 'react-router-dom';

const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(1);
    const [categories, setCategories] = useState("all");
    const [category, setCategory] = useState([])

    const getProducts = () => {
        setLoading(true)
        const endpoint = categories === "all" ? `/products` : `/products/category/${categories}`;
        axios
            .get(`${endpoint}?limit=${10 * limit}`)
            .then(res => {
                setData(res.data.products)
            })
            .catch(err => console.error(err))
            .finally(() => {
                setLoading(false)
            })
    };
    const getCategory = () => {
        axios
            .get(`/products/category-list`)
            .then(res => {
                setCategory(res.data)
            })
            .catch(err => console.error(err))
    };
    useEffect(() => {
        getProducts();
    }, [categories, limit]);
    
    useEffect(() => {
        getCategory();
    }, [category]);

    const products = data.map((product) => (
        <div key={product.id} className='products__card'>
            <Link to={`/single/${product.id}`}>
                <div className='products__img-boxes'>
                    <div>Hot</div>
                    <img src={product.thumbnail} alt={product.title} />
                    <button className='products__img-boxes__wishlist-btn products__card__hover-wishlist'>
                        <IoMdHeartEmpty />
                    </button>
                </div>
            </Link>
            <div className='products__info-boxes'>
                <p className='products__info-categories'>{product.category}</p>
                <h3 className='products__info-title'>{product.title}</h3>
                <div className='products__info-rating-card'>
                    <MdStarRate />
                    <p className='products__info-rating'>{"(" + product.rating + ")"}</p>
                </div>
                <p className='products__info__brand'>By <span>{product.tags[0].slice(0, 1).toUpperCase() +
                    product.tags[0].slice(1).toLowerCase()}</span></p>
                <div className='products__info-part'>
                    <div className='products__info-price-card'>
                        <span className='products__info-new-price'>${product.price}</span>
                        <span className='products__info-old-price'>${(product.price + 23.231).toFixed(2)}</span>
                    </div>
                    <button className='products__info-add-cart'>
                        <IoCartOutline />
                        <span>Add</span>
                    </button>
                </div>
            </div>
        </div>
    ));
    const categoryList = category.map((el, index) => (
        <li key={index} className='products__categories-item'>
            <data onClick={(e) => setCategories(e.target.value)} value={el}>{el}</data>
        </li>
    ));
    return (
        <section className='products'>
            <div className='container'>
                <h2 className='products__title'>Popular Products</h2>
                <ul className='products__categories-list'>
                    <li className='products__categories-item'>
                        <data onClick={(e) => setCategories(e.target.value)} value={"all"}>All</data>
                    </li>
                    {categoryList}
                </ul>
                {
                    loading
                        ?
                        <Loading />

                        :
                        <div className='products__cards'>
                            {products}
                        </div>
                }

                <button onClick={() => setLimit(prev => prev + 1)} disabled={loading} className='products__see-more'>See more...</button>
            </div>
        </section>
    );
};

export default memo(Products);
