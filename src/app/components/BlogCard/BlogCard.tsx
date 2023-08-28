import { FC } from "react";

import styles from "./BlogCard.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Post } from "@/app/lib/interface";

interface BlogCardProps {
  src: StaticImageData;
  post: Post;
}

function formatDate(dateString:string) :string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${month}-${day}-${year}`;
}


const BlogCard: FC<BlogCardProps> = ({ src, post }) => {
  return (
    <div className={styles.container}>
        <article  className={styles.card}>
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
          <div className={styles.date}>{formatDate(post._createdAt)}</div>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.preview}>{post.overview}</p>
          <Link href={`/blog/${post.slug.current}`} className={styles.readMore}>
            Read Article
          </Link>
        </article>
    </div>
  );
};
export default BlogCard;
