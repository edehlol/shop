import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { Product } from '../interfaces/Product';
import { getProductsList } from '../lib/products';

const Shop = ({ productsData }: { productsData: Product[] }) => {
  const renderList = () => {
    return productsData.map((product: Product) => (
      <ProductCard
        key={product.id}
        id={product.id}
        name={product.name}
        thumbnail={product.thumbnail}
        description={product.description}
        price={product.price}
        cartQuantity={0}
      />
    ));
  };
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg justify-center justify-items-center">
          {renderList()}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const productsData = getProductsList();
  return {
    props: { productsData },
  };
}

export default Shop;
