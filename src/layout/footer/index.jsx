import { memo } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/footer/site-logo.svg"
import address from "../../assets/footer/address.svg"
import contact from "../../assets/footer/contact.svg"
import email from "../../assets/footer/email.svg"
import hours from "../../assets/footer/hours.svg"
import appleStory from "../../assets/footer/app-store.svg"
import googlePlay from "../../assets/footer/google-play.svg"
import app from "../../assets/footer/payment-method.svg"
import phone from "../../assets/footer/phone-call.svg"
import instagram from "../../assets/footer/instagram.svg"
import "./Footer.scss"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__top-wrapper">
                        <div className="footer__boxes">
                            <img className="footer__logo" src={logo} alt="Site logo" />
                            <p className="footer__boxes__text"> Awesome grocery store website template </p>
                            <div className="footer__serve-card">
                                <div>
                                    <img src={address} alt="addres icon" />
                                    <h3><span>Address:</span> 5171 W Campbell Ave</h3>
                                </div>
                                <div>
                                    <img src={contact} alt="Call icon" />
                                    <h3><span> Call Us:</span><a href="tel:+91-540-025-124553">(+91) - 540-025-124553</a></h3>
                                </div>
                                <div>
                                    <img src={email} alt="Email icon" />
                                    <h3><span>Email:</span><a href="email:sale@Nest.com">sale@Nest.com</a></h3>
                                </div>
                                <div>
                                    <img src={hours} alt="Hours icon" />
                                    <h3><span>Hours:</span> 10:00 - 18:00, Mon - Sat</h3>
                                </div>
                            </div>
                        </div>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <h3 className="footer__title">Company</h3>
                            </li>
                            <li className="footer__item">
                                <Link>Delivery Information</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Privacy Policy</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Terms & Conditions</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Contact Us</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Support Center</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Careers</Link>
                            </li>
                        </ul>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <h3 className="footer__title">Account</h3>
                            </li>
                            <li className="footer__item">
                                <Link>Sign In</Link>
                            </li>
                            <li className="footer__item">
                                <Link>View Cart</Link>
                            </li>
                            <li className="footer__item">
                                <Link>My Wishlist</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Track My Order</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Help Ticket</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Shipping Details</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Compare products</Link>
                            </li>
                        </ul>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <h3 className="footer__title">Corporate</h3>
                            </li>
                            <li className="footer__item">
                                <Link>Become a Vendor</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Affiliate Program</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Farm Business</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Farm Careers</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Our Suppliers</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Accessibility</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Promotions</Link>
                            </li>
                        </ul>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <h3 className="footer__title">Popular</h3>
                            </li>
                            <li className="footer__item">
                                <Link>Milk & Flavoured Milk</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Butter and Margarine</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Eggs Substitutes</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Marmalades</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Sour Cream and Dips</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Tea & Kombucha</Link>
                            </li>
                            <li className="footer__item">
                                <Link>Cheese</Link>
                            </li>
                        </ul>
                        <div className="footer__app-boxes">
                            <h3 className="footer__title">Install App</h3>
                            <p className="footer__app-boxes__text">From App Store or Google Play</p>
                            <div>
                                <img src={appleStory} alt="Apple Story img" />
                                <img src={googlePlay} alt="Apple Story img" />
                            </div>
                            <p className="footer__app-boxes__text">Secured Payment Gateways</p>
                            <img src={app} alt="app icons" />
                        </div>
                    </div>
                    <div className="footer__bottom-wrapper">
                        <p className="footer__bottom-wrapper__text">© 2022, Nest - HTML Ecommerce Template
                            All rights reserved</p>

                        <div className="footer__top-wrapper__cards">
                            <div className="footer__top-wrapper__cards__card">
                                <img src={phone} alt="footer img" />
                                <div>
                                    <span>
                                        1900 - 6666
                                    </span>
                                    <p>Working 8:00 - 22:00</p>
                                </div>
                            </div>
                            <div className="footer__top-wrapper__cards__card">
                                <img src={phone} alt="footer img" />
                                <div>
                                    <span>
                                        1900 - 8888
                                    </span>
                                    <p>Working 8:00 - 22:00</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer__top-wrapper__card">
                            <div>
                                <p>Follow Us</p>
                                <img src={instagram} alt="instagram icon" />
                                <img src={instagram} alt="instagram icon" />
                                <img src={instagram} alt="instagram icon" />
                                <img src={instagram} alt="instagram icon" />
                                <img src={instagram} alt="instagram icon" />
                            </div>
                            <p className="footer__top-wrapper__card-text">Up to 15% discount on your first subscribe</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default memo(Footer)