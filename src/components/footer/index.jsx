import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

const Footer = () => {
  const date = new Date();

  return (
    <div className={styles.container}>
      <div>&copy; {date.getFullYear()} Youngkingtech. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          width={15}
          height={15}
          src="/1.png"
          className={styles.icon}
          alt="Facebook Icon"
        />
        <Image
          width={15}
          height={15}
          src="/2.png"
          className={styles.icon}
          alt="Instagram Icon"
        />
        <Image
          width={15}
          height={15}
          src="/3.png"
          className={styles.icon}
          alt="Twitter Icon"
        />
        <Image
          width={15}
          height={15}
          src="/4.png"
          className={styles.icon}
          alt="Youtube Icon"
        />
      </div>
    </div>
  );
};

export default Footer;
