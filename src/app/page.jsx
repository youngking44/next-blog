import Image from "next/image";
import Hero from "/public/hero.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your idea into reality . We bring together the team from
          global tech industry.
        </p>
        <button className={styles.title}>See our works.</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} className={styles.img} alt="Hero image" />
      </div>
    </div>
  );
}
