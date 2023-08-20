import { FC } from "react";

import styles from "./BlogCard.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCardProps {
  src: StaticImageData;
}

const BlogCard: FC<BlogCardProps> = ({ src }) => {
  return (
    <article className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={src}
          alt='image details'
          title='image details'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className={styles.img}
        />
      </div>
      <div className={styles.date}>08/18/2023</div>
      <h3 className={styles.title}>Article Title Here</h3>
      <p className={styles.preview}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
        dolorem
      </p>
      {/* More props to be added in the future to display the data from sanity blog*/}
      <Link href='/' className={styles.readMore}>
        Read More
      </Link>
    </article>
  );
};
export default BlogCard;
