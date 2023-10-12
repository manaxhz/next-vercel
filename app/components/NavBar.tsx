// import Link from "next/link";
import React, { FC } from "react";
import { ActiveLink } from "./ActiveLink";

// import styles from "./Navbar.module.css";

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];


export const NavBar: FC = () => {
  return (
    // <nav className={styles['menu-container']}>
    <nav className="ml-5 space-x-5">
      { menuItems.map( item => (
        <ActiveLink key={item.text} text={item.text} href={item.href}/>
      ))}
    </nav>
  );
};
