import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';

const MenuItem = ({href, children}) => {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} font-bold`;
  }

  return <Link href={href}>{React.cloneElement(children, {className})}</Link>;
};

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MenuItem;
