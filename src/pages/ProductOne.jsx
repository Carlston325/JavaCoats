import Hero from "../components/Hero";
import PrdctItem from "../components/productPageComp/PrdctItem";
import Footer from "../components/Footer";
import data from "../DB/db.json";

function Products() {
  const products = data.products;

  return (
    <>
      <Hero title="Product 1" />
      <div>
        <PrdctItem
          id={products + 1}
          key={products + 1}
          title={products[0].title}
          descrip={products[0].descrip}
          img={products[0].img}
          price={products[0].price}
        />
      </div>
      <Footer />
    </>
  );
}

export default Products;
