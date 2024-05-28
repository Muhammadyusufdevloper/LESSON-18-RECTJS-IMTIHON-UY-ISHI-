import { faqBottom } from "../../../static"
import "./Service.scss"

const Service = () => {
    const faqCard = faqBottom?.map((el) => (
        <div key={el.id} className="service__cards-card">
            <img src={el.img} alt={el.title} />
            <div className="service__info-card">
                <h3>{el.title}</h3>
                <p>{el.desc}</p>
            </div>
        </div>
    ))
    return (
        <section className="service">
            <div className="container service__cards">
                {faqCard}
            </div>
        </section>
    )
}

export default Service