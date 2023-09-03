import { FC } from "react";
import { Posts } from "@/app/lib/interface";
import styles from "./SlugIntro.module.css";
import Image from "next/image";

interface SlugIntroProps {
  posts: Posts;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${month}-${day}-${year}`;
}

const SlugIntro: FC<SlugIntroProps> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1 className={styles.title}>{posts.title}</h1>
          <div className={styles.infoBox}>
            <p className={styles.copy} lang='en'>
              {posts.overview}
            </p>
          </div>
          <div className={styles.details}>
            <p>PUBLISHED</p>
            
            <div className={styles.date}>{formatDate(posts._createdAt)}</div>
          </div>
          <div className={styles.details}>
            <p>TIME TO READ</p>
            <span className={styles.date}>
              {/* <Clock className={styles.icon} /> */}
              15 min
            </span>
          </div>
         
          <div className={styles.details}>
            <p>SHARE</p>
            <span className={styles.date}>
              {/* <Socials borderSize='smallBorder' iconSize='smallIcon' /> */}
            </span>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgContainer}>
            <Image
              src={posts.image}
              alt='image'
              layout='fill'
              objectFit='cover'
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SlugIntro;
