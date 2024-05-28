import faqImg from "../../assets/faq/faq img.png"
import "./Faq.scss"
const Faq = () => {
    return (
        <>
            <section className="faq">
                <div className="container faq-wrapper">
                    <img src={faqImg} alt="" />
                    <h2 className="faq__title">Stay home & get your daily
                        needs from our shop</h2>
                    <p className="faq__text">Start You`r Daily Shopping with <span>Nest Mart</span></p>
                    <div className="faq__card">
                        <input type="text" placeholder="Your emaill address" />
                        <button className="faq__btn">Subscribe</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq