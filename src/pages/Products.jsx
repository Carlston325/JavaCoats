import Hero from "../components/Hero";
import PrdctItem from "../components/productPageComp/PrdctItem";
import Footer from "../components/Footer";
import data from "../DB/db.json";

function Products() {
  const products = data.products;

  return (
    <>
      <Hero title="Products" />
      <div>
        {products.map((product, index) => {
          return (
            <PrdctItem
              id={index + 1}
              key={index + 1}
              title={product.title}
              descrip={product.descrip}
              img={product.img}
              price={product.price}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Products;
