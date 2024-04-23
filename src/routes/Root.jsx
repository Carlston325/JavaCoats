import features from "../components/webpageDATA/features";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Enquiry from "../components/Enquiry";
import Footer from "../components/Footer";

export default function Root() {
  <>
    <Header />
    <Hero title="JavaCoats" />
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
  </>;
}
