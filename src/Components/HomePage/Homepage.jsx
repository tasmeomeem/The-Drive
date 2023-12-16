import Nav from "../Nav/Nav";
import Banner from "../HomePage/Banner"
import Brand from "../Brand"
import Testimonial from "../Testimonial";
import AboutUs from "../AboutUs";
import Footer from "../Footer";
// import Category from "./Category";

const Homepage = () => {
    return (
        <div>
            <Nav/>
            <Banner/>
            <AboutUs/>
            <Brand/>
            <Testimonial/>
            <Footer/>
        </div>
    );
};

export default Homepage;