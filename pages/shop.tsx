import ProductCard from '../components/ProductCard';
import chair from '../public/images/chair.jpg';

console.log(chair);

const Shop = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg justify-center justify-items-center">
        <ProductCard
          productId={'123'}
          title="Boko Chair"
          thumbnail={chair}
          description="Cozy high-end chair ecologically sourced from Ethiopian Tree Bark"
          price={200}
        />
        <ProductCard
          productId={'123'}
          title="Boko Chair"
          thumbnail={chair}
          description="Cozy high-end chair ecologically sourced from Ethiopian Tree Bark"
          price={200}
        />
        <ProductCard
          productId={'123'}
          title="Boko Chair"
          thumbnail={chair}
          description="Cozy high-end chair ecologically sourced from Ethiopian Tree Bark"
          price={200}
        />
        <ProductCard
          productId={'123'}
          title="Boko Chair"
          thumbnail={chair}
          description="Cozy high-end chair ecologically sourced from Ethiopian Tree Bark"
          price={200}
        />
        <ProductCard
          productId={'123'}
          title="Boko Chair"
          thumbnail={chair}
          description="Cozy high-end chair ecologically sourced from Ethiopian Tree Bark"
          price={200}
        />
        <ProductCard
          productId={'123'}
          title="Boko Chair"
          thumbnail={chair}
          description="Cozy high-end chair ecologically sourced from Ethiopian Tree Bark"
          price={200}
        />
      </div>
    </div>
  );
};
export default Shop;
