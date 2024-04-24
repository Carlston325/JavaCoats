import features from "../DB/features";
import AddDescrip from "../components/AddDescrip";
import Hero from "../components/Hero";
import Feature from "../components/homePageComp/Feature";
import Enquiry from "../components/Enquiry";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
        <Hero 
            title="JavaCoats" 
            lineOne={<AddDescrip
                spanTextOne="coffee"
                descripOne=" is not only a good beverage,"
            />}
            lineTwo={<AddDescrip
                descripOne="It makes a great "
                spanTextTwo="skincare"
                descripTwo=" remedy"
            />}
        />
        <div className="features">
            {features.map((feature, index) => {
            return (
                <Feature
                id={index + 1}
                key={index + 1}
                title={feature.title}
                descrip={feature.descrip}
                img={feature.img}
                />
            );
            })}
        </div>
        <Enquiry />
        <Footer />
    </>
  );
}

export default Home;
