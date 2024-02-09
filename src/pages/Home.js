import Hero from "../components/Hero/Hero"
import ChooseUs from "../components/ChooseUs"
import Trainers from "../components/Trainers"
import Testimonials from "../components/Testimonials"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer/Footer"
import BmiCalc from "../components/BMI/BmiCalc"


function Home(){
    return(
        <>
            <Hero/>
            <ChooseUs/>
            <Trainers/>
            <Testimonials/>
            <BmiCalc/>
            <Gallery/>
            <Footer/>
        </>
    )
}

export default Home