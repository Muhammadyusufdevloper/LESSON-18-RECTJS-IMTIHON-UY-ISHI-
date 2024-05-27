import { memo } from "react"
import "./Categories.scss"
import CakeMilk from "../../../assets/categories/Cakemilk.svg"
import OganicKiwi from "../../../assets/categories/OganicKiwi.svg"
import Peach from "../../../assets/categories/Peach.svg"
import RedApple from "../../../assets/categories/RedApple.svg"
import Snack from "../../../assets/categories/Snack.svg"
import Vegetables from "../../../assets/categories/Vegetables.svg"
import Strawberry from "../../../assets/categories/Strawberry.svg"
import Blackplum from "../../../assets/categories/Blackplum.svg"
import Custardapple from "../../../assets/categories/Custardapple.svg"
import CoffeTea from "../../../assets/categories/CoffeTea.svg"

const Categories = () => {
    return (
        <>
            <section className="categories">
                <div className="container">
                    <div className="categories__top-card">
                        <h2 className="categories__title">Featured Categories</h2>
                        <ul className="categories__list">
                            <li className="categories__item">
                                Cake & Milk
                            </li>
                            <li className="categories__item">
                                Coffes & Teas
                            </li>
                            <li className="categories__item">
                                Pet Foods
                            </li>
                            <li className="categories__item">
                                Vegetables
                            </li>
                        </ul>
                    </div>
                    <div className="categories__cards">
                        <div className="categories__card">
                            <img src={CakeMilk} alt="Cake & Milk" />
                            <h3 className="categories__card-title">Cake & Milk</h3>
                            <p className="categories__card-text">26 items</p>
                        </div>
                        <div className="categories__card">
                            <img src={OganicKiwi} alt="Oganic Kiwi" />
                            <h3 className="categories__card-title">Oganic Kiwi</h3>
                            <p className="categories__card-text">28 items</p>
                        </div>
                        <div className="categories__card">
                            <img src={Peach} alt="Peach" />
                            <h3 className="categories__card-title">Peach</h3>
                            <p className="categories__card-text">14 items</p>
                        </div>
                        <div className="categories__card">
                            <img src={RedApple} alt="Cake & Milk" />
                            <h3 className="categories__card-title">Cake & Milk</h3>
                            <p className="categories__card-text">54 items</p>
                        </div>
                        <div className="categories__card">
                            <img src={Snack} alt="Cake & Milk" />
                            <h3 className="categories__card-title">Cake & Milk</h3>
                            <p className="categories__card-text">56 items</p>
                        </div>
                        <div className="categories__card">
                            <img src={Vegetables} alt="Cake & Milk" />
                            <h3 className="categories__card-title">Cake & Milk</h3>
                            <p className="categories__card-text">72 items</p>
                        </div>
                        <div className="categories__card">
                            <img src={Strawberry} alt="Cake & Milk" />
                            <h3 className="categories__card-title">Cake & Milk</h3>
                            <p className="categories__card-text">36 items</p>
                        </div>
                        <div className="categories__card">
                            <img src={Blackplum} alt="Cake & Milk" />
                            <h3 className="categories__card-title">Cake & Milk</h3>
                            <p className="categories__card-text">123 items</p>
                        </div>
                        <div className="categories__card">
                            <img src={Custardapple} alt="Cake & Milk" />
                            <h3 className="categories__card-title">Cake & Milk</h3>
                            <p className="categories__card-text">34 items</p>
                        </div>
                        <div className="categories__card">
                            <img src={CoffeTea} alt="Cake & Milk" />
                            <h3 className="categories__card-title">Cake & Milk</h3>
                            <p className="categories__card-text">34 items</p>
                        </div>
                    </div>
                    <div className="categories__boxes-wrapper">
                        <div className="categories__box">
                            <h3 className="categories__box__title">Everyday Fresh & Clean with Our Products</h3>
                            <button className="categories__box__btn">Shop Now</button>
                        </div>
                        <div className="categories__box">
                            <h3 className="categories__box__title">Make your Breakfast Healthy and Easy</h3>
                            <button className="categories__box__btn">Shop Now</button>
                        </div>
                        <div className="categories__box">
                            <h3 className="categories__box__title">The best Organic Products Online</h3>
                            <button className="categories__box__btn">Shop Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(Categories)