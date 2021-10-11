import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-gray-200 h-16 w-full mb-8">
      <div className="container flex items-center justify-between h-full">
        <Link href="/shop">
          <a className="text-xl">Shop</a>
        </Link>
        <Link href="/cart">Shopping Cart</Link>
      </div>
    </div>
  );
};
export default Navbar;
