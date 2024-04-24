import Hero from "../components/Hero";
import PrdctItem from "../components/productPageComp/PrdctItem";
import Footer from "../components/Footer";
import data from "../DB/db.json";

function Products() {
  const products = data.products;

  return (
    <>
      <Hero title="Product 2" />
      <div>
        <PrdctItem
          id={products + 2}
          key={products + 2}
          title={products[1].title}
          descrip={products[1].descrip}
          img={products[1].img}
          price={products[1].price}
        />
      </div>
      <Footer />
    </>
  );
}

export default Products;
