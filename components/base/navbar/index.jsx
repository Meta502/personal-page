import Link from 'next/link';
import Item from './MenuItem';

const Navbar = () => (
  <div className="fixed w-full py-4 px-6">
    <div className="flex justify-between items-center mx-auto text-white">
      <Link href="/">
        <h1 className="text-xl font-semibold cursor-pointer select-none">
          adrian.ardizza
        </h1>
      </Link>
      <div className="flex font-light text-md">
        <Item href="/">
          <a className="mr-5">home</a>
        </Item>
        <Item href="/about">
          <a>about</a>
        </Item>
      </div>
    </div>
  </div>
);

export default Navbar;
