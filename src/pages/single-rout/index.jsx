import axios from "../../api";
import { useEffect, useState } from "react";
import { MdStarRate } from "react-icons/md";
import { useParams } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp, IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CgArrowsExchange } from "react-icons/cg";
import "./SingleRout.scss"
import Faq from "../../components/faq";

const SingleRout = () => {
    const params = useParams();
    const [data, setData] = useState();
    const [count, setCount] = useState(1);
    const [images, setImg] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    useEffect(() => {
        setLoading(true)
        axios
            .get(`/products/${params.id}`)
            .then((respons) => setData(respons.data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const img = data?.images?.map((img, length) => (
        <div className={images === length ? "single__left-wrapper__basis-img-card__active" : ""} onClick={() => setImg(length)} key={length}>
            <img src={img} alt={data?.title} />
        </div>
    ))
    const product = (
        <div key={data?.id} className="single__left-wrapper__top-boxes">
            <div className="single__left-wrapper__images-cards">
                <div className="single__left-wrapper__basis-img-card">
                    <img src={data?.images[images]} alt={data?.title} />
                </div>
                <div className="single__left-wrapper__small-images-card">
                    {img}
                </div>
            </div>
            <div className="single__left-wrapper__info-cards">
                <div>
                    <button className="single__left-wrapper__sale-of-btn">Sale Off</button>
                    <h1 className="single__left-wrapper__title">{data?.title}</h1>
                    <div className="single__left-wrapper__rating-card">
                        <MdStarRate />
                        <p className='products__info-rating'>{"(" + data?.rating + ")"}</p>
                    </div>
                    <div className="single__left-wrapper__price-card">
                        <span className="single__left-wrapper__price-new">${Math.round(data?.price * count)}</span>
                        <span className="single__left-wrapper__price-old">${Math.round(data?.price + 23)}</span>
                    </div>
                    <p className="single__left-wrapper__desc">
                        {data?.description}
                    </p>
                    <div className="single__left-wrapper__size-card">
                        <span>Size / Weight:</span>
                        <button>50g</button>
                        <button>60g</button>
                        <button>80g</button>
                    </div>
                    <div className="single__left-wrapper__buttons-card">
                        <div className="single__left-wrapper__buttons-card__part">
                            <span>{count}</span>
                            <div>
                                <button onClick={() => setCount(p => p + 1)}>
                                    <IoIosArrowUp />
                                </button>
                                <button disabled={count <= 1} onClick={() => setCount(p => p - 1)}>
                                    <IoIosArrowDown />
                                </button>
                            </div>
                        </div>
                        <button className="single__left-wrapper__add-btn">
                            <IoCartOutline />
                            <span>Add to cart</span>
                        </button>
                        <button className="single__left-wrapper__wishlist-btn">
                            <IoMdHeartEmpty />
                        </button>
                        <button className="single__left-wrapper__exchange-btn">
                            <CgArrowsExchange />
                        </button>
                    </div>
                </div>
                <div className="single__left-wrapper__info-cards__type-card">
                    <ul>
                        <li>
                            <span>Type:</span> Organic
                        </li>
                        <li>
                            <span>MFG:</span> Jun 4.2022
                        </li>
                        <li>
                            <span> LIFE:</span> 70 days
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span>Type:</span> Organic
                        </li>
                        <li>
                            <span>MFG:</span> Jun 4.2022
                        </li>
                        <li>
                            <span> LIFE:</span> 70 days
                        </li>
                    </ul>
                </div>
            </div >
        </div >
    )
    return (
        <>
            <section className="single">
                <div className="container">
                    <div className="single__wrapper">
                        <div className="single__left-wrapper">
                            {product}
                        </div>
                        <div className="single__right-wrapper">

                        </div>
                    </div>
                </div>
            </section>
            <Faq />
        </>
    )
}

export default SingleRout