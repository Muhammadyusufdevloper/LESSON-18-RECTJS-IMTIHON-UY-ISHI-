import { memo, useEffect, useState } from 'react';
import "./Products.scss";
import axios from '../../../api';
import { MdStarRate } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

const Products = () => {
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState("all");

    const getProducts = () => {
        const endpoint = categories === "all" ? `/products` : `/products/${categories}`;
        axios.get(endpoint)
            .then(res => setData(res.data.products))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        getProducts();
    }, [categories]);

    const products = data.map((product) => (
        <div key={product.id} className='products__card'>
            <div className='products__img-boxes'>
                <div >Hot</div>
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className='products__info-boxes'>
                <p className='products__info-categories'>{product.category}</p>
                <h3 className='products__info-title'>{product.title}</h3>
                <div className='products__info-rating-card'>
                    <MdStarRate />
                    <p className='products__info-rating'>{"(" + product.rating + ")"}</p>
                </div>
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

    return (
        <section className='products'>
            <div className='container'>
                <h2 className='product__title'>Popular Products</h2>
                <ul className='product__categories-list'>
                    <li className='product__item'>
                        <data onClick={(e) => setCategories(e.target.value)} value={"all"}>All</data>
                    </li>
                </ul>
                <div className='products__cards'>
                    {products}
                </div>
            </div>
        </section>
    );
};

export default memo(Products);
