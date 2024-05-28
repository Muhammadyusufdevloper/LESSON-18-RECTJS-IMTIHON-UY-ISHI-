import Faq from "../../components/faq"
import Categories from "./categories"
import Hero from "./hero"
import Products from "./products"
import Service from "./service"

const Home = () => {
    return (
        <>
            <Hero />
            <Categories />
            <Products />
            <Faq />
            <Service />
        </>
    )
}

export default Home