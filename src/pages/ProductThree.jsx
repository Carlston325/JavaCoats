import Hero from "../components/Hero";
import PrdctItem from "../components/productPageComp/PrdctItem";
import Footer from "../components/Footer";
import data from "../DB/db.json";

function Products() {
  const products = data.products;

  return (
    <>
      <Hero title="Product 3" />
      <div>
        <PrdctItem
          id={products + 3}
          key={products + 3}
          title={products[2].title}
          descrip={products[2].descrip}
          img={products[2].img}
          price={products[2].price}
        />
      </div>
      <Footer />
    </>
  );
}

export default Products;
