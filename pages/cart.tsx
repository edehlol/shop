import Layout from '../components/Layout';

const CartItem = () => {
  return (
    <div className="border-b flex items-center justify-between p-8">
      <div className="flex items-center">
        <div className="rounded-full h-28 w-28 bg-gray-200 mr-8"></div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-lg">Woollen Kitten Sweater</h4>
          <p className="mb-4">
            <small>productId: 4921801</small>
          </p>
          <div className="flex items-center">
            <div className="flex items-center">
              <div className=" flex h-12 mr-4">
                <button className="border rounded-l  w-12 p-2 text-lg bg-gray-100">-</button>
                <input className="border-t border-b w-12 p-2 text-center" />
                <button className="border w-12 p-2 text-lg rounded-r bg-gray-100">+</button>
              </div>
              <div className="text-blue-500 font-semibold">Remove</div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <span className="mr-8 text-gray-600">2 x $300</span>
        <span className="font-semibold text-lg">$600</span>
      </div>
    </div>
  );
};

const Cart = () => {
  const renderList = () => {};
  return (
    <Layout>
      <h1 className="text-2xl mb-8 font-semibold">Your shopping cart</h1>
      <div className="">
        <CartItem />
        <CartItem />
        <CartItem />
        <div className="flex p-8">
          <h2 className="text-xl font-semibold text-left">Subtotal: $4930</h2>
        </div>
      </div>

      <div>
        <button>Pay</button>
      </div>
    </Layout>
  );
};

export default Cart;
