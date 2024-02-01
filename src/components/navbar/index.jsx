import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import DarkModeToggle from "../darkModeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <header className={styles.container}>
      <Link href="/" className={styles.logo}>
        <div>Logo</div>
      </Link>
      <nav>
        <div>
          <ul className={styles.links}>
            <DarkModeToggle />
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.url} className={styles.link}>
                  {link.title}
                </Link>
              </li>
            ))}
            <button className={styles.logout}>Logout</button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
