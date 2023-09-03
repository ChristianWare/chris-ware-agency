import { FC } from "react";

import styles from "./BlogCard.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Posts } from "@/app/lib/interface";

interface BlogCardProps {
  post: Posts;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${month}-${day}-${year}`;
}

export const revalidate = 60;

const BlogCard: FC<BlogCardProps> = ({ post }) => {
  return (
    <div className={styles.container}>
      <article className={styles.card}>
        <div className={styles.imgContainer}>
          <Image
            src={post.image}
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
        <Link href={`/blog/${post.slug}`} prefetch className={styles.readMore}>
          Read Article
        </Link>
      </article>
    </div>
  );
};
export default BlogCard;
