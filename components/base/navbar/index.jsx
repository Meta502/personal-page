import Link from 'next/link';
import Item from './MenuItem';

const Navbar = () => (
  <div className="fixed w-full py-3">
    <div className="flex justify-between items-center max-w-5xl mx-auto text-white">
      <Link href="/">
        <h1 className="font-semibold cursor-pointer select-none">
          adrian.ardizza
        </h1>
      </Link>
      <div className="flex text-xs font-light">
        <Item href="/">
          <a className="mr-3">home</a>
        </Item>
        <Item href="/about">
          <a>about</a>
        </Item>
      </div>
    </div>
  </div>
);

export default Navbar;
