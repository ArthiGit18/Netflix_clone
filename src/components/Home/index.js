import Hero from "../../pages/hero";
import '../../index.css';
import SectionOne from "../../pages/section1";
import SectionTwo from "../../pages/section2";
import SectionThree from "../../pages/section3";
import SectionFour from "../../pages/section4";
import FAQs from "../../pages/faqs";
import Footer from "../../pages/footer";

const Home = () => {
    return (
        <>
            <Hero />
            <hr style={{ height: "10px", backgroundColor: "#232323", border: "none" }}></hr>
            <SectionOne />
            <hr style={{ height: "10px", backgroundColor: "#232323", border: "none" }}></hr>
            <SectionTwo />
            <hr style={{ height: "10px", backgroundColor: "#232323", border: "none" }}></hr>
            <SectionThree />
            <hr style={{ height: "10px", backgroundColor: "#232323", border: "none" }}></hr>
            <SectionFour />
            <hr style={{ height: "10px", backgroundColor: "#232323", border: "none" }}></hr>
            <FAQs />
            <hr style={{ height: "10px", backgroundColor: "#232323", border: "none" }}></hr>
            <Footer />
        </>
    )
}

export default Home;