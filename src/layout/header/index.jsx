import { memo, useState } from "react"
import "./Header.scss"
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/header/logo.svg"
import refresh from "../../assets/header/refresh.svg"
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import location from "../../assets/header/location.svg"
import { IoMdMenu } from "react-icons/io";
import icons from "../../assets/header/Icon.svg"
import deals from "../../assets/header/nav-list.svg"
import headphone from "../../assets/header/headphone.svg"
import { IoMdCloseCircle } from "react-icons/io";

const Header = () => {
  const [menu, setMenu] = useState(false)
  const [scroll, setScroll] = useState(null)
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY);
  })
  return (
    <>
      <header className="header-top">
        <nav className="container header-top__navbar">
          <ul className="header-top__list">
            <li className="header-top__item">
              <Link className="header-top__link">About Us</Link>
            </li>
            <li className="header-top__item">
              <span>|</span>
            </li>
            <li className="header-top__item">
              <Link className="header-top__link">My Account</Link>
            </li>
            <li className="header-top__item">
              <span>|</span>
            </li>
            <li className="header-top__item">
              <Link className="header-top__link">Wishlist</Link>
            </li>
            <li className="header-top__item">
              <span>|</span>
            </li>
            <li className="header-top__item">
              <Link className="header-top__link">Order Tracking</Link>
            </li>
          </ul>

          <ul className="header-top__list">
            <li className="header-top__item">
              <h3 className="header-top__link">Need help? Call Us: <a className="header-top__link-call" href="tel:+ 1800 900">+ 1800 900</a></h3>
            </li>
            <li className="header-top__item">
              <span>|</span>
            </li>
            <li className="header-top__item">
              <select>
                <option className="header-top__link">English</option>
                <option className="header-top__link">Uzbek</option>
                <option className="header-top__link">Rus</option>
              </select>
            </li>
            <li className="header-top__item">
              <span>|</span>
            </li>
            <li className="header-top__item">
              <select>
                <option className="header-top__link">USD</option>
                <option className="header-top__link">Uzbek</option>
                <option className="header-top__link">Rus</option>
              </select>
            </li>
          </ul>
        </nav>
      </header>
      <header className={`header-center ${scroll > 50 ? "header-center__shrink" : ""}`}>
        <nav className="header-center__navbar container">
          <Link to="/" className="header-center__site-logo">
            <img src={logo} alt="Site logo" />
          </Link>
          <div className="header-center__wrapper">
            <div className="header-center__search-boxes">
              <select className="header-center__categories-select">
                <option value="">All Categories</option>
              </select>
              <div>
                <span>|</span>
              </div>
              <div className="header-center__search-card">
                <input type="search" placeholder="Search for items..." />
                <button><IoSearchOutline /></button>
              </div>
            </div>
            <div className="header-center__location-card">
              <img src={location} alt="" />
              <select>
                <option value="location">
                  Your Location
                </option>
                <option value="location">
                  Your Location
                </option>
                <option value="location">
                  Your Location
                </option>
              </select>
            </div>
            <div className="header-center__buttons-card">
              <button className="header-center__btn">
                <div>
                  <img src={refresh} alt="refresh icon" />
                  <span>0</span>
                </div>
                <p>Compare</p>
              </button>
              <button className="header-center__btn">
                <div>
                  <FaRegHeart />
                  <span>0</span>
                </div>
                <p>Wishlist</p>
              </button>
              <button className="header-center__btn">
                <div>
                  <GrCart />
                  <span>0</span>
                </div>
                <p>Cart</p>
              </button>
              <Link className="header-center__account-link">
                <FiUser />
                <p>Account</p>
              </Link>
            </div>
            <button onClick={() => setMenu(true)} className="header-center__menu-btn">
              <IoMdMenu className="header-center__menu-btn" />
            </button>
          </div>
        </nav>
      </header>
      <header className={`header-bottom ${!scroll ? "header-bottom__shrink" : ""}`}>
        <nav className="header-bottom__navbar container">
          <div className="header-bottom__wrapper">
            <div className="header-bottom__all-categories">
              <img src={icons} alt="Browse all categories icon" />
              <select>
                <option value="">Browse All Categories</option>
              </select>
            </div>
            <div className="header-bottom__deals">
              <img src={deals} alt="deals img" />
              <Link>Deals</Link>
            </div>
            <ul className="header-bottom__list">
              <li className="header-bottom__item">
                <NavLink>Home</NavLink>
              </li>
              <li className="header-bottom__item">
                <NavLink>About</NavLink>
              </li>
              <li className="header-bottom__item">
                <NavLink>Shop </NavLink>
              </li>
              <li className="header-bottom__item">
                <NavLink>Vendors </NavLink>
              </li>
              <li className="header-bottom__item">
                <NavLink>Mega menu  </NavLink>
              </li>
              <li className="header-bottom__item">
                <NavLink>Blog</NavLink>
              </li>
              <li className="header-bottom__item">
                <NavLink>Pages </NavLink>
              </li>
              <li className="header-bottom__item">
                <NavLink>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="header-bottom__support-center">
            <img src={headphone} alt="support-center img" />
            <div>
              <a href="tel:+1900-888">1900 - 888</a>
              <p>24/7 Support Center</p>
            </div>
          </div>
        </nav>
      </header>
      {
        menu ?
          <div className="header-menu">
            <button onClick={() => setMenu(false)} className="header-menu__close"><IoMdCloseCircle /></button>
            <ul className="header-bottom__list header-menu__list">
              <li className="header-bottom__item">
                <NavLink>Home</NavLink>
              </li>
              <li className="header-bottom__item">
                <NavLink>About</NavLink>
              </li>
              <li className="header-bottom__item">
                <NavLink>Shop </NavLink>
              </li>
              <li className="header-bottom__item">
                <NavLink>Vendors </NavLink>
              </li>
              <li className="header-bottom__item">
                <NavLink>Mega menu  </NavLink>
              </li>
              <li className="header-bottom__item">
                <NavLink>Blog</NavLink>
              </li>
              <li className="header-bottom__item">
                <NavLink>Pages </NavLink>
              </li>
              <li className="header-bottom__item">
                <NavLink>Contact</NavLink>
              </li>
            </ul>
          </div>
          : <></>
      }
    </>
  )
}

export default memo(Header)