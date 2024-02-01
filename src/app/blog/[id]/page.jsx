import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            voluptatem dolore fugit nobis similique, voluptas quam obcaecati ad,
            rerum ab quasi mollitia facilis nihil. Est magnam tempore minima
            asperiores porro!
          </p>
          <div className={styles.author}>
            <Image
              width={40}
              height={40}
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Author"
              className={styles.avatar}
            />
            <span className={styles.username}>Mike Dave</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Blog"
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quidem
          laborum pariatur alias assumenda nobis sit quibusdam sunt quos, nemo
          explicabo illo deleniti tempora architecto! Earum enim dolorem
          similique tenetur. Fugiat doloribus aspernatur ab? Laboriosam non modi
          delectus, fuga veniam et magni optio nobis cum, quidem tempora
          accusantium, inventore autem obcaecati adipisci qui accusamus debitis
          sint dignissimos blanditiis. Quas, nemo! Harum excepturi provident
          officiis consequatur iure, sunt repudiandae vero magnam velit commodi
          deserunt, perferendis iusto voluptas incidunt eum optio ut tempore
          recusandae odio ducimus omnis, veritatis laudantium in. Libero, alias!
          Nobis quos libero iure, qui, magni tempore voluptas molestias ipsum
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
